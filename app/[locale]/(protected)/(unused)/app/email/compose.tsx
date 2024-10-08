'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Select, { MultiValue } from 'react-select'
import { Plus } from "lucide-react";
import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";


interface Option {
  value: string;
  label: string;
  image?: string;
}

type Inputs = {
  subject: string;
  description: string;
  mailTo: MultiValue<Option>;
}

const mailToOptions: Option[] = [
  { value: "mahedi", label: "Mahedi Amin", image: "/images/avatar/av-1.svg" },
  { value: "sovo", label: "Sovo Haldar", image: "/images/avatar/av-2.svg" },
  { value: "rakibul", label: "Rakibul Islam", image: "/images/avatar/av-3.svg" },
  { value: "pritom", label: "Pritom Miha", image: "/images/avatar/av-4.svg" },
];


const Compose = () => {
  const t = useTranslations("EmailApp");
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('Hello World');

  const {
    register,
    handleSubmit,
    control
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setOpen(false)
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        fullWidth
        size="lg"
        onClick={() => setOpen(true)}
        className="dark:bg-background dark:ring-background dark:text-foreground"
      >
        <Plus className="w-6 h-6 me-1.5" />
        {t("compose")}
      </Button>

      <DialogContent>
        <DialogHeader className="mb-6">
          <DialogTitle> {t("composeEmail")}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
          <div className="space-y-1">
            <Label htmlFor="assignee">To</Label>
            <Controller
              name="mailTo"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select
                  className="react-select"
                   classNamePrefix="select"
                  {...field}
                  options={mailToOptions}
                  isMulti
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  getOptionLabel={(option) => (
                    <div className="flex items-center">
                      <Image width={40} height={40} src={option.image as string} alt={option.label} className="w-8 h-8 rounded-full me-2" />
                      <span className="text-sm  font-medium">{option.label}</span>
                    </div>
                  ) as unknown as string}
                  placeholder="Select..."
                />
              )}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Type Subject..."
              {...register("subject")}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
           <Textarea placeholder="Hello world" id="description" {...register("description")}/>
          </div>


          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Compose;
