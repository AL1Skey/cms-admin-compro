import React from 'react'
import { cookies } from 'next/headers';
import NotFound from '@/app/(pages)/not-found';
import Form from '../../form';
import { update } from '../../action/action';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const page = async({id}:{id:string}) => {
  const token = cookies().get('Authorization')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/karir/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  }).then((res) => res.json());
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Karir</CardTitle>
        </CardHeader>
        <CardContent>
        <Form data={{ ...data, id:id }} action={update} />
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
  const ids: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/karir`,{cache:'no-store'}).then((res) => res.json());
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