import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Form from '../../form';
import { add } from '../../action/action';
const page = async({params}:{params:any}) => {
  const { id } = params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json()).catch((err) => {
    console.error(err);
  });
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Alumni</CardTitle>
        </CardHeader>
        <CardContent>
            <Form action={add} data={data}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
