"use client";

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./custom-tooltip";

const ConnectNulls = ({ height = 300 }) => {

  const { theme: mode } = useTheme();


  const data = [
    { name: "Page A", uv: 4000 },
    { name: "Page B", uv: 3000 },
    { name: "Page C", uv: 2000 },
    { name: "Page D" },
    { name: "Page E", uv: 1890 },
    { name: "Page F", uv: 2390 },
    { name: "Page G", uv: 3490 },
  ];

  return (
    <>
      <ResponsiveContainer height={height}>
        <LineChart height={height} data={data}>
          <CartesianGrid
            stroke='none'
            strokeDasharray="1 1"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
            axisLine={false}
          />
          <YAxis
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            dot={{
              stroke: colors.primary,
              strokeWidth: 2,
            }}
            stroke={colors.warning}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4"></div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart width={500} height={200} data={data}>
          <CartesianGrid
            stroke='none'
            strokeDasharray="1 1"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
            axisLine={false}
          />
          <YAxis
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
          />

          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="uv"
            dot={{
              stroke: colors.primary,
              strokeWidth: 2,
            }}
            stroke={colors.warning}
            fill={colors.warning}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ConnectNulls;
