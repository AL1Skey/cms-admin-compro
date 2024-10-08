"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig } from "@/lib/appex-chart-options";

const PyramidChart = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      name: "",
      data: [200, 330, 548, 740, 880, 990, 1100, 1380],
    },
  ];
  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: "100%",
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: string, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      dropShadow: {
        enabled: true,
      },
    },
    colors: [
      colors.primary,
      colors.info,
      colors.primary,
      colors.success,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    fill: {
      type: "gradient",
      colors: [
        colors.primary,
        colors.info,
        colors.primary,
        colors.success,
      ],
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: [
        "Sweets",
        "Processed Foods",
        "Healthy Fats",
        "Meat",
        "Beans & Legumes",
        "Dairy",
        "Fruits & Vegetables",
        "Grains",
      ],
    },

    legend: {
      show: false,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={height}
      width={"100%"}
    />
  );
};

export default PyramidChart;
