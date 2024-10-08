"use client"

import { useTheme } from "next-themes";
import Chart from "react-apexcharts";
import { colors } from "@/lib/colors";
interface OverviewRadialChartProps {
  height?: number;
  series?: number[];
  chartType?: "donut" | "pie" | "radialBar";
  labels?: string[];
  chartColor?: string[];
}
const OverviewRadialChart = ({
  height = 320,
  series = [67],
  chartType = "radialBar",
  chartColor=["#2563eb"],
}: OverviewRadialChartProps) => {

  const {theme:mode} = useTheme();

  const options:any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "22px",
            color: mode === 'light' ? colors["default-600"] : colors["default-300"]
          },
          value: {
            fontSize: "16px",
            color: mode === 'light' ? colors["default-600"] : colors["default-300"]
          },
          total: {
            show: true,
            label: "Total",
            color: mode === 'light' ? colors["default-600"] : colors["default-300"],
            formatter: function () {
              return 249;
            }
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    colors: chartColor,
  };

  return (
    <div>
      <Chart series={series} options={options} type={chartType} height={height} />
    </div>
  );
};

export default OverviewRadialChart;
