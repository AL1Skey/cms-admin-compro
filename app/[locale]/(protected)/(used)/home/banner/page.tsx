"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from '../../components/basic-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
interface Dataset {
    id: number;
    image: string;
    name: string;
    description: string;
}

const dataset: Dataset[] = [
    {
        id: 1,
        image: 'path/to/image1.jpg',
        name: 'Dataset 1',
        description: 'Description 1'
    },
    {
        id: 2,
        image: 'path/to/image2.jpg',
        name: 'Dataset 2',
        description: 'Description 2'
    },
    {
        id: 3,
        image: 'path/to/image3.jpg',
        name: 'Dataset 3',
        description: 'Description 3'
    },
    {
        id: 4,
        image: 'path/to/image4.jpg',
        name: 'Dataset 4',
        description: 'Description 4'
    },
    {
        id: 5,
        image: 'path/to/image5.jpg',
        name: 'Dataset 5',
        description: 'Description 5'
    }
];

const Page = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedImage = e.target.files[0];
            setImage(selectedImage);
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>Banner</CardTitle>
                    <Button><Link href="banner/add">Add</Link></Button>
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