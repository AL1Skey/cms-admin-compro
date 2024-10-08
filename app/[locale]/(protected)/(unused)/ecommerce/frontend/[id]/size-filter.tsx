"use client";
import { useState } from "react";

const sizes = [{ code: "S" }, { code: "M" }, { code: "L" }, { code: "XL" }];

const SizeFilter = () => {
  const [size, setSize] = useState("S");
  return (
    <div>
      {" "}
      <div>
        <div className="pb-2 flex items-center space-x-2 rtl:space-x-reverse mb-3">
          <p className="font-normal text-sm lg:text-base text-default-500 ">
            Size:
          </p>
          <p className="font-medium text-base text-default-900">
            {size}
          </p>
        </div>
        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4 h-6 ">
          {sizes.map((list, i) => {
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="color"
                  value={list.code}
                  onChange={() => setSize(list.code)}
                  className="hidden h-7 w-7"
                />
                <div
                  style={{ backgroundColor: list.code }}
                  className={`h-7 w-7 ${
                    list.code === size
                      ? "ring-default-900"
                      : ""
                  } ring-1 ring-default-400 ring-offset-2 flex justify-center items-center ring-offset-default-50 cursor-pointer rounded-sm`}
                >
                  {list.code}
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SizeFilter;
