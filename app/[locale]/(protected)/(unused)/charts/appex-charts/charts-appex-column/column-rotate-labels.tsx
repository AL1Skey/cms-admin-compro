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

const ColumnRotateLabels = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      name: "Servings",
      data: [44, 55, 41, 67, 76, 43, 60, 50, 70],
    }
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    annotations: {
      points: [
        {
          x: "Mangoes",
          seriesIndex: 0,
          label: {
            borderColor: 'transparent',
            offsetY: 0,
            style: {
              color: "#fff",
              background: colors.primary,
            },
            text: "Mangoes are good",
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
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
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "50%",
      },
    },
    xaxis: {
      categories: [
        "Apples",
        "Oranges",
        "Strawberries",
        "Pineapples",
        "Mangoes",
        "Bananas",
        "Pears",
        "Watermelons",
        "Cherries",
      ],
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
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

export default ColumnRotateLabels;
