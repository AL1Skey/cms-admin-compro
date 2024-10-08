"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";

import {
  getGridConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

interface AccountChartProps {
  height?: number;
  series?: {
    data: number[]
  }[];
  chartType?: "line" | "area" | "bar";
  chartColor?: keyof typeof colors;
}
const AccountChart = (
  {
    height = 300,
    series = [
      {
        data: [31, 40, 28, 51, 42, 109, 100]
      }
    ],
    chartType = "line",
    chartColor = "warning",
  }: AccountChartProps) => {


  const { theme: mode } = useTheme();

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [colors[chartColor]],
    grid: getGridConfig(),
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    markers: {
      size: 4,
      colors: [colors[chartColor]],
      strokeColors: colors[chartColor],
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
      hover: {
        sizeOffset: 1,
      },
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
      type={chartType}
      height={height}
      width={"100%"}
    />
  );
};

export default AccountChart;
