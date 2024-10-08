"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const GroupStacked = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      name: "Q1 Budget",
      group: "budget",
      data: [44000, 55000, 41000, 67000, 22000, 43000],
    },
    {
      name: "Q1 Actual",
      group: "actual",
      data: [48000, 50000, 40000, 65000, 25000, 40000],
    },
    {
      name: "Q2 Budget",
      group: "budget",
      data: [13000, 36000, 20000, 8000, 13000, 27000],
    },
    {
      name: "Q2 Actual",
      group: "actual",
      data: [20000, 40000, 25000, 10000, 12000, 28000],
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
      formatter: (val: number) => {
        return val / 1000 + "K";
      },
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

    yaxis: {
      labels: {
        formatter: (val: number) => {
          return val / 1000 + "K";
        },
        style: {
          colors: [
            mode === 'light' ? colors["default-600"] : colors["default-300"],
          ],
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },

    xaxis: {
      categories: [
        "Online advertising",
        "Sales Training",
        "Print advertising",
        "Catalogs",
        "Meetings",
        "Public relations",
      ],
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

export default GroupStacked;
