import { CopyButton } from "@/components/copy-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const slates = [
  {
    name: "default-50",
    bg: "bg-default-50",
    color: "#f8fafc",
  },
  {
    name: "default-100",
    bg: "bg-default-100",
    color: "#f1f5f9",
  },

  {
    name: "default-200",
    bg: "bg-default-200",
    color: "#e2e8f0",
  },
  {
    name: "default-300",
    bg: "bg-default-300",
    color: "#cbd5e1",
  },

  {
    name: "default-400",
    bg: "bg-default-400",
    color: "#94a3b8",
  },
  {
    name: "default-500",
    bg: "bg-default-500",
    color: "#64748b",
  },
  {
    name: "default-600",
    bg: "bg-default-600",
    color: "#475569",
  },
  {
    name: "default-700",
    bg: "bg-default-700",
    color: "#1e293b",
  },
  {
    name: "default-800",
    bg: "bg-default-800",
    color: "#1e293b",
  },
  {
    name: "default-900",
    bg: "bg-default-900",
    color: "#0f172a",
  },
];
const primary = [
  {
    name: "primary-50",
    bg: "bg-primary-50",
    color: "#F6F8FF",
  },
  {
    name: "primary-100",
    bg: "bg-primary-100",
    color: "#EDF0FF",
  },

  {
    name: "primary-200",
    bg: "bg-primary-200",
    color: "#D1DAFE",
  },
  {
    name: "primary-300",
    bg: "bg-primary-300",
    color: "#B4C2FD",
  },

  {
    name: "primary-400",
    bg: "bg-primary-400",
    color: "#8092FF",
  },
  {
    name: "primary-500",
    bg: "bg-primary-500",
    color: "#7E96FC",
  },
  {
    name: "primary-600",
    bg: "bg-primary-600",
    color: "#3F5EDF",
  },
  {
    name: "primary-700",
    bg: "bg-primary-700",
    color: "#2A3F96",
  },
  {
    name: "primary-800",
    bg: "bg-primary-800",
    color: "#203071",
  },
  {
    name: "primary-900",
    bg: "bg-primary-900",
    color: "#151F49",
  },
];
const danger = [
  {
    name: "destructive",
    bg: "bg-destructive",
    color: "#FFF7F7",
  },
  // {
  //   name: "destructive-50",
  //   bg: "bg-destructive-50",
  //   color: "#FFF7F7",
  // },
  // {
  //   name: "destructive-100",
  //   bg: "bg-destructive-100",
  //   color: "#FEEFEF",
  // },

  // {
  //   name: "destructive-200",
  //   bg: "bg-destructive-200",
  //   color: "#FCD6D7",
  // },
  // {
  //   name: "destructive-300",
  //   bg: "bg-destructive-300",
  //   color: "#FABBBD",
  // },

  // {
  //   name: "destructive-400",
  //   bg: "bg-destructive-400",
  //   color: "#F68B8D",
  // },
  // {
  //   name: "destructive-500",
  //   bg: "bg-destructive-500",
  //   color: "#F1595C",
  // },
  // {
  //   name: "destructive-600",
  //   bg: "bg-destructive-600",
  //   color: "#D75052",
  // },
  // {
  //   name: "destructive-700",
  //   bg: "bg-destructive-700",
  //   color: "#913638",
  // },
  // {
  //   name: "destructive-800",
  //   bg: "bg-destructive-800",
  //   color: "#6D292A",
  // },
  // {
  //   name: "destructive-900",
  //   bg: "bg-destructive-900",
  //   color: "#461A1B",
  // },
];
const warning = [
  {
    name: "warning",
    bg: "bg-warning",
    color: "#FFFAF8",
  },
  // {
  //   name: "warning-50",
  //   bg: "bg-warning-50",
  //   color: "#FFFAF8",
  // },
  // {
  //   name: "warning-100",
  //   bg: "bg-warning-100",
  //   color: "#FFF4F1",
  // },

  // {
  //   name: "warning-200",
  //   bg: "bg-warning-200",
  //   color: "#FEE4DA",
  // },
  // {
  //   name: "warning-300",
  //   bg: "bg-warning-300",
  //   color: "#FDD2C3",
  // },

  // {
  //   name: "warning-400",
  //   bg: "bg-warning-400",
  //   color: "#FCB298",
  // },
  // {
  //   name: "warning-500",
  //   bg: "bg-warning-500",
  //   color: "#FA916B",
  // },
  // {
  //   name: "warning-600",
  //   bg: "bg-warning-600",
  //   color: "#DF8260",
  // },
  // {
  //   name: "warning-700",
  //   bg: "bg-warning-700",
  //   color: "#965741",
  // },
  // {
  //   name: "warning-800",
  //   bg: "bg-warning-800",
  //   color: "#714231",
  // },
  // {
  //   name: "warning-900",
  //   bg: "bg-warning-900",
  //   color: "#4A2E21",
  // },
];
const info = [
  {
    name: "info",
    bg: "bg-info",
    color: "#F3FEFF",
  },
  // {
  //   name: "info-50",
  //   bg: "bg-info-50",
  //   color: "#F3FEFF",
  // },
  // {
  //   name: "info-100",
  //   bg: "bg-info-100",
  //   color: "#E7FEFF",
  // },

  // {
  //   name: "info-200",
  //   bg: "bg-info-200",
  //   color: "#C5FDFF",
  // },
  // {
  //   name: "info-300",
  //   bg: "bg-info-300",
  //   color: "#A3FCFF",
  // },

  // {
  //   name: "info-400",
  //   bg: "bg-info-400",
  //   color: "#5FF9FF",
  // },
  // {
  //   name: "info-500",
  //   bg: "bg-info-500",
  //   color: "#0CE7FA",
  // },
  // {
  //   name: "info-600",
  //   bg: "bg-info-600",
  //   color: "#00B8D4",
  // },
  // {
  //   name: "info-700",
  //   bg: "bg-info-700",
  //   color: "#007A8D",
  // },
  // {
  //   name: "info-800",
  //   bg: "bg-info-800",
  //   color: "#005E67",
  // },
  // {
  //   name: "info-900",
  //   bg: "bg-info-900",
  //   color: "#003F42",
  // },
];
const success = [
  {
    name: "success",
    bg: "bg-success",
    color: "#F3FEF8",
  },
  // {
  //   name: "success-50",
  //   bg: "bg-success-50",
  //   color: "#F3FEF8",
  // },
  // {
  //   name: "success-100",
  //   bg: "bg-success-100",
  //   color: "#E7FDF1",
  // },

  // {
  //   name: "success-200",
  //   bg: "bg-success-200",
  //   color: "#E7FDF1",
  // },
  // {
  //   name: "success-300",
  //   bg: "bg-success-300",
  //   color: "#A3F9D5",
  // },

  // {
  //   name: "success-400",
  //   bg: "bg-success-400",
  //   color: "#5FF5B1",
  // },
  // {
  //   name: "success-500",
  //   bg: "bg-success-500",
  //   color: "#50C793",
  // },
  // {
  //   name: "success-600",
  //   bg: "bg-success-600",
  //   color: "#3F9A7A",
  // },
  // {
  //   name: "success-700",
  //   bg: "bg-success-700",
  //   color: "#2E6D61",
  // },
  // {
  //   name: "success-800",
  //   bg: "bg-success-800",
  //   color: "#1F4B47",
  // },
  // {
  //   name: "success-900",
  //   bg: "bg-success-900",
  //   color: "#0F2A2E",
  // },
];

