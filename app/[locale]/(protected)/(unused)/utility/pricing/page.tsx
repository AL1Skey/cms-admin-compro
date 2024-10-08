"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { tables2, tables } from "./data";
import { Icon } from "@/components/ui/icon";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const PricingPage = () => {
  const [check, setCheck] = useState(true);
  const toggle = () => {
    setCheck(!check);
  };

  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-5">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between mb-6">
              <h4 className="text-default-900 text-xl font-medium">Packages</h4>
              <label className="inline-flex text-sm cursor-pointer">
                <input type="checkbox" onChange={toggle} hidden />
                <span
                  className={` ${
                    check
                      ? "bg-default-900  text-white"
                      : "dark:text-default-700"
                  } 
                px-[18px] py-1 transition duration-100 rounded`}
                >
                  Yearly
                </span>
                <span
                  className={`
              ${
                !check ? "bg-default-900  text-white" : " dark:text-default-700"
              }
                px-[18px] py-1 transition duration-100 rounded
                `}
                >
                  Monthly
                </span>
              </label>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {tables.map((item, i) => (
                <Card
                  className={` ${item.bg}
          price-table bg-opacity-[0.16]  rounded-[6px] p-6 text-default-900  relative overflow-hidden z-[1]
          `}
                  key={i}
                >
                  <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
                    <Image
                      width={500}
                      height={500}
                      src={item.img}
                      alt=""
                      className="ml-auto block"
                    />
                  </div>
                  {item.ribon && (
                    <div className="text-sm font-medium bg-default-900  text-default-foreground py-2 text-center absolute -right-[43px]  top-6 px-10 transform rotate-[45deg] ">
                      {item.ribon}
                    </div>
                  )}
                  <CardContent className="p-0">
                    <header className="mb-6">
                      <h4 className="text-xl mb-5">{item.title}</h4>
                      <div className="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse">
                        {check ? (
                          <span className="text-[32px] leading-10 font-medium">
                            {item.price_Yearly}{" "}
                          </span>
                        ) : (
                          <span className="text-[32px] leading-10 font-medium">
                            {item.price_Monthly}
                          </span>
                        )}

                        <span className="text-xs text-warning font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">
                          Save 20%
                        </span>
                      </div>
                      <p className="text-default-500  text-sm">
                        per user/month, annually
                      </p>
                    </header>
                    <div className="price-body space-y-8">
                      <p className="text-sm leading-5 text-default-600 ">
                        Designed for teams who need to manage complex workflows
                        with more automation and integration.
                      </p>
                      <div>
                        <Button fullWidth variant="outline">
                          {item.button}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {tables2.map((item, i) => (
            <Card
              className={`${item.bg} 
            
            price-table rounded-[6px] shadow-base dark:bg-default-50 p-6 text-default-900 dark:text-white relative overflow-hidden z-[1]
            `}
              key={i}
            >
              {item.ribon && (
                <div className="text-sm font-medium bg-white dark:bg-default-700 text-default-900 dark:text-default-300 py-2 text-center absolute -right-[43px] top-6 px-10 transform  rotate-45">
                  {item.ribon}
                </div>
              )}
              <CardContent className="p-0">
                <header className="mb-6">
                  <h4
                    className={` 
             ${
               item.bg === "bg-default-900"
                 ? "text-default-100 dark:text-white"
                 : "text-default-900 dark:text-white"
             }
             text-xl mb-5 `}
                  >
                    {item.title}
                  </h4>
                  <div
                    className={`
             ${
               item.bg === "bg-default-900"
                 ? "text-default-100 dark:text-white"
                 : "text-default-900 dark:text-white"
             }
                space-x-4 relative flex items-center mb-5 rtl:space-x-reverse`}
                  >
                    {check ? (
                      <span className="text-[32px] leading-10 font-medium">
                        {item.price_Yearly}{" "}
                      </span>
                    ) : (
                      <span className="text-[32px] leading-10 font-medium">
                        {item.price_Monthly}
                      </span>
                    )}

                    <span className="text-xs bg-warning/20 text-warning font-medium px-2 py-1 rounded-full inline-block dark:bg-default-900 uppercase h-auto">
                      Save 20%
                    </span>
                  </div>
                  <p
                    className={` text-sm
             ${
               item.bg === "bg-default-900"
                 ? "text-default-100 dark:text-white"
                 : "text-default-500 dark:text-white"
             }
                `}
                  >
                    per user/month, annually
                  </p>
                </header>
                <div className="price-body space-y-8">
                  <p
                    className={`
              ${
                item.bg === "bg-default-900"
                  ? "text-default-100 dark:text-white"
                  : "text-default-600 dark:text-white"
              }
                text-sm leading-5
                `}
                  >
                    Designed for teams who need to manage complex workflows with
                    more automation and integration.
                  </p>
                  <div>
                    {item.bg === "bg-default-900" ? (
                      <Button
                        fullWidth
                        className="border-default-200 border-solid border dark:bg-default-50 dark:hover:bg-default-100 dark:border-default-700 dark:text-default-700 dark:outline-0 dark:ring-0 dark:hover:ring-0 dark:hover:ring-offset-0"
                      >
                        {item.button}
                      </Button>
                    ) : (
                      <Button
                        fullWidth
                        variant="outline"
                        className="dark:border-default-700 dark:text-default-700 dark:hover:bg-default-100  "
                      >
                        {item.button}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
