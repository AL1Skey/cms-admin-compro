"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getYAxisConfig } from "@/lib/appex-chart-options";

interface DealsDistributionChartProps {
  height?: number;
  series?: {
    name: string;
    data: number[];
  }[];
}
const defaultSeries = [
  {
    name: "Sales qualified",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Meeting",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "In negotiation",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  }
];
const DealDistributionsChart = ({ series = defaultSeries, height = 410 }: DealsDistributionChartProps) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        dataLabels: {
          total: {
            enabled: false,
          }
        },
        columnWidth:"55%"
      }
    },
    dataLabels: {
      enabled: false,
      offsetX: 0,
      style: {
        fontSize: "12px",
        colors: [
          mode === 'light' ? colors["default-600"] : colors["default-300"]
        ]
      }
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
      colors.warning,
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
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: mode === 'light' ? colors["default-600"] : colors["default-300"]
        }
      }
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      fontFamily: "Inter",
      offsetY: 0,
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
      },
      markers: {
        width: 6,
        height: 6,
        radius: 12,
        offsetX: config.isRtl ? 5 : -5
      }
    },
    itemMargin: {
      horizontal: 18,
      vertical: 0,
    }
  }

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

export default DealDistributionsChart;
