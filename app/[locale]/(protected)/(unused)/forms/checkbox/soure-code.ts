export const basicCheckbox=`import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const BasicCheckbox = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex gap-2 items-center">
        <Checkbox id="cb1"/>
        <Label htmlFor="cb1">Checked</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox id="cb2" defaultChecked/>
        <Label htmlFor="cb2">Unchecked</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox id="cb3" disabled/>
        <Label htmlFor="cb3">Unchecked Disabled</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox id="cb3" defaultChecked disabled/>
        <Label htmlFor="cb3">Checked Disabled</Label>
      </div>
    </div>
  );
};

export default BasicCheckbox;`

export const colorCheckbox=`import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ColorCheckbox = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
    <div className="flex items-center gap-2">
      <Checkbox id="default" defaultChecked />
      <Label htmlFor="default" >Default</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="primary" color="primary" />
      <Label htmlFor="primary" >Primary</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="secondary"   color="secondary" />
      <Label htmlFor="secondary" >Secondary</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="info"   color="info" />
      <Label htmlFor="info" >Info </Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="success"   color="success" />
      <Label htmlFor="success" >Success </Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="warning"   color="warning" />
      <Label htmlFor="warning" >Warning </Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="destructive"   color="destructive" />
      <Label htmlFor="destructive"  >Destructive </Label>
    </div>

  </div>
  );
};

export default ColorCheckbox;`

export const optionsArrayCheckbox=`"use client";

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
      <div className="flex items-center gap-2.5 flex-wrap">
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

export default OptionArrayCheckbox;`