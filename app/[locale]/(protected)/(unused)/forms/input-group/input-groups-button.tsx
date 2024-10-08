"use client";

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
          <Button  size="md" className="hover:ring-0 hover:ring-offset-0 border hover:border-default dark:hover:border-default-500 border-r-0">
            <Icon icon="heroicons:magnifying-glass" />
          </Button>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <Button size="md" className="hover:ring-0 hover:ring-offset-0 border hover:border-default dark:hover:border-default-500 border-l-0">
            <Icon icon="heroicons:magnifying-glass" />
          </Button>
        </InputGroupButton>
      </InputGroup>

      <InputGroup>
        <InputGroupButton>
          <Button size="md" className="hover:ring-0 hover:ring-offset-0 border hover:border-default dark:hover:border-default-500 border-r-0">Search</Button>
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
