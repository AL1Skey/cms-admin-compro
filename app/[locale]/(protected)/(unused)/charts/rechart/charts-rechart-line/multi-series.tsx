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

const MultiSeriesChart = ({ height = 300 }) => {

  const { theme: mode } = useTheme();


  const series = [
    {
      name: "Series 1",
      data: [
        { category: "A", value: Math.random() },
        { category: "B", value: Math.random() },
        { category: "C", value: Math.random() },
      ],
    },
    {
      name: "Series 2",
      data: [
        { category: "B", value: Math.random() },
        { category: "C", value: Math.random() },
        { category: "D", value: Math.random() },
      ],
    },
    {
      name: "Series 3",
      data: [
        { category: "C", value: Math.random() },
        { category: "D", value: Math.random() },
        { category: "E", value: Math.random() },
      ],
    },
  ];

  return (
    <ResponsiveContainer height={height}>
      <LineChart height={height}>
        <CartesianGrid
          stroke='none'
          strokeDasharray="1 1"
          vertical={false}
        />

        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
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
          dataKey="value"
        />
        <Tooltip />

        {series.map((s) => (
          <Line
            dataKey="value"
            data={s.data}
            name={s.name}
            key={s.name}
            dot={{
              stroke: colors.primary,
              strokeWidth: 2,
            }}
            stroke={colors.primary}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiSeriesChart;