const Colors = () => {
  return (
    <Card>
      <CardHeader className="border-b border-solid">
        <CardTitle>All Colors</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <div className="col-span-2 text-base font-medium text-default-900  mb-6">
            Bases
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="group">
              <div className="color-box relative h-[96px] 2xl:w-[107px] w-[96px] bg-default-900 rounded-md flex flex-col text-primary-foreground p-4 transition-all  duration-200 group-hover:shadow-sm group-hover:-translate-y-1">
                <span className="absolute top-3 end-3 hidden group-hover:block duration-200 transition-all">
                  <CopyButton
                    event="copy_color"
                    name="Dark"
                    code="#0F172A"
                    className="h-5 w-5 ms-2 bg-white"
                  />
                </span>
              </div>
              <div className="flex-1 text-sm my-1 pt-1 text-default-700">
                Dark
              </div>
              <div className="flex-0 text-sm text-default-700 flex items-center">
                #0F172A
              </div>
            </div>
            <div className="group">
              <div className="color-box relative h-[96px] 2xl:w-[107px] w-[96px] bg-primary-foreground border-default-500 border rounded-md flex flex-col text-default-900  p-4 transition-all duration-200 group-hover:shadow-sm group-hover:-translate-y-1">
                <span className="absolute top-3 end-3 hidden group-hover:block duration-200 transition-all">
                  <CopyButton
                    event="copy_color"
                    name="White"
                    code="#FFFFFF"
                    className="ms-2 h-5 w-5 bg-white"
                  />
                </span>
              </div>
              <div className="flex-1 text-sm my-1 pt-1 text-default-700">
                White
              </div>
              <div className="flex-0 text-sm text-default-700 flex items-center">
                #FFFFFF
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="col-span-2 text-base font-medium text-default-900  mb-6">
            Slate
          </div>
          <div className="flex flex-wrap gap-4">
            {slates?.map((item, i) => (
              <div key={i} className="group ">
                <div
                  className={`color-box relative h-[96px] 2xl:w-[107px] w-[96px]
                 rounded-md flex flex-col text-primary-foreground p-4 transition-all duration-200 
                 group-hover:shadow-sm group-hover:-translate-y-1 ${item.bg}`}
                >
                  <span className="absolute top-3 end-3 hidden group-hover:block duration-200 transition-all">
                    <CopyButton
                      event="copy_color"
                      name={item.name}
                      code={item.color}
                      className="ms-2 h-5 w-5 bg-white"
                    />
                  </span>
                </div>
                <div className="flex-1 text-sm my-1 pt-1 text-default-700">
                  {item.name}
                </div>
                <div className="flex-0 text-sm text-default-700 flex items-center">
                  {item.color}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="col-span-2 text-base font-medium text-default-900  mb-6">
            Primary
          </div>
          <div className="flex flex-wrap gap-4">
            {primary?.map((item, i) => (
              <div key={i} className="group">
                <div
                  className={`color-box relative h-[96px] 2xl:w-[107px] w-[96px] 
                rounded-md flex flex-col text-primary-foreground p-4 transition-all 
                duration-200 group-hover:shadow-sm group-hover:-translate-y-1  ${item.bg}`}
                >
                  <span className="absolute top-3 end-3 hidden group-hover:block duration-200 transition-all">
                    <CopyButton
                      event="copy_color"
                      name={item.name}
                      code={item.color}
                      className="ms-2 h-5 w-5 bg-white"
                    />
                  </span>
                </div>
                <div className="flex-1 text-sm my-1 pt-1 text-default-700">
                  {item.name}
                </div>
                <div className="flex-0 text-sm text-default-700 flex items-center">
                  {item.color}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="col-span-2 text-base font-medium text-default-900  mb-6">
            Danger
          </div>
          <div className="flex flex-wrap gap-4">
            {danger?.map((item, i) => (
              <div key={i} className="group ">
                <div
                  className={`color-box relative h-[96px] 2xl:w-[107px] w-[96px]
                 rounded-md flex flex-col text-destructive-foreground p-4 transition-all duration-200
                  group-hover:shadow-sm group-hover:-translate-y-1 ${item.bg}`}
                >
                  <span className="absolute top-3 end-3 hidden group-hover:block duration-200 transition-all">
                    <CopyButton
                      event="copy_color"
                      name={item.name}
                      code={item.color}
                      className="ms-2 h-5 w-5 bg-white"
                    />
                  </span>
                </div>
                <div className="flex-1 text-sm my-1 pt-1 text-default-700">
                  {item.name}
                </div>
                <div className="flex-0 text-sm text-default-700 flex items-center">
                  {item.color}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="col-span-2 text-base font-medium text-default-900  mb-6">
            Warning
          </div>
          <div className="flex flex-wrap gap-4">
            {warning?.map((item, i) => (
              <div key={i} className="group ">
                <div
                  className={`color-box relative h-[96px] 2xl:w-[107px] w-[96px] rounded-md
                 flex flex-col  text-warning-foreground p-4 transition-all duration-200 group-hover:shadow-sm group-hover:-translate-y-1 ${item.bg}`}
                >
                  <span className="absolute top-3 end-3 hidden group-hover:block duration-200 transition-all">
                    <CopyButton
                      event="copy_color"
                      name={item.name}
                      code={item.color}
                      className="ms-2 h-5 w-5 bg-white"
                    />
                  </span>
                </div>
                <div className="flex-1 text-sm my-1 pt-1 text-default-700">
                  {item.name}
                </div>
                <div className="flex-0 text-sm text-default-700 flex items-center">
                  {item.color}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="col-span-2 text-base font-medium text-default-900  mb-6">
            Info
          </div>
          <div className="flex flex-wrap gap-4">
            {info?.map((item, i) => (
              <div key={i} className="group">
                <div
                  className={`color-box  relative h-[96px] 2xl:w-[107px] w-[96px] rounded-md flex flex-col text-info-foreground
                 p-4 transition-all duration-200 group-hover:shadow-sm  group-hover:-translate-y-1 ${item.bg}`}
                >
                  <span className="absolute top-3 end-3 hidden group-hover:block duration-200 transition-all">
                    <CopyButton
                      event="copy_color"
                      name={item.name}
                      code={item.color}
                      className="ms-2 h-5 w-5 bg-white"
                    />
                  </span>
                </div>
                <div className="flex-1 text-sm my-1 pt-1 text-default-700">
                  {item.name}
                </div>
                <div className="flex-0 text-sm text-default-700 flex items-center">
                  {item.color}{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="col-span-2 text-base font-medium text-default-900  mb-6">
            Success
          </div>
          <div className="flex flex-wrap gap-4">
            {success?.map((item, i) => (
              <div key={i} className="group">
                <div
                  className={`color-box h-[96px] relative 2xl:w-[107px] w-[96px] rounded-md flex flex-col text-success-foreground p-4 transition-all duration-200 group-hover:shadow-sm  group-hover:-translate-y-1 ${item.bg}`}
                >
                  <span className="absolute top-3 end-3 hidden group-hover:block duration-200 transition-all">
                    <CopyButton
                      event="copy_color"
                      name={item.name}
                      code={item.color}
                      className="ms-2 h-5 w-5 bg-white"
                    />
                  </span>
                </div>
                <div className="flex-1 text-sm my-1 pt-1 text-default-700">
                  {item.name}
                </div>
                <div className="flex-0 text-sm text-default-700 flex items-center">
                  {item.color}{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Colors;
