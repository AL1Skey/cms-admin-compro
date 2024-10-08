"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { getLabel, getYAxisConfig } from "@/lib/appex-chart-options";

const VisitorsChart = ({ height = 350 }) => {
  const { theme: mode } = useTheme();

  const series = [
    {
      name: "Male",
      data: [41, 64, 81, 60, 42, 42, 33, 23],
    },
    {
      name: "Female",
      data: [65, 46, 42, 25, 58, 63, 76, 43],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
        blur: 8,
        left: 1,
        top: 1,
        opacity: 0.5,
      }
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    colors: [colors.warning, colors.primary],
    fill: {
      opacity: [0.4, 0.4],
    },
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: {
      categories: ["2019", "2020", "2021", "2017", "2018", "2015", "2014", "2013"],
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    legend: {
      show: true,
      fontSize: "14px",
      fontFamily: "Inter",
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"]
      },
    },
    plotOptions: {
      radar: {
        size: undefined,
        offsetX: 0,
        offsetY: 0,
        polygons: {
          strokeColors: 'transparent',
          strokeWidth: 0.5,
          connectorColors: 'transparent',
        },
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  };
  return (
    <Chart
      options={options}
      series={series}
      type="radar"
      height={height}
      width={"100%"}
    />
  );
};

export default VisitorsChart;
