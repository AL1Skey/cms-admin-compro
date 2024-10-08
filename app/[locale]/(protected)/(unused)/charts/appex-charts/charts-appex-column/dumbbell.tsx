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

const DumbbellChart = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      data: [
        {
          x: "2008",
          y: [2800, 4500],
        },
        {
          x: "2009",
          y: [3200, 4100],
        },
        {
          x: "2010",
          y: [2950, 7800],
        },
        {
          x: "2011",
          y: [3000, 4600],
        },
        {
          x: "2012",
          y: [3500, 4100],
        },
        {
          x: "2013",
          y: [4500, 6500],
        },
        {
          x: "2014",
          y: [4100, 5600],
        },
      ],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [
          [
            colors.primary,
            colors.success,
          ],
        ],
      },
    },
    colors: [colors.info],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: [
          mode === 'light' ? colors["default-600"] : colors["default-300"],
        ],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
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
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
  };
  return (
    <Chart
      options={options}
      series={series}
      type="rangeBar"
      height={height}
      width={"100%"}
    />
  );
};

export default DumbbellChart;
