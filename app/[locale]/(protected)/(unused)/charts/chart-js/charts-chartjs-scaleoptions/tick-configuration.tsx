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

const TickConfiguration = ({ height = 350 }) => {

  const { theme: mode } = useTheme();





  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [35, 59, 80, 81, 56, 55, 40],
        borderColor: hexToRGB(colors.primary, 1),
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [24, 42, 40, 19, 86, 27, 90],
        borderColor: hexToRGB(colors.warning),
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
        }
      }
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
          callback: function (val: number, index: number) {
            return index % 2 === 0 ? this.getLabelForValue(val) : "";
          },
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        } as any,
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

export default TickConfiguration;
