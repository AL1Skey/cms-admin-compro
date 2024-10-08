"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getLabel, getGridConfig, getYAxisConfig } from "@/lib/appex-chart-options";
interface DataRange {
  min: number;
  max: number;
}
const SynchronizedChart = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();

  function generateDayWiseTimeSeries(baseval: number, count: number, yrange: DataRange) {
    var i = 0;
    var series: [number, number][] = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  const series = [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "fb",
      group: "social",

      height: 160,
    },
    colors: [
      colors.primary,
    ],
    grid: getGridConfig(),
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
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
  };
  const seriesLine2 = [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 30,
      }),
    },
  ];

  const optionsLine2: any = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "tw",
      group: "social",

      height: 160,
    },
    colors: [
      colors.danger,
    ],
    grid: getGridConfig(),
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
    yaxis: {
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    },
  };

  const seriesArea = [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ];
  const optionsArea: any = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "yt",
      group: "social",
    },
    stroke: {
      curve: "straight",
      width: 3,
    },

    markers: {
      size: 4,
      hover: {
        size: 6,
      },
    },
    grid: getGridConfig(),
    colors: [colors.info],
    xaxis: {
      type: "datetime",
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    },
    yaxis: {
      tickAmount: 2,
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    },
  };

  return (
    <div id="wrapper">
      <div id="chart-line">
        <Chart
          options={options}
          series={series}
          type="line"
          height={160}
          width={"100%"}
        />
      </div>
      <div id="chart-line2">
        <Chart
          options={optionsLine2}
          series={seriesLine2}
          type="line"
          height={160}
          width={"100%"}
        />
      </div>
      <div id="chart-area">
        <Chart
          options={optionsArea}
          series={seriesArea}
          type="area"
          height={160}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default SynchronizedChart;
