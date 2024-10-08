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

const MultipleSeriesRadar = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    dataLabels: {
      enabled: false,
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
        },
      },
    },
    fill: {
      type: "gradient",
      colors: [
        colors.primary,
        colors.info,
        colors.success,
      ],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.1,
        stops: [50, 100, 0],
      },
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
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
      type="radar"
      height={height}
      width={"100%"}
    />
  );
};

export default MultipleSeriesRadar;
