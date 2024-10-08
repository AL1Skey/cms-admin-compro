"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

const DonutPattern = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [44, 55, 41, 17, 15];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      width: 0,
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8,
      },
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: true,
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines",
        ],
      },
      colors: [
        colors.primary,
        colors.info,
        colors.primary,
        colors.success,
        colors.secondary,
        colors.danger,

      ],
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false
          }
        }
      },
    },
    theme: {
      palette: "palette2",
    },

    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },

    legend: {
      show: true,
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
      type="donut"
      height={height}
      width={"100%"}
    />
  );
};

export default DonutPattern;
