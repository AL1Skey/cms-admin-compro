import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import NotFound from "@/app/[locale]/not-found";
import Form from "../form";
import getBanner from "../lib/getBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cookies } from "next/headers";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export async function generateStaticParams() {
  const ids: any = await getBanner();
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

const page = async ({ params }: { params: any }) => {
  const token = await cookies().get("Authorization")?.value;
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/header/${params.id}`,
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
