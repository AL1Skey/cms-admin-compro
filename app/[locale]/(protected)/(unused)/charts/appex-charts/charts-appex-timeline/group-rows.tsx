"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getLabel,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const GroupRows = ({ height = 400 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      name: "George Washington",
      data: [
        {
          x: "President",
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    {
      name: "John Adams",
      data: [
        {
          x: "President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "Vice President",
          y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    {
      name: "Thomas Jefferson",
      data: [
        {
          x: "President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
        },
        {
          x: "Vice President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "Secretary of State",
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime(),
          ],
        },
      ],
    },
    {
      name: "Aaron Burr",
      data: [
        {
          x: "Vice President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
        },
      ],
    },
    {
      name: "George Clinton",
      data: [
        {
          x: "Vice President",
          y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()],
        },
      ],
    },
    {
      name: "John Jay",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()],
        },
      ],
    },
    {
      name: "Edmund Randolph",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()],
        },
      ],
    },
    {
      name: "Timothy Pickering",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()],
        },
      ],
    },
    {
      name: "Charles Lee",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()],
        },
      ],
    },
    {
      name: "John Marshall",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()],
        },
      ],
    },
    {
      name: "Levi Lincoln",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()],
        },
      ],
    },
    {
      name: "James Madison",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()],
        },
      ],
    },
  ];
  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
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

    xaxis: {
      type: "datetime",
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    legend: {
      position: "right",
      horizontalAlign: "right",
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
      type="rangeBar"
      height={height}
      width={"100%"}
    />
  );
};

export default GroupRows;
