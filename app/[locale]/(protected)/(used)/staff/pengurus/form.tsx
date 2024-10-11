"use client";
import React, { useState } from "react";
import UploadSingleFile from "../../components/forms/upload-single-file";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "@/components/navigation";
type PageProps = Partial<{
  data: any;
  notEdit: boolean;
  action(...args: any): Promise<any>;
}>;

const Form = ({ data, notEdit = false,action }: PageProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    image: data?.image || "",
    name: data?.name || "",
    position: data?.position || "",
    decription: data?.decription || "",
    phone: data?.phone || "",
    email: data?.email || "",
    facebook: data?.facebook || "",
    instagram: data?.instagram || "",
    twitter: data?.twitter || "",
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
          <form action={
            (e:FormData)=>{
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
              {!data.image && <UploadSingleFile />}
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
              <Label htmlFor="position">Position:</Label>
              <Input
                name="position"
                type="text"
                id="position"
                value={formData.position}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="description">decription:</Label>
              <Input
                name="description"
                type="text"
                id="description"
                value={formData.decription}
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
              <Label htmlFor="facebook">Facebook:</Label>
              <Input
                name="facebook"
                type="text"
                id="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="instagram">Instagram:</Label>
              <Input
                name="instagram"
                type="checkbox"
                id="instagram"
                checked={formData.instagram}
                onChange={handleInputChange}
                readOnly={notEdit}
              />
            </div>
            <div>
              <Label htmlFor="twitter">Twitter:</Label>
              <Input
                name="twitter"
                type="checkbox"
                id="twitter"
                checked={formData.twitter}
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
