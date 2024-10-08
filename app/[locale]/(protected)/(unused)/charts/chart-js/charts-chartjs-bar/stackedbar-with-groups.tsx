"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { colors } from "@/lib/colors";

import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarWithGroups = ({ height = 350 }) => {

  const { theme: mode } = useTheme();











  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "data one",
        data: [50, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: hexToRGB(colors.primary, 0.8),
        borderColor: hexToRGB(colors.primary, 0.9),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
        stack: "Stack 0",
      },
      {
        label: "data two",
        data: [54, 42, 40, 19, 86, 27, 60],
        fill: false,
        backgroundColor: hexToRGB(colors.success, 1),
        borderColor: hexToRGB(colors.success, 0.8),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
        stack: "Stack 0",
      },
      {
        label: "data three",
        data: [20, 30, 40, 15, 70, 40, 50],
        fill: false,
        backgroundColor: hexToRGB(colors.info, 0.8),
        borderColor: hexToRGB(colors.info, 0.9),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
        stack: "Stack 1",
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
      },
    },

    scales: {
      y: {
        border: {
          display: false,
        },
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

export default StackedBarWithGroups;
