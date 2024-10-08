"use client";

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

          placeholder="Small Radius"
          className="h-8"
        />
      </InputGroup>

      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Default Radius" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input
          type="text"
          placeholder="Large Radius"
          className="h-14"
        />
      </InputGroup>
    </>
  );
};

export default InputGroupRadius;
