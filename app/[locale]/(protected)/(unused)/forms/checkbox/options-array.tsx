"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
interface Option {
  value: string;
  label: string;
}

const OptionArrayCheckbox = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const options: Option[] = [
    {
      value: "orange",
      label: "Orange",
    },
    {
      value: "apple",
      label: "Apple",
    },
    {
      value: "banana",
      label: "Banana",
    },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3.5 flex-wrap">
        {options.map((option, i) => (
          <div className="flex items-center gap-3" key={option.value}>
            <Checkbox
              checked={selected.includes(option.value)}
              onCheckedChange={() => {
                if (selected.includes(option.value)) {
                  setSelected(selected.filter((item) => item !== option.value));
                } else {
                  setSelected([...selected, option.value]);
                }
              }}
              id={option.value}
            >

            </Checkbox>
            <Label htmlFor={option.value}> {option.label}</Label>
          </div>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="text-muted-foreground ">
          Selected: [{selected.join(", ")}]
        </div>
      )}
    </div>
  );
};

export default OptionArrayCheckbox;