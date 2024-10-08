"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dayjs from "dayjs";
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getXAxisConfig,
} from "@/lib/appex-chart-options";

const GroupLabelColumn = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      name: "sales",
      data: [
        {
          x: "2019/01/01",
          y: 400,
        },
        {
          x: "2019/04/01",
          y: 430,
        },
        {
          x: "2019/07/01",
          y: 448,
        },
        {
          x: "2019/10/01",
          y: 470,
        },
        {
          x: "2020/01/01",
          y: 540,
        },
        {
          x: "2020/04/01",
          y: 580,
        },
        {
          x: "2020/07/01",
          y: 690,
        },
        {
          x: "2020/10/01",
          y: 690,
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
    dataLabels: {
      formatter: (val: number) => {
        return val / 1000 + "K";
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [colors.info],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    yaxis: getXAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),

    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      type: "category",

      labels: {
        formatter: function (val: number) {
          return "Q" + Math.ceil(dayjs(val).month() / 3);
        },
        style: {
          colors: Array(8).fill(
            mode === 'light' ? colors["default-600"] : colors["default-300"]
          ),
        },
      },
      group: {
        style: {
          fontSize: "10px",
          fontWeight: 700,
          colors: Array(2).fill(
            mode === 'light' ? colors["default-600"] : colors["default-300"]
          ),
        },
        groups: [
          { title: "2019", cols: 4 },
          { title: "2020", cols: 4 },
        ],
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

export default GroupLabelColumn;
