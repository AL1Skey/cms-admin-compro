"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getYAxisConfig } from "@/lib/appex-chart-options";

const GroupedStackBar = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      name: "Q1 Budget",
      group: "budget",
      data: [44000, 55000, 41000, 67000, 22000],
    },
    {
      name: "Q1 Actual",
      group: "actual",
      data: [48000, 50000, 40000, 65000, 25000],
    },
    {
      name: "Q2 Budget",
      group: "budget",
      data: [13000, 36000, 20000, 8000, 13000],
    },
    {
      name: "Q2 Actual",
      group: "actual",
      data: [20000, 40000, 25000, 10000, 12000],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            style: {
              colors: [
                mode === 'light' ? colors["default-600"] : colors["default-300"],
              ],
              fontSize: "13px",
              fontWeight: 800,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      style: {
        fontSize: "12px",
        colors: [
          mode === 'light' ? colors["default-600"] : colors["default-300"],
        ],
      },
      formatter: (val: number) => {
        return val / 1000 + "K";
      },
    },
    stroke: {
      show: false,
      width: 1,
      colors: [
        mode === 'light' ? colors["default-600"] : colors["default-300"],
      ]
    },
    colors: [
      colors.primary,
      colors.info,
      colors.success,
      colors.primary
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
        "Online advertising",
        "Sales Training",
        "Print advertising",
        "Catalogs",
        "Meetings",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: function (val: number) {
          return val + "K";
        },
        style: {
          colors: [
            mode === 'light' ? colors["default-600"] : colors["default-300"],
          ]
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
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 12,
        height: 12,
        radius: 2,
        offsetX: config.isRtl ? 5 : -5
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

export default GroupedStackBar;
