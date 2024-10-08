
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DropdownDirections = () => {
  return (
    <div className="flex flex-wrap gap-3 min-h-36">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Left Align
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ms-2 rtl:rotate-180 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another Action</DropdownMenuItem>
          <DropdownMenuItem>Something Else Here</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Right Align
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ms-2 rtl:rotate-180 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another Action</DropdownMenuItem>
          <DropdownMenuItem>Something Else Here</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Center</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="center">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Right Side
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ms-2 rtl:rotate-180 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another Action</DropdownMenuItem>
          <DropdownMenuItem>Something Else Here</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Left Side
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ms-2 rtl:rotate-180 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another Action</DropdownMenuItem>
          <DropdownMenuItem>Something Else Here</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Top Side
            <Icon icon="heroicons:chevron-up" className=" h-5 w-5 ms-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" side="top">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Bottom Side
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ms-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" side="bottom">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownDirections;