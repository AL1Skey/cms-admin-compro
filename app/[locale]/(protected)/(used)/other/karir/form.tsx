"use client";
import React, { useState } from "react";
import UploadSingleFile from "../../components/forms/upload-single-file";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "@/components/navigation";

type PageProps = Partial<{
  data: any;
  notEdit: boolean;
    action(...args:any): Promise<any>;
}>;

const Form = ({ data, notEdit = false,action }: PageProps) => {
  const [formData, setFormData] = useState({
    image: data?.image || "",
    title: data?.title || "",
    decription: data?.decription || "",
    end_date: data?.end_date || "",
    email: data?.email || "",
  });
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Card>
        <CardContent>
          <form action={(e)=>{
            if(action){
                action(e)
                }
            toast.success("Data has been saved")
            router.back()
            }
          }>
            {data?.id && <input type="hidden" name="id" value={data?.id} />}
            <div>
              <Label htmlFor="image">Image:</Label>
              {(!data?.image || !data) && <UploadSingleFile />}
              {data?.image && notEdit && <img src={data?.image} alt="Image" />}
              {data?.image && !notEdit && (
                <UploadSingleFile image={data?.image} />
              )}
            </div>
            <div>
              <Label htmlFor="name">Title:</Label>
              <Input
                name="title"
                type="text"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="description">decription:</Label>
              <Textarea
                name="description"
                id="description"
                defaultValue={formData.decription}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                name="email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="end_date">Expired:</Label>
              <Input
                name="end_date"
                type="date"
                id="end_date"
                value={formData.end_date}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div style={{ marginTop: "1rem" }} />
            {!notEdit && <Button type="submit">Submit</Button>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
