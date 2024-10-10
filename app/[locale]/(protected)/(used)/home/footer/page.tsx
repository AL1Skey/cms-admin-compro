import React from "react";
import Form from "./form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { cookies } from "next/headers";

const dummy = {
  "address": "123 Main St, Anytown, USA 12345",
  "addressUrl": "https://www.example.com/map",
  "phone": "(123) 456-7890",
  "email": "info@example.com",
  "facebook": "https://www.facebook.com/example",
  "instagram": "https://www.instagram.com/example",
  "twitter": "https://www.twitter.com/example"
};

const page = async() => {
  const token = cookies().get("Authorization")?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/footer/one`, {
    headers: {
      "Authorization": `${token}`
    }
  }).then(res => res.json()).then(data => data).catch(err => err);
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Contact Info</CardTitle>
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
