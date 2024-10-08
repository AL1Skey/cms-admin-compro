"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getYAxisConfig } from "@/lib/appex-chart-options";

const StackedBar = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();

  const series = [
    {
      name: "Marine Sprite",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Striking Calf",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Tank Picture",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: "Bucket Slope",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
    {
      name: "Reborn Kid",
      data: [25, 12, 19, 32, 25, 24, 10],
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
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
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
      categories: [2001, 2002, 2003, 2004, 2005, 2006],
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

export default StackedBar;
