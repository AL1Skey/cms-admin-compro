import { Input } from "@/components/ui/input";
import { MoreVertical, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Checkbox } from "@/components/ui/checkbox";
import ToggleMailSidebar from "./toggle-mail-sidebar";

const MailHeader = () => {
  const actions = [
    {
      name: "Reset Sort",
      icon: "heroicons-outline:sort-ascending",
    },
    {
      name: "Sort A-Z ",
      icon: "heroicons-outline:sort-ascending",
    },
    {
      name: "Sort Z-A ",
      icon: "heroicons-outline:sort-descending",
    },
  ];
  return (
    <div className="flex gap-2">
      <div className="flex-1 flex items-center gap-1">
        <ToggleMailSidebar />
        <Checkbox className="w-4 h-4 text-default-400 dark:bg-default-300" />
        <Input
          placeholder="Search Mail"
          className="max-w-[180px] border-none font-medium dark:bg-transparent"
        />
      </div>
      <div className="flex-none">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" className="w-8 h-8 rounded-full bg-default-100">
              <MoreVertical className="w-5 h-5 text-default hover:text-default-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="p-0 rounded-md overflow-hidden"
          >
            {actions.map((action, index) => (
              <DropdownMenuItem
                key={`action-${index}`}
                className="flex items-center gap-1.5 p-2 border-b text-default-600 group focus:bg-default focus:text-primary-foreground rounded-none group"
              >
                <Icon
                  icon={action.icon}
                  className="group-hover:text-primary-foreground w-4 h-4"
                />
                <span className="text-default-700 group-hover:text-primary-foreground">
                  {action.name}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MailHeader;
