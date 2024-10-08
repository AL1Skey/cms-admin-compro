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

const InterpolationModes = ({ height = 350 }) => {

  const { theme: mode } = useTheme();











  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "Cubic interpolation (monotone)",
        data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
        borderColor: hexToRGB(colors.danger, 0.5),
        tension: 0.4,
      },
      {
        label: "Cubic interpolation",
        data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
        borderColor: hexToRGB(colors.primary, 0.5),
        tension: 0.4,
      },
      {
        label: "Linear interpolation (default)",
        data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
        borderColor: hexToRGB(colors.success, 0.5),
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
          display: false
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
      <Line
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default InterpolationModes;
