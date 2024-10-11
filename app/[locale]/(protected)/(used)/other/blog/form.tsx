"use client";
import React, { useState } from "react";
import UploadSingleFile from "../../components/forms/upload-single-file";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { useRouter } from "@/components/navigation";
import {toast} from 'sonner';

type PageProps = Partial<{
  data: any;
  notEdit: boolean;
  action(...args:any): Promise<any>;
}>;

const Form = ({ data, notEdit = false,action }: PageProps) => {
  const [formData, setFormData] = useState({
    image: data?.image || "",
    title: data?.title || "",
    author: data?.author || "",
    description: data?.description || "",
    category: data?.category || "",
    createAt: data?.createAt || "",
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
          <form action={(e:FormData)=>{
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
              <Label htmlFor="title">Title:</Label>
              <Input
                name="title"
                type="text"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="author">Author:</Label>
              <Input
                name="author"
                type="text"
                id="author"
                value={formData.author}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="description">Description:</Label>
              <Textarea
                name="description"
                id="description"
                defaultValue={formData.description}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
                <Select name="category" onValueChange={(e)=>{
                  setFormData((prevState) => ({
                    ...prevState,
                    ["category"]: e,
                  }))
                }} value={data?.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="Buletin">Buletin</SelectItem>
                        <SelectItem value="Blog">Blog</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div>
              <Label htmlFor="createAt">Published On:</Label>
              <Input
                name="createAt"
                type="date"
                id="createAt"
                value={formData.createAt}
                onChange={handleInputChange}
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
