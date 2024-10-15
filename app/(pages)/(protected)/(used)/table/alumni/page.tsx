import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from './components/basic-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { deleteAct } from './action/action';
import ExcelImport from './components/excel-form';
import ExcelDownloader from './components/excel-download';

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

const Page = async() => {
    const token = cookies().get('Authorization')?.value;
    return (
        <div>
            <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>Alumni</CardTitle>
                    <div className='flex justify-between gap-10'>
                    <Button><Link href="alumni/add">Add</Link></Button>
                    <ExcelImport/>
                    <ExcelDownloader/>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
            <BasicTable columns={columns} action={deleteAct} token={token} />
            </CardContent>
          </Card>
            
        </div>
    );
};

export default Page;