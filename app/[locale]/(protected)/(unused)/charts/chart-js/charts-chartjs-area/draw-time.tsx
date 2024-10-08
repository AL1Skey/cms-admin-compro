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

const DrawTime = ({ height = 350 }) => {

  const { theme: mode } = useTheme();








  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 50, 60, 40, 60, 80, 90],
        borderColor: colors.primary,
        backgroundColor: hexToRGB(colors.primary, 0.4),
        fill: true,
      },
      {
        label: "Dataset 2",
        data: [30, 60, 70, 80, 90, 60, 60],
        borderColor: colors.warning,
        backgroundColor: hexToRGB(colors.warning, 0.4),
        fill: true,
      }
    ]
  };

  const options: any = {
    responsive: true,
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        labels: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      }
    },

    scales: {
      y: {
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
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default DrawTime;
