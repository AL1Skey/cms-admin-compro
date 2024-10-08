"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { useConfig } from "@/hooks/use-config";
interface TrendsCalculationChartProps {
  height?: number;
  series?: number[];
  chartLabels?:string[];
}
const TrendsCalculationChart = ({
   series = [44, 55, 30],
   height = 360,
   chartLabels=["70% Sent", "18% Opend", "12% Rejected"],
   }: TrendsCalculationChartProps) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();
 
  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 0
    },
    labels:chartLabels,
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "20px",
      },
    },
    colors: [
      colors.primary,
      colors.success,
      colors.warning,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      position:"bottom",
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
      type="pie"
      height={height}
      width={"100%"}
    />
  );
};

export default TrendsCalculationChart;
