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

const TimeScaleChart = ({ height = 350 }) => {

  const { theme: mode } = useTheme();











  const labels = [
    "Nov 24",
    "Nov 25",
    "Nov 26",
    "Nov 27",
    "Nov 28",
    "Nov 29",
    "Nov 30",
    "Dec 1",
    "Dec 2",
    "Dec 3",
    "Dec 4",
    "Dec 5",
    "Dec 6",
    "Dec 7",
    "Dec 8",
    "Dec 9",
    "Dec 10",
    "Dec 11",
    "Dec 12",
    "Dec 13",
    "Dec 14",
  ];

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: hexToRGB(colors.danger, 0.5),
        borderColor: hexToRGB(colors.danger, 0.5),
        fill: false,
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      },
      {
        label: "My Second dataset",
        backgroundColor: hexToRGB(colors.primary, 0.5),
        borderColor: hexToRGB(colors.primary, 0.5),
        fill: false,
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      },
      {
        label: "Dataset with point data",
        backgroundColor: hexToRGB(colors.success, 0.5),
        borderColor: hexToRGB(colors.success, 0.5),
        fill: false,
        data: [
          {
            x: [100],
            y: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          },
          {
            x: [43],
            y: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          },
          {
            x: [16],
            y: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          },
          {
            x: [5],
            y: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          },
        ],
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
        text: "Chart.js Time Scale",
      },
    },

    scales: {
      y: {
        border: {
          display: false
        },
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
        title: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          display: true,
          text: "value",
        },
      },
      x: {
        grid: {
          drawTicks: false,
          display: false,
        },

        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
        time: {
          tooltipFormat: "DD T",
        },
        title: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          display: true,
          text: "Date",
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

export default TimeScaleChart;
