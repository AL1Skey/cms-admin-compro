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
  
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type PageProps = Partial<{
  data: any;
  notEdit: boolean;
}>;

const Form = ({ data, notEdit = false }: PageProps) => {
  const [formData, setFormData] = useState({
    image: data?.image || "",
    title: data?.title || "",
    author: data?.author || "",
    description: data?.description || "",
    category: data?.category || "",
    createdAt: data?.createdAt || "",
  });

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
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="image">Image:</Label>
              <UploadSingleFile />
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
              <Label htmlFor="role">Category</Label>
                <Select onValueChange={handleInputChange} value={field.value}>
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
                
                rules={{ required: true }}
              />
            </div>
            <div>
              <Label htmlFor="createAt">createAt:</Label>
              <Input
                name="createAt"
                type="date"
                id="createAt"
                value={formData.createdAt}
                onChange={handleInputChange}
              />
            </div>
            
            <div style={{ marginTop: "1rem" }} />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
