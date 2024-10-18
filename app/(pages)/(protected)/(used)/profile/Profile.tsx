"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

type ProfileProps = Partial<{
    data: { [key: string]: any }
    token: any
    }>;
    

const Profile = ({data,token}:ProfileProps) => {
  const router = useRouter();



  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
            {data && (
                <div className='p-5 mb-5 '>
                    <p><strong>Name:</strong> {data.name || 'N/A'}</p>
                    <div className='mb-5' />
                    <p><strong>Email:</strong> {data.email || 'N/A'}</p>
                </div>
            )}
            <div className='p-5 flex justify-between'>
            <form action={(e:FormData)=>{
                async function doAct() {
                    try {
                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/forgot-password`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `${token}`
                                },
                                body: JSON.stringify({email:e.get('email')})
                                }).then(res => res.json());
                          console.log(response);
                        if(response.token){
                          toast.success('Redirecting to reset password page');
                          router.push(`/profile/forgot-password/${response.token}`);
                        } else{
                          toast.error('Failed to redirect');
                        }
                       
                    } catch (error) {
                        toast.error('Failed to redirect ');
                    }
                }
                doAct();
            }}>
              <input type="hidden" name='email' value={data?.email || 'N/A'} />
              <Button className='h-9 w-36' type='submit'>Reset Password</Button>
            </form>
            <Button className='h-9 w-36' onClick={()=>router.push('/profile/edit')}>Edit</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
