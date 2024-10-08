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

const DoughnutChart = ({ height = 350 }) => {

  const { theme: mode } = useTheme();












  const data: any = {
    labels: ["Primary", "Info", "Warning", "Success"],
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 60, 30, 70, 80, 90, 100, 40],
        backgroundColor: [
          hexToRGB(colors.primary, 0.5),
          hexToRGB(colors.info, 0.5),
          hexToRGB(colors.warning, 0.5),
          hexToRGB(colors.success, 0.5),
        ],
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

export default DoughnutChart;
