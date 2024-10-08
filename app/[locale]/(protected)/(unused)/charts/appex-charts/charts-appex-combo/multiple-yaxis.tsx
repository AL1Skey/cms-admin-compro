"use client";
import React, { useState } from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";

const MultipleYAxis = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const [options, setOptions] = useState<any>({
    chart: {
      toolbar: {
        show: false,
      },
      type: 'line',
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
      text: 'XYZ - Stock Analysis (2009 - 2016)',
      align: 'center',
      offsetX: 0,
      style: {
        color: colors.primary,
      }
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: [
      {
        min: 0,
        seriesName: 'Income',
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: colors.primary,
        },
        labels: {
          style: {
            colors: colors.primary,
          }
        },
        title: {
          text: "Income (thousand crores)",
          style: {
            color: colors.success,
          }
        },
      },
      {
        min: 0,
        seriesName: 'Cashflow',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: colors.success
        },
        labels: {
          style: {
            colors: colors.success,
          }
        },
        title: {
          text: "Operating Cashflow (thousand crores)",
          style: {
            color: colors.success,
          }
        }
      },
      {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: colors.warning
        },
        labels: {
          style: {
            colors: colors.primary
          },
        },
        title: {
          text: "Revenue (thousand crores)",
          style: {
            color: colors.primary
          }
        }
      },
    ],
    grid: getGridConfig(),
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    legend: {
      horizontalAlign: 'center',
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: config.isRtl ? 5 : -5
      }
    }
  });

  const [series, setSeries] = useState([{
    name: 'Income',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'Cashflow',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }]);

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={height}
      width={"100%"}
    />
  );
};

export default MultipleYAxis;


