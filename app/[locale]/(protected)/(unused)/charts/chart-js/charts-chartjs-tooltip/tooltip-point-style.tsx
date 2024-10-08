"use client";
import React from "react";
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
  TooltipItem,
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
  ArcElement,
  PointElement
);

const customTooltip = (tooltipItems: TooltipItem<'line'>[]) => {
  let sum = 0;

  tooltipItems.forEach(function (tooltipItem) {
    sum += tooltipItem.parsed.y;
  });
  return "Sum: " + sum;
};

const TooltipPointStyle = ({ height = 350 }) => {

  const { theme: mode } = useTheme();




  const data: any = {
    labels: ["January", "February", "March", "April", "May", "Jun", "July"],
    datasets: [
      {
        label: "Traingle",
        data: [20, 50, 60, 70, 20, 30, 20],
        borderColor: colors.warning,
        fill: false,
        pointStyle: "triangle",
        pointRadius: 6,
      },
      {
        label: "Circle",
        data: [40, 70, 80, 90, 40, 50, 40],
        borderColor: colors.info,
        fill: false,
        pointStyle: "circle",
        pointRadius: 6,
      },
      {
        label: "Star",
        data: [30, 60, 70, 80, 30, 40, 30],
        borderColor: colors.primary,
        fill: false,
        pointStyle: "star",
        pointRadius: 6,
      },
    ],
  };
  const options: any = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: mode === 'light' ? colors["default-600"] : colors["default-300"],
        },
      },
      tooltip: {
        callbacks: {
          footer: customTooltip,
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        border: {
          display: false
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
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default TooltipPointStyle;
