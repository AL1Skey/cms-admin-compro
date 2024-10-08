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
  getXAxisConfig,
} from "@/lib/appex-chart-options";

const ColumnWithLabel = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      name: "Inflation",
      data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8],
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
      offsetY: -20,
      formatter: function (val: number) {
        return val + "%";
      },
      style: {
        fontSize: "12px",
        fontWeight: 700,
        colors: [
          mode === 'light' ? colors["default-600"] : colors["default-300"],
        ],
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [
      colors.success,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),
    xaxis: getXAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    plotOptions: {
      bar: {
        columnWidth: "45%",
        dataLabels: {
          position: "top",
        },
      },
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

export default ColumnWithLabel;
