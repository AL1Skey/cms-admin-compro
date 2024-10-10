import React from 'react'
import { cookies } from 'next/headers';
import NotFound from '@/app/[locale]/not-found';
import Form from '../form';
import { update } from '../action/action';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const page = async({params}:{params:any}) => {
  const token = cookies().get('Authorization')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni/${params.id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Alumni</CardTitle>
        </CardHeader>
        <CardContent>
        <Form data={{ ...data }} notEdit={true} />
        </CardContent>
      </Card>
    </div>
  )
}


export default page

export async function generateStaticParams() {
  const ids: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni`);
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