"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

const BasicDonut = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [44, 55, 41, 17, 15];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "20px",
      },
    },
    stroke: {
      width: 0
    },
    colors: [
      colors.primary,
      colors.info,
      colors.success,
      colors.primary,
      colors.secondary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: config.isRtl ? 5 : -5
      }
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      height={height}
      width={"100%"}
    />
  );
};

export default BasicDonut;
