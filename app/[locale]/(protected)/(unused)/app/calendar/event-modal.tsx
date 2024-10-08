"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import { cn, } from "@/lib/utils";
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CalendarIcon } from "lucide-react";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { CalendarCategory } from "./data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const schema = z.object({
  title: z.string().min(3, { message: "Required" }),
});

const EventModal = ({ open, onClose, categories, event, selectedDate }: {
  open: boolean;
  onClose: () => void;
  categories: any;
  event: any;
  selectedDate: any
}) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isPending, startTransition] = React.useTransition();
  const [calendarProps, setCalendarProps] = React.useState<any>(categories[0].value);
  // delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [eventIdToDelete, setEventIdToDelete] = useState<string | null>(null);

  const {
    register,
    control,
    reset,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = (data: any) => {
    startTransition(async () => {
      if (!event) {
        data.start = startDate;
        data.end = endDate;
        data.allDay = false;
        data.extendedProps = {
          calendar: calendarProps,
        };
      }
      if (event) {
      }
    });
  };
  useEffect(() => {
    if (selectedDate) {
      setStartDate(selectedDate.date);
      setEndDate(selectedDate.date);
    }
    if (event) {
      setStartDate(event?.event?.start);
      setEndDate(event?.event?.end);
      const eventCalendar = event?.event?.extendedProps?.calendar;
      if (eventCalendar) {
        setCalendarProps(eventCalendar);
      } else {
        setCalendarProps(categories[0].value);
      }
    }
    setValue("title", event?.event?.title || "");
  }, [event, selectedDate, open, categories, setValue]);

  const onDeleteEventAction = async () => {
    try {

    } catch (error) {

    }
  };

  const handleOpenDeleteModal = (eventId: string) => {
    setEventIdToDelete(eventId);
    setDeleteModalOpen(true);
    onClose();
  };

  return (
    <>
      <DeleteConfirmationDialog
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={onDeleteEventAction}
        defaultToast={false}
      />
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent
          onPointerDownOutside={onClose}
        >
          <DialogHeader>
            <DialogTitle>
              {event ? "Edit Event" : "Create Event"} {event?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 h-full">
            <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 pb-5 ">
                <div className="space-y-1.5">
                  <Label htmlFor="title">Event Name</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter Event Name"
                    {...register("title")}
                  />
                  {errors?.title?.message && (
                    <div className="text-destructive text-sm">
                      {typeof errors?.title?.message === 'string'
                        ? errors?.title?.message
                        : JSON.stringify(errors?.title?.message)}
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="startDate">Start Date </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        size="md"
                        className={cn(
                          "w-full justify-between text-left font-normal border-default-200 text-default-600 md:px-4",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        {startDate ? (
                          format(startDate, "PP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="h-4 w-4" />
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
                            onSelect={(date) => setStartDate(date as Date)}
                            initialFocus
                          />
                        )}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="endDate">End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        size="md"
                        className={cn(
                          "w-full justify-between text-left font-normal border-default-200 text-default-600 md:px-4",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        {endDate ? (
                          format(endDate, "PP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Controller
                        name="endDate"
                        control={control}
                        render={({ field }) => (
                          <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={(date) => setEndDate(date as Date)}
                            initialFocus
                          />
                        )}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="calendarProps">Label </Label>
                  <Controller
                    name="calendarProps"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={calendarProps}
                        onValueChange={(data) => setCalendarProps(data)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Label" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category: CalendarCategory) => (
                            <SelectItem
                              value={category.value}
                              key={category.value}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-wrap  gap-2 mt-10">
                <Button type="submit" disabled={isPending} className="flex-1">
                  {isPending ? (
                    <>
                      <Loader2 className="me-2 h-4 w-4 animate-spin" />
                      {event ? "Updating..." : "Adding..."}
                    </>
                  ) : event ? (
                    "Update Event"
                  ) : (
                    "Add Event"
                  )}
                </Button>
                {event && (
                  <Button
                    type="button"
                    color="destructive"
                    onClick={() => handleOpenDeleteModal(event?.event?.id)}
                    className="flex-1"
                  >
                    Delete
                  </Button>
                )}
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventModal;
