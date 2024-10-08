"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const DumbbellTimelineChart = ({ height = 400 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      data: [
        {
          x: "Operations",
          y: [2800, 4500],
        },
        {
          x: "Customer Success",
          y: [3200, 4100],
        },
        {
          x: "Engineering",
          y: [2950, 7800],
        },
        {
          x: "Marketing",
          y: [3000, 4600],
        },
        {
          x: "Product",
          y: [3500, 4100],
        },
        {
          x: "Data Science",
          y: [4500, 6500],
        },
        {
          x: "Sales",
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
    },

    plotOptions: {
      bar: {
        horizontal: true,
        isDumbbell: true,
        dumbbellColors: [
          [
            colors.warning,
            colors.info,
          ],
        ],
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: [
          colors.info,
        ],
        inverseColors: false,
        stops: [0, 100],
      },
    },
    colors: [
      colors.primary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),
    yaxis: {
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    },
    xaxis: {
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

export default DumbbellTimelineChart;
