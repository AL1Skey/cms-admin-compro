import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from '../../components/basic-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cookies } from 'next/headers';


const dataset = [
    {
        image: "image_url_1",
        name: "John Doe",
        position: "Manager",
        description: "Lorem ipsum dolor sit amet",
        phone: "1234567890",
        email: "john.doe@example.com",
        facebook: "john.doe",
        instagram: "john.doe",
        twitter: "john.doe"
    },
    {
        image: "image_url_2",
        name: "Jane Smith",
        position: "Developer",
        description: "Lorem ipsum dolor sit amet",
        phone: "0987654321",
        email: "jane.smith@example.com",
        facebook: "jane.smith",
        instagram: "jane.smith",
        twitter: "jane.smith"
    }
];

const columns = [
    "No",
  "image",
  "name",
  "position",
  "description",
  "phone",
  "email",
  "facebook",
  "instagram",
  "twitter",
];
const Page = async() => {
    const token = cookies().get('Authorization')?.value;
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pengurus`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
    })
    return (
        <div>
            <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>Tim Kepengurusan</CardTitle>
                    <Button><a href="pengurus/add">Add</a></Button>
                </div>
            </CardHeader>
            <CardContent>
            <BasicTable columns={columns} tableData={data} />
            </CardContent>
          </Card>
            
        </div>
    );
};

export default Page;