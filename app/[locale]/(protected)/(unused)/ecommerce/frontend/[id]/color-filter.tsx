"use client";
import React, { useState } from "react";
  const colors = [
    { code: "Black" },
    { code: "Pink" },
    { code: "Orange" },
    { code: "Red" },
    { code: "Yellow" },
  ];
const ColorFilter = () => {
  const [color, setColor] = useState("Black");
  return (
    <div>
      {" "}
      <div className="mb-4">
        <div className="pb-2 flex items-center space-x-2 rtl:space-x-reverse mb-3">
          <p className="font-normal text-sm lg:text-base text-default-500 ">
            Color:
          </p>
          <p className="font-medium text-sm lg:text-base text-default-900 ">
            {color}
          </p>
        </div>
        <div className="flex space-x-4 rtl:space-x-reverse h-6 ">
          {colors.map((innerColor, i) => {
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="color"
                  value={innerColor.code}
                  onChange={() => setColor(innerColor.code)}
                  className="hidden"
                />
                <div
                  style={{ backgroundColor: innerColor.code }}
                  className={`h-7 w-7 ${
                    innerColor.code === color
                      ? "ring-default-900 "
                      : "ring-default-300"
                  } ring-1 ring-default-400 ring-offset-2 ring-offset-default-50 cursor-pointer rounded-sm`}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
