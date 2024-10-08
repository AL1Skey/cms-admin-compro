"use client";


import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComposedChartWithAxisLabels = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload) {
      return (
        <div className="bg-slate-900 text-primary-foreground p-3 rounded-md space-x-2 rtl:space-x-reverse ">
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
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
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
        <Legend
          formatter={(value, entry) => <span style={{ color: entry.color, marginRight: config.isRtl ? "5px" : "0px" }}>{value}</span>}
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke={colors.primary}
          dot={true}
          strokeWidth={2}
          style={{
            opacity: 0.7,

          } as React.CSSProperties}
        />
        <Bar
          dataKey="pv"
          barSize={20}
          fill={colors.primary}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="uv"
          stroke={colors.warning}
          dot={{
            stroke: colors.warning,
            strokeWidth: 2,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChartWithAxisLabels;
