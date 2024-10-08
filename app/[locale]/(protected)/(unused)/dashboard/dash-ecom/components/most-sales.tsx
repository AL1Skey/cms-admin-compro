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
  const t = useTranslations("EcommerceDashboard");
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex-1">{t("most_sales_map_title")}</CardTitle>
        <div className="border border-default-200 dark:border-default-300  rounded p-1 flex items-center bg-background">
          <span
            className={cn(
              "flex-1 text-sm font-normal px-3 py-1 transition-all duration-150 rounded cursor-pointer",
              {
                "bg-default-900 text-primary-foreground":
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
              { "bg-default-900 text-primary-foreground": filterMap === "usa" }
            )}
            onClick={() => setFilterMap("usa")}
          >
            USA
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <VectorMap {...world} className="h-[280px] w-full dash-codevmap" />
        <ul className="bg-default-50 rounded p-4 min-w-[184px] mt-8 flex justify-between flex-wrap items-center text-center">
          {sales.map((item, i) => (
            <li key={i} className="text-sm text-default-600">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-1.5 w-1.5 bg-primary/60 ring-opacity-25 rounded-full ring-4",
                    item.cls
                  )}
                ></span>
                <span>{item.title}</span>
              </div>
              <div className="block mt-1">{item.amount}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MostSales;
