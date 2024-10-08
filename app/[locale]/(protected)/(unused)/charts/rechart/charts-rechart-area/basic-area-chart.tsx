"use client";

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const BasicAreaChart = ({ height = 300 }) => {

  const { theme: mode } = useTheme();


  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload) {
      return (
        <div className="bg-slate-900 text-primary-foreground p-3 rounded-md gap-2 ">
          <span>{`${payload[0].name}`}</span>
          <span>:</span>
          <span>{`${payload[0].value}%`}</span>
        </div>
      );
    }
    return null;
  };
  return (
    <ResponsiveContainer height={height}>
      <AreaChart width={600} height={300} data={data}>
        <CartesianGrid
          stroke='none'
          strokeDasharray="1 1"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tick={{ fill: mode === 'light' ? colors["default-600"] : colors["default-300"], fontSize: 12 }}
          tickLine={false}
          stroke='none'
          axisLine={false}
        />
        <YAxis
          tick={{ fill: mode === 'light' ? colors["default-600"] : colors["default-300"], fontSize: 12 }}
          tickLine={false}
          stroke='none'
          axisLine={false}
        />
        <Tooltip content={CustomTooltip} />

        <Area
          type="monotone"
          dataKey="uv"
          stroke={colors.primary}
          dot={true}
          strokeWidth={2}
          style={{
            opacity: 0.5,

          } as React.CSSProperties}

        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BasicAreaChart;
