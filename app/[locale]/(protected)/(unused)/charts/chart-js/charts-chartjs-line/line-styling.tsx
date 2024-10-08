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
  Filler,
} from "chart.js";
import { colors } from "@/lib/colors";

import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";

import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler
);

const LineStyling = ({ height = 350 }) => {

  const { theme: mode } = useTheme();











  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "Unfilled",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(colors.success, 0.5),
        tension: 0.4,
        fill: false,
      },
      {
        label: "Dashed",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(colors.info, 0.5),
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: "Filled",
        data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        borderColor: hexToRGB(colors.danger, 0.5),
        backgroundColor: hexToRGB(colors.danger, 0.5),
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
        }
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
          color: mode === 'light' ? colors["default-600"] : colors["default-300"]
        },

        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"]
        }
      }
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

export default LineStyling;
