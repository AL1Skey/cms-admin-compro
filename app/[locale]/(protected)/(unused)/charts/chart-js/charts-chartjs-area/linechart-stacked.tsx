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

const LineChartStacked = ({ height = 350 }) => {

  const { theme: mode } = useTheme();












  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 50, 60, 40, 60, 80, 90],
        borderColor: colors.primary,
        backgroundColor: hexToRGB(colors.primary, 0.5),
        fill: true,
      },
      {
        label: "Dataset 2",
        data: [30, 60, 70, 80, 90, 60, 60],
        borderColor: colors.warning,
        backgroundColor: hexToRGB(colors.info, 0.5),
        fill: true,
      },
      {
        label: "Dataset 3",
        data: [110, 70, 40, 190, 20, 10, 100],
        borderColor: colors.warning,
        backgroundColor: hexToRGB(colors.warning, 0.5),
        fill: true,
      },
      {
        label: "Dataset 4",
        data: [130, 160, 170, 180, 190, 160, 160],
        borderColor: colors.success,
        backgroundColor: hexToRGB(colors.success, 0.5),
        fill: true,
      },
    ],
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
        stacked: true,
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
      <Line
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default LineChartStacked;
