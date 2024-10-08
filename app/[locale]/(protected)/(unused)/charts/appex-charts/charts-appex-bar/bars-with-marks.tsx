"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const BarsWithMarkes = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      name: "Actual",
      data: [
        {
          x: "2011",
          y: 12,
          goals: [
            {
              name: "Expected",
              value: 14,
              strokeWidth: 2,
              strokeDashArray: 2,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2012",
          y: 44,
          goals: [
            {
              name: "Expected",
              value: 54,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2013",
          y: 54,
          goals: [
            {
              name: "Expected",
              value: 52,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2014",
          y: 66,
          goals: [
            {
              name: "Expected",
              value: 61,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2015",
          y: 81,
          goals: [
            {
              name: "Expected",
              value: 66,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2016",
          y: 67,
          goals: [
            {
              name: "Expected",
              value: 70,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: "#775DD0",
            }
          ]
        }
      ]
    }
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
    dataLabels: {
      formatter: function (val: number, opt: any) {
        const goals =
          opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

        if (goals && goals.length) {
          return `${val} / ${goals[0].value}`;
        }
        return val;
      },
    },
    stroke: {
      show: false,
      width: 1,
      colors: [
        mode === 'light' ? colors["default-600"] : colors["default-300"],
      ],
    },
    colors: [
      colors.success,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: [
            mode === 'light' ? colors["default-600"] : colors["default-300"],
          ],
        },
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },

    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Expected"],
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
        offsetX: config.isRtl ? 5 : -5,
        fillColors: [
          colors.success,
          colors.primary,
        ]
      }
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

export default BarsWithMarkes;
