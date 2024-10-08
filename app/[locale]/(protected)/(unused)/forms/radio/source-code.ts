export const basicRadio=`import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const BasicRadio = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <RadioGroup
        className="flex flex-wrap"
        default-value="default"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem defaultChecked id="default" value="default" />
          <Label className="text-default-600" htmlFor="default">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="Unselected" value="Unselected" />
          <Label className="text-default-600" htmlFor="Unselected">Unselected</Label>
        </div>
      </RadioGroup>
      <RadioGroup default-value="disabled">
        <div className="flex items-center gap-2">
          <RadioGroupItem disabled checked id="disabled" value="disabled" />
          <Label className="text-default-600" htmlFor="disabled">Disabled</Label>
        </div>
      </RadioGroup>
      <RadioGroup>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            disabled
            id="Unselected Disabled"
            value="Unselected Disabled"
          />
          <Label className="text-default-600" htmlFor="Unselected Disabled">Unselected Disabled</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default BasicRadio;`
export const colorRadio=`import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const ColorRadio = () => {
  return (
    <div className="flex flex-wrap gap-6">
    <RadioGroup className="flex flex-wrap" default-value="r1">
      <div className="flex items-center gap-2">
        <RadioGroupItem defaultChecked id="r1" value="r1" />
        <Label className="text-default-600" htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="primary" id="r2" value="r2" />
        <Label className="text-default-600" htmlFor="r2">Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="info" id="r3" value="r3" />
        <Label className="text-default-600" htmlFor="r3">Info</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="success" id="r4" value="r4" />
        <Label className="text-default-600" htmlFor="r4">Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="warning" id="r5" value="r5" />
        <Label className="text-default-600" htmlFor="r5">Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="destructive" id="r6" value="r6" />
        <Label className="text-default-600" htmlFor="r6">Destructive</Label>
      </div>
    </RadioGroup>
    </div>
  );
};

export default ColorRadio;`

export const radioGroupArray=`"use client"
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

export default RadioGroupOptionsArray;`

export const sizesRadio=`import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const SizesRadio = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <RadioGroup className="flex flex-wrap" default-value="s1">
        <div className="flex items-center gap-2">
          <RadioGroupItem color="success" id="s4" value="s4" />
          <Label className="text-default-600" htmlFor="s4">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem defaultChecked id="s1" value="s1" size="sm" />
          <Label className="text-default-600" htmlFor="s1">Small Size</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem color="primary" id="s2" value="s2" size="md" />
          <Label className="text-default-600" htmlFor="s2">Medium Size</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem color="info" id="s3" value="s3" size="lg" />
          <Label className="text-default-600" htmlFor="s3">Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SizesRadio;`