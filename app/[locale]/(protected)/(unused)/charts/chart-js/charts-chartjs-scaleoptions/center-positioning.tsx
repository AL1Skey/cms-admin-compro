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

import { Scatter } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const CenterPositioningScale = ({ height = 350 }) => {

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
        label: "Dataset 1",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
          {
            x: -20,
            y: 10,
          },
          {
            x: 40,
            y: 10,
          },
          {
            x: 20,
            y: 25,
          },
          {
            x: 2.5,
            y: 3.5,
          },
        ],
        backgroundColor: colors.primary,
      },
      {
        label: "Dataset 2",
        data: [
          {
            x: 10,
            y: 20,
          },
          {
            x: 10,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 2.5,
            y: 4.5,
          },
          {
            x: -10,
            y: 20,
          },
          {
            x: 40,
            y: 10,
          },
          {
            x: 20,
            y: 35,
          },
        ],
        backgroundColor: colors.warning,
      },
    ],
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

        grid: {
          drawTicks: false,
          display: false,
        },

        ticks: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
      },
    },
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
      <Scatter
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default CenterPositioningScale;
