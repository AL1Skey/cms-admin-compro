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

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const MultiSeriesPieChart = ({ height = 350 }) => {

  const { theme: mode } = useTheme();













  const data: any = {
    labels: ["Primary", "Info", "Warning", "Success"],
    datasets: [
      {
        backgroundColor: [colors.primary, colors.info],
        data: [21, 79],
      },
      {
        backgroundColor: [colors.warning, colors.success],
        data: [33, 67],
      },
      {
        backgroundColor: [colors.primary, colors.warning],
        data: [20, 80],
      },
      {
        backgroundColor: [colors.success, colors.info],
        data: [10, 90],
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
      <Doughnut options={options} data={data} height={height} />
    </div>
  );
};

export default MultiSeriesPieChart;
