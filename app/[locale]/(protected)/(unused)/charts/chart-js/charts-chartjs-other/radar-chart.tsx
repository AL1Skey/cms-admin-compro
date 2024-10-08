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
} from "chart.js";

import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";

import { Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const RadarChart = ({ height = 350 }) => {

  const { theme: mode } = useTheme();







  const data: any = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        pointBackgroundColor: colors.primary,
        pointBorderColor: colors.primary,
        pointHoverBackgroundColor: colors.warning,
        pointHoverBorderColor: colors.primary,
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: colors.info,
        borderColor: colors.info,
        pointBackgroundColor: colors.info,
        pointBorderColor: colors.info,
        pointHoverBackgroundColor: colors.warning,
        pointHoverBorderColor: colors.warning,
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
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Radar
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default RadarChart;
