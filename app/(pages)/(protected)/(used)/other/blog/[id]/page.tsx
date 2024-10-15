import React from 'react'
import { cookies } from 'next/headers';
import NotFound from '@/app/(pages)/not-found';
import Form from '../form';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const page = async({params}:{params:any}) => {
  const {id} = params;
  const token = cookies().get('Authorization')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  }).then((res) => res.json());
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Blog</CardTitle>
            <Link href="/other/blog">
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
