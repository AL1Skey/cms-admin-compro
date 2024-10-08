"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getXAxisConfig } from "@/lib/appex-chart-options";

const RealTimeLineChart = ({ height = 300 }) => {
  const [chartData, setChartData] = useState({
    series: [{ data: [10, 41, 35, 51, 49, 62, 69, 91, 100] }],
  });

  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    colors: [
      colors.primary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),
    yaxis: getXAxisConfig(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    xaxis: getXAxisConfig(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  return (
    <>
      <Chart
        options={options}
        series={chartData.series}
        type="line"
        height={height}
        width={"100%"}
      />
    </>
  );
};

export default RealTimeLineChart;
