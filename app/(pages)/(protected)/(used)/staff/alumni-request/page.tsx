import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from './components/basic-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cookies } from 'next/headers';
import Filter from './components/FIlter';
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

const columns = [
    "No",
    "Name",
    "Email",
    "Phone",
    "Pekerjaan",
    "Angkatan",
    "Jurusan",
    "Approval",
]

const Page = async({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) => {
    const token = cookies().get('Authorization')?.value;
    const {angkatan} = (await searchParams) as { angkatan: string | undefined };
    return (
        <div>
            <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>Alumni Request</CardTitle>
                    <div className='flex justify-between gap-10'>
                    <Filter />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
            <BasicTable columns={columns} token={token} angkatan={angkatan} />
            </CardContent>
          </Card>
            
        </div>
    );
};

export default Page;