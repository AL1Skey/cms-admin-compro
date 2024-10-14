import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import NotFound from "@/app/(pages)/not-found";
import Form from "../form";
import getBanner from "../lib/getBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cookies } from "next/headers";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
type Params = {
    id: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const ids = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/header`, {
    cache: 'no-store',
  }).then((res) => res.json());

  if (!ids || ids.length === 0) {
    return [{ id: 'not-found' }];
  }

  // Map the fetched data to create paths with id
  return ids.map((item: any) => ({
    id: item.id.toString(),  // Make sure id is a string
  }));
}


const page = async ({ id }: { id: any }) => {
  const token = await cookies().get("Authorization")?.value;
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/header/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  ).then((res) => res.json());
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Banner</CardTitle>
            <Link href="/en/home/banner">
              <Button>Go Back</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <Form
            dataTitle={post?.title}
            dataDescription={post?.description}
            dataImage={post?.image}
            edit={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
