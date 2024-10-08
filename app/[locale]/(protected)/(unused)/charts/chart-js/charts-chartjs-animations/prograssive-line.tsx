"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { colors } from "@/lib/colors";

import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const ProgressiveLine = ({ height = 350 }) => {

  const { theme: mode } = useTheme();









  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  var data = [];
  let data2 = [];
  let prev = 100;
  let prev2 = 80;
  for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
    prev2 += 5 - Math.random() * 10;
    data2.push({ x: i, y: prev2 });
  }

  const totalDuration = 10000;
  const delayBetweenPoints = totalDuration / data.length;
  const previousY = (ctx: any) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
        .getDatasetMeta(ctx.datasetIndex)
        .data[ctx.index - 1].getProps(["y"], true).y;
  const animation = {
    x: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx: any) {
        if (ctx.type !== "data" || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx: any) {
        if (ctx.type !== "data" || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  };

  let data1: any = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data,
        borderColor: hexToRGB(colors.danger, 0.5),
        borderWidth: 1,
        radius: 0,
      },
      {
        label: "Dataset 2",
        data: data2,
        borderColor: hexToRGB(colors.info, 0.5),
        borderWidth: 1,
        radius: 0,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        legend: false,
        labels: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
        display: true,
      },
    },
    animation,
    interaction: {
      intersect: false,
    },
    hover: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        stacked: true,
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
      },
      x: {
        type: "linear",
        stacked: true,
        title: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          display: true,
        },
        grid: {
          drawTicks: false,
          display: false,
        },

        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        }
      }
    },

    maintainAspectRatio: false,
  };
  return (
    <div>
      <Line options={options} data={data1} height={height} />
    </div>
  );
};

export default ProgressiveLine;
