import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Form from '../form';
import { add } from '../action/action';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/jwt';
const page = () => {
  const token = cookies().get('Authorization')?.value.split(' ')[1];
  const user = verifyToken(token) as any
  const data = {
    author: user?.name
  }
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Blog</CardTitle>
        </CardHeader>
        <CardContent>
            <Form action={add} data={data} />
        </CardContent>
      </Card>
    </div>
  )
}

export default page
