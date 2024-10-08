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


import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { colors } from "@/lib/colors";
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

const GridConfigure = ({ height = 350 }) => {

  const { theme: mode } = useTheme();











  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [35, 59, 80, 81, 56, 55, 40],
        borderColor: hexToRGB(colors.primary, 0.5),
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [24, 42, 40, 19, 86, 27, 90],
        borderColor: hexToRGB(colors.warning, 0.5),
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
      },
    },

    scales: {
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false
        },
        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
      },
      x: {
        border: {
          display: true,
        },
        grid: {
          display: false,
          drawOnChartArea: true,
          drawTicks: true,
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

export default GridConfigure;
