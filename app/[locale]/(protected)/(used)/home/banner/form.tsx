"use client"
import React, { useState } from 'react';
import UploadSingleFile from '../../components/forms/upload-single-file';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { add } from './action/action';

type PageProps = Partial<{
    dataTitle: string;
    dataDescription: string;
    dataImage: string | null;
}>;

const Form = ({ dataTitle = '', dataDescription = '', dataImage = null }: PageProps) => {
    const [title, setTitle] = useState(dataTitle);
    const [description, setDescription] = useState(dataDescription);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

   

    

    return (
        <div>
            <Card>
            <CardContent>
            <form action={add} encType="multipart/form-data">
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