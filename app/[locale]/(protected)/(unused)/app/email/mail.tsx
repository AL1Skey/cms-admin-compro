"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {ReactNode,useState} from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { Link } from "@/components/navigation"
const MailItem = ({ mail }: { mail: any }) => {
  const { image, title, isfav, time, name, id } = mail;
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
      />
      <Link href={`/app/email/${id}`} className=" group block border-b border-default-200 dark:border-default-300 last:border-none" >
        <div className="flex items-center gap-4  group-hover:bg-default-50  last:border-none px-6 py-4 translate-y-0">
          <div>
            <Checkbox className="mt-0.5 dark:bg-default-300" />
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
          <div className="-space-x-1.5 rtl:space-x-reverse">
            {image.map(
              (
                item: {
                  label: ReactNode;
                  image: string;
                },
                index: any
              ) => (
                <TooltipProvider key={`avatar-${index}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar className="h-7 w-7 border-none shadow-none bg-transparent">
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
            )}
          </div>
          <div className="flex-1 overflow-hidden text-sm text-default-600 truncate">
            <span className="me-3">{name}</span>
            <span className="text-sm text-default-600 truncate max-w-56">{title}</span>
          </div>

          <div className="flex items-center">
            <p className="text-default-900 text-sm">{time}</p>
            <div className="group-hover:bg-default-100 hidden group-hover:flex absolute group-hover:transition-all duration-300 right-0 top-0 h-full items-center ">
              <Button
                className="bg-transparent  ring-transparent hover:bg-transparent hover:ring-0 hover:ring-offset-0 hover:ring-transparent w-28 border-transparent"
                size="icon"
                onClick={(event) => { 
                  setOpen(true);
                  event.preventDefault();
                }}
              >
                <Trash2 className="text-default-900 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MailItem;
