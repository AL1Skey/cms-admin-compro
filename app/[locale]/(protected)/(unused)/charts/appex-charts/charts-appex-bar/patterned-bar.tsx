"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getLabel
} from "@/lib/appex-chart-options";

const PatternedBar = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      name: "Marine Sprite",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Striking Calf",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Tank Picture",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: "Bucket Slope",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
      dropShadow: {
        enabled: true,
        blur: 1,
        opacity: 0.25,
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 1,
      colors: [
        mode === 'light' ? colors["default-600"] : colors["default-300"],
      ],
    },
    colors: [
      colors.primary,
      colors.info,
      colors.success,
    ],
    tooltip: {
      shared: false,
      theme: mode === "dark" ? "dark" : "light",
      y: {
        formatter: function (val: number) {
          return val + "K";
        },
      },
    },
    grid: getGridConfig(),
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        style: ["circles", "slantedLines", "verticalLines", "horizontalLines"],
      },
    },
    yaxis: {
      axisTicks: {
        show: true,
      },
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      position: "right",
      offsetY: 40,
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
    }
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

export default PatternedBar;
