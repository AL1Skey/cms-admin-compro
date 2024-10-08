
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const OutlineDropdown = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Default
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
          <Button variant="outline" color="primary">
            Primary
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
          <Button color="secondary" variant="outline">
            Secondary
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
          <Button color="success" variant="outline">
            Success
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
          <Button color="info" variant="outline">
            Info
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
          <Button color="warning" variant="outline">
            Warning
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ms-2 rtl:rotate-180 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another Action</DropdownMenuItem>
          <DropdownMenuItem>Something Else Here</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="destructive" variant="outline">
            Destructive
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ms-2 rtl:rotate-180 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another Action</DropdownMenuItem>
          <DropdownMenuItem>Something Else Here</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default OutlineDropdown;