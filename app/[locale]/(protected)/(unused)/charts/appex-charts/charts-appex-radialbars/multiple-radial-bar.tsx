"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

const MultipleRadialBar = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [44, 55, 67, 83];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 6,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
            fontWeight: 700,
            color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w: any) {
              return 249;
            },
          },
        },
      },
    },
    colors: [
      colors.primary,
      colors.info,
      colors.success,
      colors.primary
    ],
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
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
      type="radialBar"
      height={height}
      width={"100%"}
    />
  );
};

export default MultipleRadialBar;
