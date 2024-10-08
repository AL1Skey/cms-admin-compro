"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

import { colors } from "@/lib/colors";

import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";

import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const DelayChart = ({ height = 350 }) => {

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

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(colors.danger, 0.5),
        backgroundColor: hexToRGB(colors.danger, 0.5),
        borderSkipped: "bottom",
      },
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(colors.info, 0.5),
        backgroundColor: hexToRGB(colors.info, 0.5),
        borderSkipped: "bottom",
      },
      {
        label: "Dataset 3",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(colors.success, 0.5),
        backgroundColor: hexToRGB(colors.success, 0.5),
        borderSkipped: "bottom",
      },
    ],
  };

  let delayed: boolean = false;
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
        display: true,
      }
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context: any) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
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
          stepSize: 50,
        },
      },
      x: {
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
        },
      },
    },

    maintainAspectRatio: false,
  };

  return (
    <div>
      <Bar options={options} data={data} height={height} />
    </div>
  );
};

export default DelayChart;
