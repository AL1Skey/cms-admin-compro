"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const RadioGroupOptionsArray = () => {
  const [selected, setSelected] = useState("Orange");
  const handleSelect = (value: string) => {
    setSelected(value)
  }
  const items = [
    {
      value: "Orange",
      label: "Orange",
    },
    {
      value: "Apple",
      label: "Apple",
    },
    {
      value: "Banana",
      label: "Banana",
    },
  ];
  return (
    <div>
      <RadioGroup 
      defaultValue={selected}
      onValueChange={handleSelect}
      className="flex flex-wrap gap-6"
      >
        {
          items.map((item) => (
            <div className="flex items-center gap-2" key={item.value}>
              <RadioGroupItem id={"radio-" + item.value} value={item.value} />
              <Label className="text-default-600" htmlFor={"radio-" + item.value}>{item.label}</Label>
            </div>
          ))
        }
      </RadioGroup>
      <div className="mt-5 text-sm font-medium text-default-700">
        Selected Options: <strong className="text-default-900">{selected}</strong>
      </div>
    </div>
  );
};

export default RadioGroupOptionsArray;