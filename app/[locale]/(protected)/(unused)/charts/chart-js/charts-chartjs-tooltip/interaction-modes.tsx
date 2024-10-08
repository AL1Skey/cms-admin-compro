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
  PointElement,
  TooltipItem,
} from "chart.js";


import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { colors } from "@/lib/colors";
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

const InteractionModes = ({ height = 350 }) => {

  const { theme: mode } = useTheme();





  const data: any = {
    labels: ["January", "February", "March", "April", "May", "Jun", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 50, 60, 70, 20, 30, 20],
        borderColor: colors.warning,
        fill: false,
      },
      {
        label: "Dataset 2",
        data: [40, 70, 80, 90, 40, 50, 40],
        borderColor: colors.info,
        fill: false,
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

export default InteractionModes;
