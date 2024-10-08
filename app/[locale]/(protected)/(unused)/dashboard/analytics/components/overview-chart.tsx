"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { useConfig } from "@/hooks/use-config";

interface OverviewChartProps {
  height?: number;
  series?: number[];
  chartType?: "donut" | "pie" | "radialBar";
  labels?: string[]
}
const OverviewChart = ({
  height = 373,
  series = [44, 55, 67, 83],
  chartType = "radialBar",
  labels = ["A", "B", "C", "D"]

}: OverviewChartProps) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 6,
    },
    plotOptions: {
      radialBar: {

        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
            fontWeight: 700,
            color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          },
          total: {
            show: true,
            label: "Total",
            color: mode === 'light' ? colors["default-600"] : colors["default-300"],
            formatter: function (w: any) {
              return 249;
            }
          }
        }
      }
    },
    colors: [
      colors.primary,
      colors.info,
      colors.success,
      colors.warning
    ],
    labels: labels,
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
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
      type={chartType}
      height={height}
      width={"100%"}
    />
  );
};

export default OverviewChart;
