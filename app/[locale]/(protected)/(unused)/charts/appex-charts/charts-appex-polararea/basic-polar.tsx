"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getXAxisConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const BasicPolar = ({ height = 400 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];
  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      colors.primary,
      colors.info,
      colors.success,
      colors.primary
    ],
    fill: {
      opacity: 0.5,
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: 'transparent',
        },
        spokes: {
          strokeWidth: 1,
          connectorColors: 'transparent',
        },
      },
    },
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: getXAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    legend: {
      position: "bottom",
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
      type="polarArea"
      height={height}
      width={"100%"}
    />
  );
};

export default BasicPolar;
