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

const FloatingBar = ({ height = 350 }) => {

  const { theme: mode } = useTheme();









  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "data one",
        data: [
          [20, 50],
          [10, 80],
          [50, 100],
          [0, 60],
          [25, 50],
          [12, 50],
          [10, 70],
        ],
        fill: false,
        backgroundColor: hexToRGB(colors.info, 1),
        borderColor: hexToRGB(colors.info, 1),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
      },
      {
        label: "data two",
        data: [
          [25, 40],
          [20, 60],
          [60, 90],
          [0, 30],
          [15, 40],
          [20, 40],
          [30, 60],
        ],
        fill: false,
        backgroundColor: hexToRGB(colors.warning, 0.9),
        borderColor: hexToRGB(colors.warning, 0.9),

        borderWidth: 2,
        borderRadius: "0",
        borderSkipped: "bottom",
        barThickness: 25,
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
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
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
      },
    },

    maintainAspectRatio: false,
  };

  return (
    <div>
      <Bar
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default FloatingBar;
