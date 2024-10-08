"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getLabel,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const RadarPolygonFill = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: [colors.info],
    fill: {
      type: "solid",
      colors: ["#1A73E8"],
    },
    markers: {
      size: 4,
      colors: ["#000"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    plotOptions: {
      radar: {
        size: undefined,
        offsetX: 0,
        offsetY: 0,
        polygons: {
          strokeColors: 'transparent',
          strokeWidth: 0.5,
          connectorColors: 'transparent',
        }
      }
    },
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      show: true,
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
      },
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="radar"
      height={height}
      width={"100%"}
    />
  );
};

export default RadarPolygonFill;
