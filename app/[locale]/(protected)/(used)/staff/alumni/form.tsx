"use client";
import React, { useState } from "react";
import UploadSingleFile from "../../components/forms/upload-single-file";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "@/components/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PageProps = Partial<{
  data: any;
  notEdit: boolean;
  action: (...args: any) => Promise<any>;
}>;

const Form = ({ data, notEdit = false, action }: PageProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: data?.name || "",
    email: data?.email || "",
    phone: data?.phone || "",
    jobs: data?.jobs || "",
    angkatan: data?.angkatan || "",
    jurusan: data?.jurusan || "",
    approval: data?.approval || "0",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Card>
        <CardContent>
          <form
            action={(e: FormData) => {
              if (action) {
                action(e);
              }
              toast.success("Data has been saved");
              router.back();
            }}

            encType="multipart/form-data"
          >
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
              <Label htmlFor="name">Name:</Label>
              <Input
                name="name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                name="email"
                type="text"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone:</Label>
              <Input
                name="phone"
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="jobs">Jobs:</Label>
              <Input
                name="jobs"
                type="text"
                id="jobs"
                value={formData.jobs}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="angkatan">Angkatan:</Label>
              <Input
                name="angkatan"
                type="text"
                id="angkatan"
                value={formData.angkatan}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="jurusan">Jurusan:</Label>
              <Input
                name="jurusan"
                type="text"
                id="jurusan"
                value={formData.jurusan}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="approval">Approval:</Label>
              <Select name="approval" onValueChange={(e)=>{
                  setFormData((prevState) => ({
                    ...prevState,
                    ["approval"]: e,
                  }))
                }} value={`${data?.approval ? '1':'0'}`} disabled={notEdit}>
                    <SelectTrigger>
                      <SelectValue placeholder="Approval" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Approval</SelectLabel>
                        <SelectItem value={"1"}>Approved</SelectItem>
                        <SelectItem value={"0"}>Not Approved</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                </Select>
              
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
