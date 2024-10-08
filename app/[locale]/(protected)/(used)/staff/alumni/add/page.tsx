import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Form from '../form';
const page = () => {
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Alumni</CardTitle>
        </CardHeader>
        <CardContent>
            <Form />
        </CardContent>
      </Card>
    </div>
  )
}

export default page
