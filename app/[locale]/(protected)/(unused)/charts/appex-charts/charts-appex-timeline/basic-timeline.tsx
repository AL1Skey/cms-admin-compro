"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const BasicTimeline = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-04").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime(),
          ],
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-18").getTime(),
          ],
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
      },
    },

    colors: [
      colors.primary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),
    yaxis: {
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    },
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

export default BasicTimeline;
