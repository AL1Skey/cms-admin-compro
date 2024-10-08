"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";


import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { colors } from "@/lib/colors";
import { PolarArea } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

const PolarAreaCenteredPointLabel = ({ height = 350 }) => {

  const { theme: mode } = useTheme();













  const data: any = {
    labels: ["Primary", "Info", "Warning", "Success"],
    datasets: [
      {
        label: "My First Dataset",
        data: [11, 16, 7, 3, 14],
        backgroundColor: [colors.primary, colors.info, colors.info, colors.success],
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
      <PolarArea options={options} data={data} height={height} />
    </div>
  );
};

export default PolarAreaCenteredPointLabel;
