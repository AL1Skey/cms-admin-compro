import React from "react";
import Form from "./form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";

const dummy = {
  "address": "123 Main St, Anytown, USA 12345",
  "addressUrl": "https://www.example.com/map",
  "phone": "(123) 456-7890",
  "email": "info@example.com",
  "facebook": "https://www.facebook.com/example",
  "instagram": "https://www.instagram.com/example",
  "twitter": "https://www.twitter.com/example"
};

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
