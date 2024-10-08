"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

const GradiantRadialBar = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [75];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "transparent",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: colors.success,
            fontSize: "20px",
          },
          value: {
            formatter: function (val: string) {
              return parseInt(val);
            },
            color: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "36px",
            show: true,
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: [
          colors.primary,
        ],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
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

export default GradiantRadialBar;
