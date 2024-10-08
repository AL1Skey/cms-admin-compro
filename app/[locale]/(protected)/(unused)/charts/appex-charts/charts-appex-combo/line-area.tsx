"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const LineArea = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();

  const series = [
    {
      name: "TEAM A",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: "smooth",
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    colors: [
      colors.info,
      colors.primary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    xaxis: {
      type: "datetime",
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
          style: {
            color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          },
        },
        labels: getLabel(
          mode === 'light' ? colors["default-600"] : colors["default-300"]
        )
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
          style: {
            color: mode === 'light' ? colors["default-600"] : colors["default-300"]
          }
        },
        labels: getLabel(
          mode === 'light' ? colors["default-600"] : colors["default-300"]
        )
      }
    ],
    legend: {
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"]
      },
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: config.isRtl ? 5 : -5
      }
    }
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

export default LineArea;
