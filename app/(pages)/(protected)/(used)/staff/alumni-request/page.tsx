import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from './components/basic-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cookies } from 'next/headers';

const dataset = [
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        image: 'https://example.com/johndoe.jpg',
        phone: '1234567890',
        jobs: 'Software Engineer',
        angkatan: '2010',
        jurusan: 'Computer Science',
        approval: true,
    },
    {
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        image: 'https://example.com/janesmith.jpg',
        phone: '9876543210',
        jobs: 'Web Developer',
        angkatan: '2015',
        jurusan: 'Information Technology',
        approval: false,
    },
    // Add more dummy data here if needed
];

const Page = async() => {
    const token = cookies().get('Authorization')?.value;
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
    }).then((res) => res.json()).catch((err) => {
        console.error(err);
    });
    return (
        <div>
            <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>Alumni Request</CardTitle>
                    <Button><Link href="alumni/add">Add</Link></Button>
                </div>
            </CardHeader>
            <CardContent>
            <BasicTable columns={Object.keys(dataset[0])} tableData={data} />
            </CardContent>
          </Card>
            
        </div>
    );
};

export default Page;