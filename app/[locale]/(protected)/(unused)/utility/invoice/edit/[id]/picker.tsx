"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Picker = () => {
  const [picker, setPicker] = useState<Date>(new Date());

  const handleChange = (date: Date) => {
    setPicker(date);
  };
  return (
    <div>
      <Input
        className="form-control py-2"
        value={picker.toISOString().substring(0, 10)}
        onChange={(event) => handleChange(new Date(event.target.value))}
        id="default-picker"
        type="date"
      />
    </div>
  );
};

export default Picker;
