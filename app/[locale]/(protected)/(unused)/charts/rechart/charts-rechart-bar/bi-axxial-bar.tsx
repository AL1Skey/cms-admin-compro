"use client";

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
} from "recharts";
import { data } from "./data";
import CustomTooltip from "./custom-tooltip";

const BiAxialBar = ({ height = 300 }) => {

  const { theme: mode } = useTheme();


  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart height={height} data={data}>
        <CartesianGrid
          stroke='none'
          strokeDasharray="3 3"
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
          yAxisId="left"
          orientation="left"
          tick={{
            fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "12px",
          }}
          tickLine={false}
          stroke='none'
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{
            fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "12px",
          }}
          tickLine={false}
          stroke='none'
        />

        <Tooltip content={<CustomTooltip />} />
        <Bar
          yAxisId="left"
          dataKey="pv"
          fill={colors.primary}
        />
        <Bar
          yAxisId="right"
          dataKey="uv"
          fill={colors.success}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BiAxialBar;
