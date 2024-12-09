import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {deleteAct} from "./action/action";
import BasicTable from "../../components/basic-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cookies } from "next/headers";
import AddButton from "../../components/AddButton";
const dataset = [
  {
    image: "image_url_1",
    name: "John Doe",
    position: "Manager",
    description: "Lorem ipsum dolor sit amet",
    phone: "1234567890",
    email: "john.doe@example.com",
    facebook: "john.doe",
    instagram: "john.doe",
    twitter: "john.doe",
  },
  {
    image: "image_url_2",
    name: "Jane Smith",
    position: "Developer",
    description: "Lorem ipsum dolor sit amet",
    phone: "0987654321",
    email: "jane.smith@example.com",
    facebook: "jane.smith",
    instagram: "jane.smith",
    twitter: "jane.smith",
  },
];

const columns = [
    "No",
  "image",
  "name",
  "position",
  "description",
];
const Page = async () => {
  const token = cookies().get("Authorization")?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dewan`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Dewan Pembina</CardTitle>
            <AddButton href="dewan/add" />
          </div>
        </CardHeader>
        <CardContent>
          <BasicTable columns={columns} tableData={data} action={deleteAct}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
