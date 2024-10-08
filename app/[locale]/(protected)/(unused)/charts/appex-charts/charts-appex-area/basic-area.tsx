"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getXAxisConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";
import { colors } from "@/lib/colors";


const BasicArea = ({ height = 300 }) => {
  const [config] = useConfig();

  const { theme: mode } = useTheme();

  const series = [
    {
      data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80],
    },
  ];
  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: [colors.primary],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    fill: {
      type: "gradient",
      colors: [colors.primary],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.1,
        stops: [50, 100, 0],
      },
    },
    yaxis: getYAxisConfig(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    xaxis: getXAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
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
      type="area"
      height={height}
      width={"100%"}
    />
  );
};

export default BasicArea;
