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

interface Context {
  p0: {
    skip: boolean;
    parsed: { y: number };
  };
  p1: {
    skip: boolean;
    parsed: { y: number };
  };
}

const LineSegmentStyling = ({ height = 350 }) => {

  const { theme: mode } = useTheme();




  const skipped = (ctx: Context, value: string | number): string | number | undefined =>
    ctx.p0.skip || ctx.p1.skip ? value : undefined;

  const down = (ctx: Context, value: string | number): string | number | undefined =>
    ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;










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
        label: "My First Dataset",
        data: [65, 59, NaN, 48, 56, 57, 40],
        borderColor: hexToRGB(colors.info, 0.5),
        segment: {
          borderColor: (ctx: Context) =>
            skipped(ctx, colors.primary) || down(ctx, colors.danger),
          borderDash: (ctx: Context): number[] | undefined => skipped(ctx, [6, 6] as any) as number[] | undefined
        },
        spanGaps: true
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
      <Line
        options={options}
        data={data}
        height={height}
      />
    </div>
  );
};

export default LineSegmentStyling;
