import React from 'react'
import getAlumni from '../lib/getAlumni';
import { cookies } from 'next/headers';
import NotFound from '@/app/[locale]/not-found';
import Form from '../form';
const page = async({params}:{params:any}) => {
  const token = cookies().get('Authorization')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni/${params.id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return (
    <div>
      <Form data={data} notEdit={true} />
    </div>
  )
}

export default page

export async function generateStaticParams() {
  const ids: any = await getAlumni();
  if (!ids?.length) {
    return <NotFound />;
  }
  console.log(ids);
  return ids.map((id: any) => {
    return {
      params: {
        id: id.id,
      },
    };
  });
}