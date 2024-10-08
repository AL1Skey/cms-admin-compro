"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from '../../components/basic-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const dataset = [
    {
        image: "image-url-1",
        title: "Title 1",
        createAt: new Date().toISOString(),
        category: "Category 1",
        author: "Author 1",
        description: "Description 1"
    },
    {
        image: "image-url-2",
        title: "Title 2",
        createAt: new Date().toISOString(),
        category: "Category 2",
        author: "Author 2",
        description: "Description 2"
    },
    // Add more data objects as needed
];

const Page = () => {
    
    return (
        <div>
            <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>Blog</CardTitle>
                    <Button><Link href="blog/add">Add</Link></Button>
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