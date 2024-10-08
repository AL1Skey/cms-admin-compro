"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import UploadSingleFile from '../../components/forms/upload-single-file';
type PageProps = Partial<{
    data: {
        image: string|undefined;
        title: string|undefined;
        description: string|undefined;
        visi: string|undefined;
        misi: string|undefined;
    };
}>;

const Form = ({ data }: PageProps) => {
    const [image, setImage] = useState(data?.image || '');
    const [title, setTitle] = useState(data?.title || '');
    const [description, setDescription] = useState(data?.description || '');
    const [visi, setVisi] = useState(data?.visi || '');
    const [misi, setMisi] = useState(data?.misi || '');
    const [notEdit, setNotEdit] = useState(true);

    const handleEditChange = () => {
        setNotEdit(!notEdit);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleVisiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVisi(e.target.value);
    };

    const handleMisiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMisi(e.target.value);
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
                            <Label htmlFor="image">Image:</Label>
                            <UploadSingleFile edit={notEdit}/>
                        </div>
                        <div>
                            <Label htmlFor="title">Title:</Label>
                            <Input name="title" type="text" id="title" value={title} onChange={handleTitleChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="description">Description:</Label>
                            <Input name="description" type="text" id="description" value={description} onChange={handleDescriptionChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="visi">Visi:</Label>
                            <Input name="visi" type="text" id="visi" value={visi} onChange={handleVisiChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="misi">Misi:</Label>
                            <Input name="misi" type="text" id="misi" value={misi} onChange={handleMisiChange} readOnly={notEdit} />
                        </div>
                        <div style={{ marginTop: '1rem' }} />
                        {!notEdit && (
                            <div className="flex gap-2">
                                <Button type="submit">Submit</Button>
                                <Button type="button" onClick={handleEditChange}>Discard</Button>
                            </div>
                        )}
                        {notEdit && <Button type="button" onClick={handleEditChange}>Edit</Button>}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Form;
