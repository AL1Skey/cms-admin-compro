"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import Select, { MultiValue } from 'react-select'
interface CreateTaskProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Option {
  value: string;
  label: string;
  image?: string;
}
type Inputs = {
  title: string;
  description: string;
  tags: MultiValue<Option>;
  assignee: MultiValue<Option>;
  startDate: Date;
  endDate: Date;
}
const options: Option[] = [
  {
    value: "team",
    label: "team",
  },
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "high",
    label: "high",
  },
  {
    value: "update",
    label: "update",
  }
];
const assigneeOptions: Option[] = [
  { value: "mahedi", label: "Mahedi Amin", image: "/images/avatar/av-1.svg" },
  { value: "sovo", label: "Sovo Haldar", image: "/images/avatar/av-2.svg" },
  { value: "rakibul", label: "Rakibul Islam", image: "/images/avatar/av-3.svg" },
  { value: "pritom", label: "Pritom Miha", image: "/images/avatar/av-4.svg" },
];


const CreateTask = ({ open, setOpen }: CreateTaskProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndtDate] = useState<Date>(new Date());
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create  Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="projectName">Project Name</Label>
            <Input
              id="projectName"
              placeholder="Project Name"
              {...register("title", { required: "Title is required." })}
              color={errors.title ? "destructive" : "default"}
            />
            {errors.title && <p className="text-destructive  text-sm font-medium">{errors.title.message}</p>}
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="space-y-1">
              <Label htmlFor="startDate">Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-start font-normal border border-default-200 text-default-700 md:px-2.5 hover:bg-transparent hover:text-default-700"
                    size="md"
                  >
                    <CalendarIcon className="me-2 h-3.5 w-3.5 text-default-500" />
                    {format(startDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => (
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => {
                          field.onChange(date);
                          setStartDate(date as Date);
                        }}
                        initialFocus
                      />
                    )}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-1">
              <Label htmlFor="endDate">End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-start font-normal border border-default-200 text-default-700 md:px-2.5 hover:bg-transparent hover:text-default-700"
                    size="md"
                  >
                    <CalendarIcon className="me-2 h-3.5 w-3.5 text-default-500" />
                    {format(endDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => (
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={(date) => {
                          field.onChange(date);
                          setEndtDate(date as Date);
                        }}
                        initialFocus
                      />
                    )}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="assignee">Assignee</Label>
            <Controller
              name="assignee"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  {...field}
                  options={assigneeOptions}
                  isMulti
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  getOptionLabel={(option) => (
                    <div className="flex items-center">
                      <Image width={40} height={40} src={option.image as string} alt={option.label} className="w-8 h-8 rounded-full me-2" />
                      <span className="text-sm text-default-600 font-medium">{option.label}</span>
                    </div>
                  ) as unknown as string}
                  placeholder="Select assignee"
                />
              )}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="tag">Tags</Label>
            <Controller
              name="tags"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  {...field}
                  options={options}
                  isMulti
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  placeholder="Select tags"
                  getOptionLabel={(option) => <span className="text-sm text-default-600 font-medium capitalize">{option.label}</span> as unknown as string}
                />
              )}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Project Description"
              {...register("description")}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Add</Button>
          </div>
        </form>

      </DialogContent>
    </Dialog>
  );
};

export default CreateTask;
