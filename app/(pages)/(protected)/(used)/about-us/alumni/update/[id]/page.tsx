import React from 'react'
import { cookies } from 'next/headers';
import NotFound from '@/app/(pages)/not-found';
import Form from '../../form';
import { update } from '../../action/action';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const page = async({id}:{id:string}) => {
  const token = cookies().get('Authorization')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  }).then((res) => res.json());
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Alumni</CardTitle>
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
  const ids = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni`,{cache:'no-store'}).then((res) => res.json());
  
  // If no data is found, return an empty array
  if (!ids || ids.length === 0) {
    return [{ id: 'not-found' }];
  }

  // Return paths for each `id`
  return ids.map((id: any) => ({
    id: id.toString(),  // Ensure ID is a string
  }));
}