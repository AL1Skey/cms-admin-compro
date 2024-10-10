import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Form from '../../form';
import { cookies } from 'next/headers';
import NotFound from '@/app/[locale]/not-found';
import getAlumni from '../../lib/getAlumni';
const page = async() => {
  const token = cookies().get('Authorization')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/header`,{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
      }
  }).then(res => res.json());
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Banner</CardTitle>
        </CardHeader>
        <CardContent>
            <Form data={data} />
        </CardContent>
      </Card>
    </div>
  )
}

export default page

export async function generateStaticParams() {
  const ids: any = await getAlumni();
  if (!ids?.length) {
    return <NotFound />;
  }
  console.log(ids);
  return ids.map((id: any) => {
    return {
      params: {
        id: id.id,
      },
    };
  });
}
