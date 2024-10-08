"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getLabel,
  getYAxisConfig,
} from "@/lib/appex-chart-options";
interface YRange {
  min: number;
  max: number;
}

interface DataPoint {
  x: string;
  y: number;
}
function generateData(count: number, yrange: YRange): DataPoint[] {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}
const RoundedHeatMap = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      name: "Metric1",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric5",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric6",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric7",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ];
  const options: any = {
    chart: {
      height: 450,
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    colors: [
      colors.primary,
      colors.info,
      colors.success,
      colors.primary

    ],
    plotOptions: {
      heatmap: {
        radius: 30,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 50,
              color: "#008FFB",
            },
            {
              from: 51,
              to: 100,
              color: "#00E396",
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: {
      type: "category",
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    stroke: {
      width: 0,
    },
    grid: {
      show: false,
    },
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
    }
  };

  return (
    <Chart
      options={options}
      series={series}
      type="heatmap"
      height={height}
      width={"100%"}
    />
  );
};

export default RoundedHeatMap;
