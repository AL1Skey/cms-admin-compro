import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DropdownSizes = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="lg">
            Large Button
            <Icon icon="heroicons:chevron-right" className="h-5 w-5 ms-2 rtl:rotate-180 " />
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
          <Button color="info">
            Default
            <Icon icon="heroicons:chevron-right" className="h-5 w-5 ms-2 rtl:rotate-180 " />
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
          <Button color="success" size="sm">
            Small
            <Icon icon="heroicons:chevron-right" className="h-5 w-5 ms-2 rtl:rotate-180 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another Action</DropdownMenuItem>
          <DropdownMenuItem>Something Else Here</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownSizes;