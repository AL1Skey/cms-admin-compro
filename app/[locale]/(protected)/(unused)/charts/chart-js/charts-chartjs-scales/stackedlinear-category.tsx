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

const StackedLinearCategory = ({ height = 350 }) => {

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
        data: [10, 30, 39, 20, 25, 34, -10],
        borderColor: hexToRGB(colors.danger, 0.5),
        backgroundColor: hexToRGB(colors.danger, 0.5),
      },
      {
        label: "Dataset 2",
        data: ["ON", "ON", "OFF", "ON", "OFF", "OFF", "ON"],
        borderColor: hexToRGB(colors.primary, 0.5),
        backgroundColor: hexToRGB(colors.primary, 0.5),
        stepped: true,
        yAxisID: "y2",
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
        text: "Stacked scales",
      }
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
        stackWeight: 2,
        type: "linear",
        position: "left",
        stack: "demo",

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
      y2: {
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
        stackWeight: 1,
        type: "category",
        labels: ["ON", "OFF"],
        offset: true,
        position: "left",
        stack: "demo",
        border: {
          color: hexToRGB(colors.primary, 0.5),
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default StackedLinearCategory;
