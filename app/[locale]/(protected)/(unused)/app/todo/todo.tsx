"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import EditTodo from "./edit-todo";
import { Todo as TodoProps } from "./data";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";

const Todo = ({ todo }: { todo: TodoProps }) => {
  const { image, title, isfav, category } = todo;

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const categoryClasses: Record<string, string> = {
    team: "bg-destructive/10 text-destructive",
    high: "bg-primary/10 text-primary",
    medium: "bg-warning/10 text-warning",
    low: "bg-success/10 text-success",
    update: "bg-info/10 text-info"
  }
  return (
    <>
      <DeleteConfirmationDialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
      />
      <EditTodo
        open={openEdit}
        setOpen={setOpenEdit}
      />
      <div className="flex items-center gap-4 border-b border-defualt-200 dark:border-default-300 last:border-none px-6 py-4 transition-all duration-300 hover:-translate-y-1">
        <div>
          <Checkbox className="mt-0.5 dark:bg-default-300"/>
        </div>
        <div className="ms-1">
          {isfav ? (
            <Icon
              icon="heroicons:star-20-solid"
              className="text-xl  cursor-pointer text-[#FFCE30]"
            />
          ) : (
            <Icon
              icon="heroicons:star"
              className="text-xl cursor-pointer text-default-400"
            />
          )}
        </div>
        <p className="flex-1 overflow-hidden text-sm text-default-600 truncate">{title}</p>

        <div className="-space-x-1.5 rtl:space-x-reverse flex flex-nowrap">
          {
            image.map((item, index) =>
              <TooltipProvider key={`avatar-${index}`} >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="h-7 w-7 border-none shadow-none">
                      <AvatarImage src={item.image} />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          }
        </div>
        <div className="flex gap-1 items-center">
          {category.map((item, index) => (
            <Badge
              key={`category-${index}`}
              className={cn("rounded-full px-3 py-1 font-medium", categoryClasses[item.value])}>
              {item.label}
            </Badge>
          ))}
        </div>
        <Button
          className="bg-transparent text-default-400 ring-offset-transparent hover:bg-transparent hover:ring-0 hover:ring-transparent w-fit"
          size="icon"
          onClick={() => setOpenEdit(true)}
        >
          <SquarePen className=" w-4 h-4" />
        </Button>
        <Button
          className="bg-transparent text-default-400 ring-offset-transparent  hover:text-destructive border-none focus-visible:ring-transparent hover:bg-transparent hover:ring-0 hover:ring-transparent px-0 w-fit"
          size="icon"
          onClick={() => setConfirmDelete(true)}
        >
          <Trash2 className=" w-4 h-4" />
        </Button>
      </div>
    </>
  );
};

export default Todo;