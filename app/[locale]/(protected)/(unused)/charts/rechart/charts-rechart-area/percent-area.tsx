"use client";

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const PercentReAreaChart = ({ height = 300 }) => {

  const { theme: mode } = useTheme();


  const data = [
    {
      month: "2015.01",
      a: 4000,
      b: 2400,
      c: 2400,
    },
    {
      month: "2015.02",
      a: 3000,
      b: 1398,
      c: 2210,
    },
    {
      month: "2015.03",
      a: 2000,
      b: 9800,
      c: 2290,
    },
    {
      month: "2015.04",
      a: 2780,
      b: 3908,
      c: 2000,
    },
    {
      month: "2015.05",
      a: 1890,
      b: 4800,
      c: 2181,
    },
    {
      month: "2015.06",
      a: 2390,
      b: 3800,
      c: 2500,
    },
    {
      month: "2015.07",
      a: 3490,
      b: 4300,
      c: 2100,
    },
  ];

  const toPercent = (decimal: number, fixed = 0) =>
    `${(decimal * 100).toFixed(fixed)}%`;

  const getPercent = (value: number, total: number) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
  };



  return (
    <ResponsiveContainer height={height}>
      <AreaChart width={600} height={300} data={data} stackOffset="expand">
        <CartesianGrid
          stroke='none'
          strokeDasharray="1 1"
          vertical={false}
        />
        <XAxis
          dataKey="month"
          tick={{ fill: mode === 'light' ? colors["default-600"] : colors["default-300"], fontSize: 12 }}
          tickLine={false}
          stroke='none'
          axisLine={false}
        />
        <YAxis
          tickFormatter={toPercent}
          tick={{ fill: mode === 'light' ? colors["default-600"] : colors["default-300"], fontSize: 12 }}
          tickLine={false}
          stroke='none'
          axisLine={false}
        />

        <Area
          type="monotone"
          dataKey="a"
          stackId="1"
          stroke={colors.warning}
          dot={true}
          strokeWidth={2}
          fill={colors.warning}
          style={{
            opacity: 0.5,

          } as React.CSSProperties}
        />
        <Area
          type="monotone"
          dataKey="b"
          stackId="1"
          stroke={colors.success}
          dot={true}
          strokeWidth={2}
          fill={colors.success}
          style={{
            opacity: 0.5,

          } as React.CSSProperties}
        />
        <Area
          type="monotone"
          dataKey="c"
          stroke={colors.primary}
          dot={true}
          strokeWidth={2}
          fill={colors.primary}
          style={{
            opacity: 0.5,


          } as React.CSSProperties}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PercentReAreaChart;
