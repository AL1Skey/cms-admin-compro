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
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const LoopChart = ({ height = 350 }) => {

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
        animations: {
          y: {
            duration: 2000,
            delay: 500,
          },
        },
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(colors.danger, 0.5),
        backgroundColor: hexToRGB(colors.danger, 0.5),
        fill: 1,
        tension: 0.5,
      },
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(colors.info, 0.5),
        backgroundColor: hexToRGB(colors.info, 0.5),
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
        display: true,
      },
    },
    animations: {
      radius: {
        duration: 400,
        easing: "linear",
        loop: (context: any) => context.active,
      },
    },
    hoverRadius: 12,
    hoverBackgroundColor: "yellow",
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
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
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default LoopChart;
