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
} from "recharts";
import CustomTooltip from "./custom-tooltip";
interface DataPoint {
  date: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataPoint[] = [
  {
    date: "2000-01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-03",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2000-06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: "2000-07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: "2000-08",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-09",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-10",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-11",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-12",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];


const monthTickFormatter = (tick: string): string => {
  const date = new Date(tick);
  return (date.getMonth() + 1).toString();
};
const CustomizedTick = (tickProps: any): JSX.Element | null => {
  const { x, y, payload } = tickProps;
  if (!x || !y || !payload) return null;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;

  if (month % 3 === 1) {
    return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};
const BarChartWithMultiAxis = ({ height = 300 }) => {
  const [config] = useConfig();
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
          dataKey="date"
          tick={{
            fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "12px",
          }}
          tickLine={false}
          stroke='none'
          axisLine={false}
          tickFormatter={monthTickFormatter}
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          interval={0}
          tick={<CustomizedTick />}
          height={1}
          scale="band"
          xAxisId="quarter"
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
        <Bar
          dataKey="pv"
          fill={colors.warning}
        />
        <Bar
          dataKey="uv"
          fill={colors.info}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWithMultiAxis;
