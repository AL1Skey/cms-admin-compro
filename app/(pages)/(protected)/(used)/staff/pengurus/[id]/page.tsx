import React from 'react'
import { cookies } from 'next/headers';
import NotFound from '@/app/(pages)/not-found';
import Form from '../form';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const page = async({id}:{id:string}) => {
  const token = cookies().get('Authorization')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pengurus/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  }).then((res) => res.json());
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Tim Kepengurusan</CardTitle>
            <Link href="/en/staff/pengurus">
              <Button>Go Back</Button>
            </Link>
        </CardHeader>
        <CardContent>
        <Form data={{ ...data }} notEdit={true} />
        </CardContent>
      </Card>
    </div>
  )
}


export default page

type Params = {
    id: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const ids: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/pengurus`,{cache:'no-store'}).then((res) => res.json());
  // Return empty array if no IDs are found
  if (!ids || ids.length === 0) {
    return [{ id: 'not-found' }];
  }
  console.log(ids.map((item: any) => {
    return {
     
        id: item?.id.toString(),
      
    };
  }));
  return ids.map((item: any) => {
    return {
     
        id: item?.id.toString(),
      
    };
  });
}