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

const LinearScaleSuggestedMinMax = ({ height = 350 }) => {

  const { theme: mode } = useTheme();








  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 30, 39, 20, 25, 34, -10],
        borderColor: hexToRGB(colors.danger, 0.5),
        backgroundColor: hexToRGB(colors.danger, 0.5),
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [18, 33, 22, 19, 11, 39, 30],
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
        text: "Suggested Min and Max Settings",
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
        suggestedMin: 30,
        suggestedMax: 50,
      },
      x: {
        grid: {
          drawTicks: false,
          display: false,
        },

        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"]
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

export default LinearScaleSuggestedMinMax;
