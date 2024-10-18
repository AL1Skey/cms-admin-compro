"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { action } from './action';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
type PageProps = Partial<{
    data:{[key:string]:any};
}>;

const Form = ({ data={} }:PageProps) => {
    const router = useRouter();
    const [username, setUsername] = useState(data?.name || '');
    // const [addressUrl, setAddressUrl] = useState(data?.addressUrl || '');
    // const [phone, setPhone] = useState(data?.phone || '');
    const [email, setEmail] = useState(data?.email || '');
    // const [facebook, setFacebook] = useState(data?.facebook || '');
    // const [instagram, setInstagram] = useState(data?.instagram || '');
    // const [twitter, setTwitter] = useState(data?.twitter || '');
    const [notEdit, setNotEdit] = useState(false);

    const handleEditChange = () => {
        // console.log('edit');
        router.push('/profile');
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <Card>
            <CardContent>
            <form action={(e:FormData)=>{
                async function doAct() {
                    try {
                        const response = await action(e);
                        setNotEdit(true);
                        toast.success('Profile updated successfully');
                        router.push('/profile');
                    } catch (error) {
                        toast.error('Failed to update profile');
                    }
                }
                doAct();
            }}>
                <div>
                    <Label htmlFor="name">Name:</Label>
                    <Input name='name' type="text" id="username" value={username} onChange={handleUsernameChange} readOnly={notEdit} />
                </div>
                <div>
                    <Label htmlFor="email">Email:</Label>
                    <Input name='email' type="text" id="email" value={email} onChange={handleEmailChange} readOnly={notEdit} />
                </div>
                <div style={{ marginTop: '1rem' }}/>
                {!notEdit && (
                    <div className='flex gap-2'>
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