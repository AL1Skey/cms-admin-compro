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

const ScatterBoxplot = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      name: "box",
      type: "boxPlot",
      data: [
        {
          x: new Date("2017-01-01").getTime(),
          y: [54, 66, 69, 75, 88],
        },
        {
          x: new Date("2018-01-01").getTime(),
          y: [43, 65, 69, 76, 81],
        },
        {
          x: new Date("2019-01-01").getTime(),
          y: [31, 39, 45, 51, 59],
        },
        {
          x: new Date("2020-01-01").getTime(),
          y: [39, 46, 55, 65, 71],
        },
        {
          x: new Date("2021-01-01").getTime(),
          y: [29, 31, 35, 39, 44],
        },
      ],
    },
    {
      name: "outliers",
      type: "scatter",
      data: [
        {
          x: new Date("2017-01-01").getTime(),
          y: 32,
        },
        {
          x: new Date("2018-01-01").getTime(),
          y: 25,
        },
        {
          x: new Date("2019-01-01").getTime(),
          y: 64,
        },
        {
          x: new Date("2020-01-01").getTime(),
          y: 27,
        },
        {
          x: new Date("2020-01-01").getTime(),
          y: 78,
        },
        {
          x: new Date("2021-01-01").getTime(),
          y: 15,
        },
      ],
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
      colors.info,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: colors.primary,
          lower: colors.info,
        },
      },
    },
    grid: getGridConfig(),

    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: {
      type: "datetime",
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
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
      type="boxPlot"
      height={height}
      width={"100%"}
    />
  );
};

export default ScatterBoxplot;
