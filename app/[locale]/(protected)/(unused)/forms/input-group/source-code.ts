export const basicInputGroup=`"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";

const BasicInputGroup = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
        <Input type="text" placeholder="Search.."  />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupText>
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupButton>
          <Button disabled variant="outline" size="md" color="secondary">
            <Icon icon="heroicons:at-symbol" />
          </Button>
        </InputGroupButton>
        <Input disabled type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
        <Input readOnly type="text" placeholder="Search.." />
      </InputGroup>
      <div>
        <Label className="mb-3" htmlFor="username5">
          Password
        </Label>
        <InputGroup>
          <Input
            type="password"
            placeholder="Password"
            id="username5"
            required
          />
        </InputGroup>
      </div>
      <InputGroup>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>https://example.com/users/</InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
      </InputGroup>
    </>
  );
};

export default BasicInputGroup;
`
export const checkboxRadioGroup=`"use client";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CheckboxRadioGroup = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>
          <Checkbox color="secondary" />
        </InputGroupText>

        <Input
          type="text"
          radius="sm"
          placeholder="Small Radius"
          className="h-8"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <RadioGroup defaultValue="right">
            <RadioGroupItem color="secondary" value="right" id="r_1" />
          </RadioGroup>
        </InputGroupText>

        <Input
          type="text"
          radius="sm"
          placeholder="Small Radius"
          className="h-8"
        />
      </InputGroup>
    </>
  );
};

export default CheckboxRadioGroup;
`

export const inputButtonWithDropdown=`"use client";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupButton } from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const InputButtonWithDropdown = () => {
  return (
    <>
      <InputGroup>
        <InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button color="secondary" size="md">
                Success
                <Icon
                  icon="heroicons:chevron-right"
                  className=" h-5 w-5 ml-2"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button color="secondary" size="md">
                Success
                <Icon
                  icon="heroicons:chevron-right"
                  className=" h-5 w-5 ml-2"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupButton>
      </InputGroup>
      <InputGroup>
        <InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button color="secondary" size="md">
                Success
                <Icon
                  icon="heroicons:chevron-right"
                  className=" h-5 w-5 ml-2"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button color="secondary" size="sm">
                Success
                <Icon
                  icon="heroicons:chevron-right"
                  className=" h-5 w-5 ml-2"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupButton>
      </InputGroup>
    </>
  );
};

export default InputButtonWithDropdown;
`

export const inputGroupRadius=`"use client";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";

import { Icon } from "@iconify/react";

const InputGroupRadius = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText className="h-8">
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input
          type="text"
          radius="sm"
          placeholder="Small Radius"
          className="h-8"
        />
      </InputGroup>

      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" radius="lg" placeholder="Default Radius" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input
          type="text"
          radius="xl"
          placeholder="Large Radius"
          className="h-14"
        />
      </InputGroup>
    </>
  );
};

export default InputGroupRadius;
`
export const inputGroupSize=`"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";

import { Icon } from "@iconify/react";

const InputGroupSize = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Small Size" className="h-8" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Default Size" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Large Size" className="h-14" />
      </InputGroup>
    </>
  );
};

export default InputGroupSize;
`
export const inputGroupUnmerged=`"use client";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@iconify/react";

const InputGroupUnmerged = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>

        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <InputGroupText color="info" className=" border-info-500">
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Search.." color="info" />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search" />
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>@</InputGroupText>
        <Input type="text" placeholder="Username" />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>https://example.com/users/</InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>$10</InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText>00.</InputGroupText>
      </InputGroup>
    </>
  );
};

export default InputGroupUnmerged;
`
export const inputGroupButtons=`"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";

const InputGroupsButton = () => {
  return (
    <>
      <InputGroup>
        <InputGroupButton>
          <Button color="primary" size="md">
            <Icon icon="heroicons:magnifying-glass" />
          </Button>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <Button size="md">
            <Icon icon="heroicons:magnifying-glass" />
          </Button>
        </InputGroupButton>
      </InputGroup>

      <InputGroup>
        <InputGroupButton>
          <Button size="md">Search</Button>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
      </InputGroup>
    </>
  );
};

export default InputGroupsButton;
`
export const mergedInputGroup=`"use client";

import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const MergedInputGroup = () => {
  return (
    <>
      <InputGroup merged>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup merged>
        <Input type="text" placeholder="Search" />
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
      </InputGroup>
      <InputGroup merged>
        <InputGroupButton>
          <Button disabled variant="outline" size="md" color="secondary">
            <Icon icon="heroicons:at-symbol" />
          </Button>
        </InputGroupButton>
        <Input disabled type="text"  placeholder="Search.." />
      </InputGroup>
      <InputGroup merged>
        <InputGroupText>
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
        <Input readOnly type="text" placeholder="Search.." />
      </InputGroup>
      <div>
        <Label className="mb-3" htmlFor="username2">
          Password
        </Label>
        <InputGroup>
          <Input
            type="password"
            placeholder="Password"
            id="username2"
            required
          />
        </InputGroup>
      </div>
      <InputGroup merged>
        <Input type="text" placeholder="Recient’s username" />
        <InputGroupText className=" text-sm font-normal">
          @example.com
        </InputGroupText>
      </InputGroup>
      <InputGroup merged>
        <InputGroupText className=" text-sm font-normal">
          https://example.com/users/
        </InputGroupText>
        <Input type="text" placeholder="Recient’s username" />
      </InputGroup>
    </>
  );
};

export default MergedInputGroup;
`

export const multipleAddons=`"use client";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";

const MultipleAddons = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <Input type="text" placeholder="100" />
        <InputGroupText>00</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <Input type="text" placeholder="100" />
        <InputGroupText>00</InputGroupText>
      </InputGroup>
    </>
  );
};

export default MultipleAddons;
`