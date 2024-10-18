import React from 'react'
import Form from '../form'
import { cookies } from 'next/headers'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const page = async() => {
    const token = cookies().get('Authorization')?.value
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/self`, {
        method: 'GET',
        headers: {
            'Authorization': `${token}`
        }
    }).then(res => res.json())
  return (
    <Card>
        <CardHeader>
            <h1>Profile</h1>
        </CardHeader>
        <CardContent>

        <Form data={data} />
        </CardContent>
    </Card>
  )
}

export default page