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
  Legend,
  ReferenceLine,
} from "recharts";
import CustomTooltip from "./custom-tooltip";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -2000,
    pv: -9800,
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
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const StackedBarWithSign = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart height={height} data={data} stackOffset="sign">
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
          tick={{
            fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "12px",
          }}
          tickLine={false}
          stroke='none'
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          formatter={(value, entry) => <span style={{ color: entry.color, marginRight: config.isRtl ? "5px" : "0px" }}>{value}</span>}
        />
        <ReferenceLine
          y={0}
          stroke='none'
        />
        <Bar
          dataKey="pv"
          stackId="stack"
          fill={colors.primary}
        />
        <Bar
          dataKey="uv"
          stackId="stack"
          fill={colors.success}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarWithSign;
