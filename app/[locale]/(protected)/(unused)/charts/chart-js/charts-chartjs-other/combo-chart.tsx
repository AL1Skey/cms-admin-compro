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
  BarElement,
} from "chart.js";
import { colors } from "@/lib/colors";

import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement
);

const ComboChart = ({ height = 350 }) => {

  const { theme: mode } = useTheme();








  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 60, 30, 70, 80, 90, 100, 40],
        backgroundColor: hexToRGB(colors.info, 0.5),
        borderColor: hexToRGB(colors.info, 1),
        order: 1,
      },
      {
        label: "Dataset 2",
        data: [70, 90, 50, 100, 80, 40, 100, 40],
        backgroundColor: hexToRGB(colors.warning, 0.5),
        borderColor: hexToRGB(colors.warning, 1),
        type: "line",
        order: 0,
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
      <Bar options={options} data={data} height={height} />
    </div>
  );
};

export default ComboChart;
