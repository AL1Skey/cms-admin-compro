import React from 'react'
import { cookies } from 'next/headers';
import NotFound from '@/app/(pages)/not-found';
import Form from '../form';
import { update } from '../action/action';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const page = async({params}:{params:any}) => {
  const token = cookies().get('Authorization')?.value;
  const {id} = params;
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
            <Link href="/staff/alumni">
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