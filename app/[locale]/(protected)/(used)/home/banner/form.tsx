"use client"
import React, { useState } from 'react';
import UploadSingleFile from '../../components/forms/upload-single-file';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
type PageProps = Partial<{
    dataTitle: string;
    dataDescription: string;
    dataImage: string | null;
}>;

const Form = ({ dataTitle = '', dataDescription = '', dataImage = null }: PageProps) => {
    const [title, setTitle] = useState(dataTitle);
    const [description, setDescription] = useState(dataDescription);
    const [image, setImage] = useState<File | string| null>(dataImage);
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
            <CardContent>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="title">Image Title:</Label>
                    <Input name='title' type="text" id="title" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <Label htmlFor="description">Image Description:</Label>
                    <Input name='description' type="text" id="description" value={description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <Label htmlFor="image">Image File:</Label>
                    <UploadSingleFile />
                </div>
                <div style={{ marginTop: '1rem' }}/>
                <Button type="submit">Submit</Button>
            </form>
            </CardContent>
          </Card>
            
        </div>
    );
};

export default Form;