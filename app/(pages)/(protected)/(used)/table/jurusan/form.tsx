"use client";
import React, { useState } from "react";
import UploadSingleFile from "../../components/forms/upload-single-file";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

type PageProps = Partial<{
  data: any;
  notEdit: boolean;
  action: (...args: any) => Promise<any>;
}>;

const Form = ({ data, notEdit = false, action }: PageProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: data?.name || "",
  });
  const [isPending, setIsPending] = useState<boolean>(false); 

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
              async function runAct(e: FormData) {
                try {
                  setIsPending(true);
                  if (action) {
                   await action(e);
                  }
                  toast.success("Data has been saved");
                  router.push("/table/jurusan");
                  
                  setIsPending(false);
                } catch (error) {
                  
                  toast.error("Failed to save data");
                  setIsPending(false);
                }
            }
            runAct(e);
            }}

            encType="multipart/form-data"
          >
            {data?.id && <input type="hidden" name="id" value={data?.id} />}
         
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
            <div style={{ marginTop: "1rem" }} />
            {!notEdit && <Button type="submit">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isPending ? "Loading..." : "Sign In"}
              </Button>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
