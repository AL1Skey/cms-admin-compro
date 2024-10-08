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

const LinearScaleStepSize = ({ height = 350 }) => {

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
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        borderColor: hexToRGB(colors.danger, 0.5),
        backgroundColor: hexToRGB(colors.danger, 0.5),
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        borderColor: hexToRGB(colors.primary, 0.5),
        backgroundColor: hexToRGB(colors.primary, 0.5),
        tension: 0.1,
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
        text: "Chart.js Line Chart",
      }
    },
    hover: {
      mode: "index",
      intersec: false,
    },
    scales: {
      y: {
        border: {
          display: false
        },
        title: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          display: true,
          text: "Value",
        },
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          stepSize: 50,
        },
        min: 0,
        max: 100,
      },
      x: {
        title: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
          display: true,
          text: "Month",
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

export default LinearScaleStepSize;
