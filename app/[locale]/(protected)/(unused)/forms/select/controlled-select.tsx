"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

const ControlledSelect = () => {
  const [value, setValue] = useState("");
  const handleValueChange = (value: string) => {
    setValue(value)
  }
  return (
    <div className="space-y-3.5">
      <Select onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-sm text-default-600">Selected: <strong>{value}</strong> </p>
    </div>
  );
};

export default ControlledSelect;