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

const LineWithAnnonotations = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      data: [7800.0, 8100.0, 8400.0, 9000.0, 9300.0, 9600.0],
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
      curve: "straight",
      width: 4,
    },
    colors: [
      colors.primary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
      },
    },
    annotations: {
      yaxis: [
        {
          y: 8200,
          borderColor: mode === 'light' ? colors["default-600"] : colors["default-300"],
          label: {
            borderColor: 'transparent',
            style: {
              color: "#fff",
              background: colors.primary,
            },
            text: "Support",
          },
        },
        {
          y: 8600,
          y2: 9000,
          borderColor: mode === 'light' ? colors["default-600"] : colors["default-300"],
          fillColor: colors.primary,
          label: {
            borderColor: 'transparent',
            style: {
              fontSize: "10px",
              color: colors.success,
              background: colors.secondary,
            },
            text: "Y-axis range",
          },
        },
      ],
      xaxis: [
        {
          x: new Date("23 Nov 2017").getTime(),
          strokeDashArray: 0,
          borderColor: mode === 'light' ? colors["default-600"] : colors["default-300"],
          label: {
            borderColor: 'transparent',
            style: {
              color: colors.success,
              background: 'transparent',
            },
            text: "Anno Test",
          },
        },
        {
          x: new Date("26 Nov 2017").getTime(),
          x2: new Date("28 Nov 2017").getTime(),
          fillColor: mode === 'light' ? colors["default-600"] : colors["default-300"],
          opacity: 0.4,
          label: {
            borderColor: 'transparent',
            style: {
              fontSize: "10px",
              color: colors.warning,
              background: 'transparent',
            },
            offsetY: -10,
            text: "X-axis range",
          },
        },
      ],
      points: [
        {
          x: new Date("01 Dec 2017").getTime(),
          y: 8607.55,
          marker: {
            size: 8,
            fillColor: colors.info,
            strokeColor: "red",
            radius: 2,
            cssClass: "apexcharts-custom-class",
          },
          label: {
            borderColor: 'transparent',
            offsetY: 0,
            style: {
              color: colors.info,
              background: colors.success,
            },

            text: "Point Annotation",
          },
        },
        {
          x: new Date("08 Dec 2017").getTime(),
          y: 9340.85,
          marker: {
            size: 0,
          },
        },
      ],
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={height}
      width={"100%"}
    />
  );
};

export default LineWithAnnonotations;
