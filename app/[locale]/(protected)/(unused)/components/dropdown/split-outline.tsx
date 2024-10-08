
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SplitOutline = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex">
        <Button
          variant="outline"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent ltr:border-r-0 rtl:border-l-0"> Default </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r   hover:ring-offset-0"
            >
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
          variant="outline"
          color="primary"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent ltr:border-r-0 rtl:border-l-0"> Primary </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              color="primary"
              className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r   hover:ring-offset-0"
            >
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
          variant="outline"
          color="secondary"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent ltr:border-r-0 rtl:border-l-0"> Secondary </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              color="secondary"
              className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r   hover:ring-offset-0"
            >
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
          variant="outline"
          color="success"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent ltr:border-r-0 rtl:border-l-0"> Success </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              color="success"
              className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r   hover:ring-offset-0"
            >
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
          variant="outline"
          color="info"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent ltr:border-r-0 rtl:border-l-0"> Info </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              color="info"
              className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r   hover:ring-offset-0"
            >
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
          variant="outline"
          color="warning"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent ltr:border-r-0 rtl:border-l-0"> Warning </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              color="warning"
              className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r   hover:ring-offset-0"
            >
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
          variant="outline"
          color="destructive"
          className="ltr:rounded-r-none rtl:rounded-l-none hover:ring-transparent ltr:border-r-0 rtl:border-l-0"> Destructive </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              color="destructive"
              className="ltr:rounded-l-none rtl:rounded-r-none hover:ring-transparent md:px-3 ltr:border-l rtl:border-r   hover:ring-offset-0"
            >
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

export default SplitOutline;