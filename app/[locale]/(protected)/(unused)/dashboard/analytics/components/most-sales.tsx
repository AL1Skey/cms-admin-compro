"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import world from "./world-map.json";
import { VectorMap } from "@south-paw/react-vector-maps";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const sales = [
  {
    title: "Nevada",
    amount: "$125k",
    cls: "bg-primary/70 ring-primary/30",
  },
  {
    title: "Colorado",
    amount: "$325k",
    cls: "bg-success/70 ring-success/30",
  },
  {
    title: "Iowa",
    amount: "$67",
    cls: "bg-info/70 ring-info/30",
  },
  {
    title: "Arkansas",
    amount: "$354k",
    cls: "bg-warning/70 ring-warning/30",
  },
  {
    title: "Wyoming",
    amount: "$195k",
    cls: "bg-success/70 ring-success/30",
  },
  {
    title: "Other countries",
    amount: "$295k",
    cls: "bg-secondary/70 ring-secondary/30",
  },
];


const MostSales = () => {
  const [filterMap, setFilterMap] = useState("usa");
  const t = useTranslations("AnalyticsDashboard");
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex-1"> {t("most_sales_map_title")}</CardTitle>
        <div className="border border-default-200 dark:border-default-300  rounded p-1 flex items-center bg-background">
          <span
            className={cn(
              "flex-1 text-sm font-normal px-3 py-1 transition-all duration-150 rounded cursor-pointer",
              {
                "bg-default-900 text-primary-foreground dark:bg-default-300 dark:text-foreground ":
                  filterMap === "global",
              }
            )}
            onClick={() => setFilterMap("global")}
          >
            {t("total_earning_map_button_1")}
          </span>
          <span
            className={cn(
              "flex-1 text-sm font-normal px-3 py-1 transition-all duration-150 rounded cursor-pointer",
              { "bg-default-900 text-primary-foreground dark:bg-default-300 dark:text-foreground ": filterMap === "usa" }
            )}
            onClick={() => setFilterMap("usa")}
          >
            USA
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="md:flex items-center">
          <div className="flex-none">
            <h4 className="text-default-600  text-sm font-normal mb-1.5">
              {t("total_earning_map_desc")}
            </h4>
            {filterMap === "usa" && (
              <div className="text-lg font-medium mb-1.5  text-default-900">
                $12,65,64787.00
              </div>
            )}
            {filterMap === "global" && (
              <div className="text-lg font-medium mb-1.5  text-default-900">
                $12,65.00
              </div>
            )}
            <div className="text-xs font-light">
              <span className="text-primary">+08%</span>{" "}
              {t("total_earning_map_desc_2")}
            </div>
            <ul className="bg-default-50 rounded p-4 min-w-[184px] space-y-5 mt-4">
              {sales.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between text-xs text-default-600"
                >
                  <span className="flex gap-2 items-center">
                    <span
                      className={` inline-flex h-1.5 w-1.5 bg-primary-500 ring-opacity-25 rounded-full ring-4
                        ${item.cls}
                        `}
                    ></span>
                    <span>{item.title}</span>
                  </span>
                  <span>{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 ">
            <VectorMap {...world} className="dashcode-app-vmap" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MostSales;
