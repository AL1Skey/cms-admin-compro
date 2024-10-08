"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
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
  ArcElement,
  PointElement
);

const LegendHTML = ({ height = 350 }) => {

  const { theme: mode } = useTheme();






  const data: any = {
    labels: ["January", "February", "March", "April", "May", "Jun", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 50, 60, 70, 20, 30, 20],
        borderColor: colors.primary,
        fill: false,
      },
      {
        label: "Dataset 1",
        data: [30, 60, 70, 90, 50, 40, 30],
        borderColor: colors.info,
        fill: false,
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
      <Line
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default LegendHTML;
