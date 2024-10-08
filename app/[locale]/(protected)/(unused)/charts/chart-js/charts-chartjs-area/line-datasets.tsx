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

const LineDatasets = ({ height = 350 }) => {

  const { theme: mode } = useTheme();













  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        fill: true,
        label: "D0",
        data: [80, 70, 60, 80, 60, 50, 61, 56, 35, 70],
        borderColor: hexToRGB(colors.primary, 1),
        backgroundColor: hexToRGB(colors.primary, 0.5),
      },
      {
        label: "D1",
        data: [10, 50, 40, 60, 70, 40, 81, 66, 45, 60],
        borderColor: hexToRGB(colors.info, 1),
        backgroundColor: hexToRGB(colors.info, 0.5),
        fill: "-1",
      },
      {
        label: "D2",
        data: [100, 90, 130, 90, 90, 90, 91, 96, 105, 100],
        borderColor: hexToRGB(colors.warning, 1),
        backgroundColor: hexToRGB(colors.warning, 0.5),
        fill: 1,
      },
      {
        label: "D3",
        data: [150, 180, 170, 189, 190, 140, 191, 186, 175, 190],
        borderColor: hexToRGB(colors.success, 1),
        backgroundColor: hexToRGB(colors.success, 0.5),
        fill: "-1",
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {
      filler: {
        propagate: true,
      },
      legend: {
        labels: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      y: {
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

export default LineDatasets;
