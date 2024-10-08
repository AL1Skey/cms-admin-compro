"use client";
import Image from "next/image";
import { payments } from "../data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PaymentCard = () => {
  const [selected, setSelected] = useState("bkash");
  const handleSelect = (value: string) => {
    setSelected(value);
  };
  return (
    <div>
      <RadioGroup
        defaultValue={selected}
        onValueChange={handleSelect}
        className="flex flex-wrap gap-6 "
      >
        {payments.map((item) => (
          <Label
            className={cn(
              "flex items-center justify-center gap-2 border border-solid border-default-400 py-3 px-3 rounded-md cursor-pointer group hover:border-primary-600 flex-col hover:text-primary-600",
              selected === item.value &&
                "border-primary-600 data-[state=checked]:border-primary-600 text-primary-600 "
            )}
            key={item.value}
          >
            <RadioGroupItem
              hidden
              id={"radio-" + item.value}
              value={item.value}
            />
            <Image
              className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
              src={item.img}
              alt={item.value}
              width={100}
              height={100}
            />
            <span className="capitalize text-center">{item.value}</span>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PaymentCard;
