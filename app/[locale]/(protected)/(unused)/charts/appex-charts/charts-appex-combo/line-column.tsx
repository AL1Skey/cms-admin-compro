"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const LineColumn = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
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
      colors.primary,
      colors.info,
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
      }
    },

    xaxis: {
      type: "datetime",
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
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
            color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          },
        },
        labels: getLabel(
          mode === 'light' ? colors["default-600"] : colors["default-300"]
        )
      }
    ],
    legend: {
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
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

export default LineColumn;
