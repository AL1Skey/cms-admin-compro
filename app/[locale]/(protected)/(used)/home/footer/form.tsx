"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { action } from './action';
import { useRouter } from '@/components/navigation';
type PageProps = Partial<{
    data:{[key:string]:any};
}>;

const Form = ({ data={} }:PageProps) => {
    const router = useRouter();
    const [address, setAddress] = useState(data?.address || '');
    const [addressUrl, setAddressUrl] = useState(data?.addressUrl || '');
    const [phone, setPhone] = useState(data?.phone || '');
    const [email, setEmail] = useState(data?.email || '');
    const [facebook, setFacebook] = useState(data?.facebook || '');
    const [instagram, setInstagram] = useState(data?.instagram || '');
    const [twitter, setTwitter] = useState(data?.twitter || '');
    const [notEdit, setNotEdit] = useState(true);

    const handleEditChange = () => {
        // console.log('edit');
        setNotEdit(!notEdit);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const handleAddressUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddressUrl(e.target.value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleFacebookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFacebook(e.target.value);
    };

    const handleInstagramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInstagram(e.target.value);
    };

    const handleTwitterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTwitter(e.target.value);
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
                action(e);
                setNotEdit(true);
                router.refresh();
            }}>
                <div>
                    <Label htmlFor="address">Address:</Label>
                    <Input name='address' type="text" id="address" value={address} onChange={handleAddressChange} readOnly={notEdit} />
                </div>
                <div>
                    <Label htmlFor="addressUrl">Address URL:</Label>
                    <Input name='addressUrl' type="text" id="addressUrl" value={addressUrl} onChange={handleAddressUrlChange} readOnly={notEdit} />
                </div>
                <div>
                    <Label htmlFor="phone">Phone:</Label>
                    <Input name='phone' type="text" id="phone" value={phone} onChange={handlePhoneChange} readOnly={notEdit} />
                </div>
                <div>
                    <Label htmlFor="email">Email:</Label>
                    <Input name='email' type="text" id="email" value={email} onChange={handleEmailChange} readOnly={notEdit} />
                </div>
                <div>
                    <Label htmlFor="facebook">Facebook:</Label>
                    <Input name='facebook' type="text" id="facebook" value={facebook} onChange={handleFacebookChange} readOnly={notEdit} />
                </div>
                <div>
                    <Label htmlFor="instagram">Instagram:</Label>
                    <Input name='instagram' type="text" id="instagram" value={instagram} onChange={handleInstagramChange} readOnly={notEdit} />
                </div>
                <div>
                    <Label htmlFor="twitter">Twitter:</Label>
                    <Input name='twitter' type="text" id="twitter" value={twitter} onChange={handleTwitterChange} readOnly={notEdit} />
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