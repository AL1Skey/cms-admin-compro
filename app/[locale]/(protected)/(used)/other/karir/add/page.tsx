import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Form from '../form';
import { add } from '../action/action';
const page = () => {
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Karir</CardTitle>
        </CardHeader>
        <CardContent>
            <Form action={add}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
