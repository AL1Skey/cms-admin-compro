"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

const BasicRadialBar = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [80];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 8,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "80%",
        },
        dataLabels: {
          value: {
            fontSize: "18px",
            fontWeight: 700,
            color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          },
        },
      },
    },
    colors: [
      colors.primary,
    ],
    labels: ["Cricket"],
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

export default BasicRadialBar;
