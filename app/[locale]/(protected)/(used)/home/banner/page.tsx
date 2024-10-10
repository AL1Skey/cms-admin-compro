import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from '../../components/basic-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { getCookie } from "typescript-cookie";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { deleteAct } from './action/action';

const Page = async() => {
    
    const token = await cookies().get('Authorization')?.value;
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/header`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(res => res.json());
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
            {data?.length > 0 && <BasicTable columns={Object.keys(data[0])} tableData={data} action={deleteAct} />}
            </CardContent>
          </Card>
            
        </div>
    );
};

export default Page;