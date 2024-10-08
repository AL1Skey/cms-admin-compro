import React from "react";
import Form from "./form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";



const dummy=
  {
    image: "https://example.com/dummy-image-1.jpg",
    title: "Dummy Title 1",
    description: "This is a dummy description for the first result",
    visi: "Dummy Visi 1",
    misi: "Dummy Misi 1",
  }

const page = () => {

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Contact Info</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Form data={dummy}  />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
