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

const HorizontalBoxPlot = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      data: [
        {
          x: "Category A",
          y: [54, 66, 69, 75, 88],
        },
        {
          x: "Category B",
          y: [43, 65, 69, 76, 81],
        },
        {
          x: "Category C",
          y: [31, 39, 45, 51, 59],
        },
        {
          x: "Category D",
          y: [39, 46, 55, 65, 71],
        },
        {
          x: "Category E",
          y: [29, 31, 35, 39, 44],
        },
        {
          x: "Category F",
          y: [41, 49, 58, 61, 67],
        },
        {
          x: "Category G",
          y: [54, 59, 66, 71, 88],
        },
      ],
    },
  ];

  const options: any = {
    chart: {
      type: "boxPlot",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
      boxPlot: {
        colors: {
          upper: colors.info,
          lower: colors.warning,
        },
      },
    },
    colors: [
      colors.primary,
      colors.info,
    ],
    stroke: {
      colors: [
        colors.primary,
      ],
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),
    xaxis: {
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
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
      type="boxPlot"
      height={height}
      width={"100%"}
    />
  );
};

export default HorizontalBoxPlot;
