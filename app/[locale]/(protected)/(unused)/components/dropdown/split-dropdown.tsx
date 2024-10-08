
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SplitDropdown = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex">
        <Button className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent"> Default </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r border-primary-foreground/30  hover:ring-offset-0">
              <Icon icon="heroicons:chevron-down" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>Something Else Here</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button color="primary" className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent"> Primary </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button color="primary" className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r border-primary-foreground/30  hover:ring-offset-0">
              <Icon icon="heroicons:chevron-down" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>Something Else Here</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button
          color="secondary"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent" >
          Secondary
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button color="secondary" 
            className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r border-secondary-foreground/30  hover:ring-offset-0">
              <Icon icon="heroicons:chevron-down" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>Something Else Here</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button
          color="success"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent" >
          Success
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button color="success" className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r border-success-foreground/30  hover:ring-offset-0">
              <Icon icon="heroicons:chevron-down" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>Something Else Here</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button
          color="info"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent" >
          Info
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button color="info" className="ltr:rounded-l-none rtl:rounded-r-none  hover:ring-transparent md:px-3 ltr:border-l rtl:border-r border-info-foreground/30  hover:ring-offset-0">
              <Icon icon="heroicons:chevron-down" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>Something Else Here</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button
          color="warning"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent" >
          Warning
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button color="warning" className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r border-warning-foreground/30  hover:ring-offset-0">
              <Icon icon="heroicons:chevron-down" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>Something Else Here</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button
          color="destructive"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent" >
          Destructive
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button color="destructive" className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r border-destructive-foreground/30  hover:ring-offset-0">
              <Icon icon="heroicons:chevron-down" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>Something Else Here</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SplitDropdown;