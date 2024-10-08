export const basicDropdown=`
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const BasicDropdown = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
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
          <Button color="primary">
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
          <Button color="secondary">
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
          <Button color="success">
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
          <Button color="info">
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
          <Button color="warning">
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
          <Button color="destructive">
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

export default BasicDropdown;`

export const outlineDropdown=`
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

export default OutlineDropdown;`

export const flatDropdown=`
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const FlatDropdown = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            Default
            <Icon icon="heroicons:chevron-right" className="h-5 w-5 ms-2 rtl:rotate-180" />
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
          <Button variant="ghost" color="primary">
            Primary
            <Icon icon="heroicons:chevron-right" className="h-5 w-5 ms-2 rtl:rotate-180" />
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
          <Button color="secondary" variant="ghost" >
            Secondary
            <Icon icon="heroicons:chevron-right" className="h-5 w-5 ms-2 rtl:rotate-180" />
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
          <Button color="success" variant="ghost" >
            Success
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ms-2 rtl:rotate-180" />
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
          <Button color="info" variant="ghost">
            Info
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ms-2 rtl:rotate-180" />
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
          <Button color="warning" variant="ghost">
            Warning
            <Icon icon="heroicons:chevron-right" className="h-5 w-5 ms-2 rtl:rotate-180" />
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
          <Button color="destructive" variant="ghost">
            Destructive
            <Icon icon="heroicons:chevron-right" className="h-5 w-5 ms-2 rtl:rotate-180" />
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

export default FlatDropdown;`

export const dropdownSizes=`import { Icon } from "@/components/ui/icon";
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

export default DropdownSizes;`

export const dropdownDirections=`
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

export default DropdownDirections;`

export const splitDropdown=`
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

export default SplitDropdown;`

export const splitOutlineDropdown=`
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

export default SplitOutline;`