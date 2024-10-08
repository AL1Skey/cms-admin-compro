"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getYAxisConfig,
  getLabel,
} from "@/lib/appex-chart-options";

const StackedColumn = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "PRODUCT C",
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: "PRODUCT D",
      data: [21, 7, 25, 13, 22, 8],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [
      colors.info,
      colors.success,
      colors.primary,
      colors.primary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 2,
        dataLabels: {
          position: "top",
        },
      },
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May"],
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
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
      type="bar"
      height={height}
      width={"100%"}
    />
  );
};

export default StackedColumn;
