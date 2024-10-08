"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getXAxisConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const BasicLineChart = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
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
    colors: [
      colors.primary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
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
      type="line"
      height={height}
      width={"100%"}
    />
  );
};

export default BasicLineChart;
