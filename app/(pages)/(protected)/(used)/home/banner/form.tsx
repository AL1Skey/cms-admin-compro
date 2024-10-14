"use client"
import React, { useState } from 'react';
import UploadSingleFile from '../../components/forms/upload-single-file';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { add } from './action/action';
import { useRouter } from 'next/navigation';

type PageProps = Partial<{
    id: any;
    dataTitle: string;
    dataDescription: string;
    dataImage: string | null;
    edit:boolean;
    action(...args:any): Promise<any>;
}>;

const Form = ({id=null, dataTitle = '', dataDescription = '', dataImage = null, edit=true,action }: PageProps) => {
    const [title, setTitle] = useState(dataTitle);
    const [description, setDescription] = useState(dataDescription);
    const router = useRouter();
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
            <form action={(e:FormData)=>{
                if(action){
                action(e)
                }
                router.back()
                }} encType="multipart/form-data">
                {id&&<input type="hidden" name="id" value={id} />}
                <div>
                    <Label htmlFor="title">Image Title:</Label>
                    <Input name='title' type="text" id="title" value={title} onChange={handleTitleChange} readOnly={!edit} />
                </div>
                <div>
                    <Label htmlFor="description">Image Description:</Label>
                    <Input name='description' type="text" id="description" value={description} onChange={handleDescriptionChange} readOnly={!edit} />
                </div>
                <div>
                    <Label htmlFor="image">Image File:</Label>
                    {!dataImage && <UploadSingleFile />}
                    {dataImage && !edit && <img src={dataImage} alt="Image" />}
                    {dataImage && edit && <UploadSingleFile image={dataImage} />}
                </div>
                <div style={{ marginTop: '1rem' }}/>
                {edit && <Button type="submit">Submit</Button>}

            </form>
            </CardContent>
          </Card>
            
        </div>
    );
};

export default Form;