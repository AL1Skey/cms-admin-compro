"use client";
import React, { useState } from 'react';
import UploadSingleFile from '../../components/forms/upload-single-file';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type PageProps = Partial<{
    data: any;
    notEdit: boolean;
}>;

const Form = ({data,notEdit=false}:PageProps) => {


    const [formData, setFormData] = useState({
        name: data?.name || '',
        email: data?.email || '',
        phone: data?.phone || '',
        jobs: data?.jobs || '',
        angkatan: data?.angkatan || '',
        jurusan: data?.jurusan || '',
        approval: data?.approval || false,
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

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
                            <Label htmlFor="name">Name:</Label>
                            <Input name='name' type="text" id="name" value={formData.name} onChange={handleInputChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="email">Email:</Label>
                            <Input name='email' type="text" id="email" value={formData.email} onChange={handleInputChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="image">Image:</Label>
                            <UploadSingleFile />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone:</Label>
                            <Input name='phone' type="text" id="phone" value={formData.phone} onChange={handleInputChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="jobs">Jobs:</Label>
                            <Input name='jobs' type="text" id="jobs" value={formData.jobs} onChange={handleInputChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="angkatan">Angkatan:</Label>
                            <Input name='angkatan' type="text" id="angkatan" value={formData.angkatan} onChange={handleInputChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="jurusan">Jurusan:</Label>
                            <Input name='jurusan' type="text" id="jurusan" value={formData.jurusan} onChange={handleInputChange} readOnly={notEdit} />
                        </div>
                        <div>
                            <Label htmlFor="approval">Approval:</Label>
                            <Input name='approval' type="checkbox" id="approval" checked={formData.approval} onChange={handleInputChange} readOnly={notEdit} />
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