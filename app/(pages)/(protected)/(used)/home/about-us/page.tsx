import React from "react";
import Form from "./form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { cookies } from "next/headers";



const dummy=
  {
    image: "https://example.com/dummy-image-1.jpg",
    title: "Dummy Title 1",
    description: "This is a dummy description for the first result",
    visi: "Dummy Visi 1",
    misi: "Dummy Misi 1",
  }

const page = async() => {
  const token = cookies().get("Authorization")?.value;
  const {data} = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about-us`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  }).then((res) => res.json());

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>About Us</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Form data={data}  />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
