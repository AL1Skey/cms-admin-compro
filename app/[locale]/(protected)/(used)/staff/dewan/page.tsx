"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from '../../components/basic-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


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
const Page = () => {
    
    return (
        <div>
            <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>Dewan Pembimbing</CardTitle>
                    <Button><Link href="dewan/add">Add</Link></Button>
                </div>
            </CardHeader>
            <CardContent>
            <BasicTable columns={Object.keys(dataset[0])} tableData={dataset} />
            </CardContent>
          </Card>
            
        </div>
    );
};

export default Page;