"use client";

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

import CustomTooltip from "./custom-tooltip";
interface DataPoint {
  x: number;
  y: number;
}
const data01: DataPoint[] = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];
const data02: DataPoint[] = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

const JointLineScatter = ({ height = 400 }) => {

  const { theme: mode } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={height}>
      <ScatterChart height={height}>
        <CartesianGrid
          stroke='none'
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          type="number"
          dataKey="x"
          name="stature"
          unit="cm"
          tick={{
            fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "12px",
          }}
          tickLine={false}
          stroke='none'
          axisLine={false}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          tick={{
            fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "12px",
          }}
          tickLine={false}
          stroke='none'
        />
        <ZAxis type="number" range={[100]} />
        <Tooltip content={<CustomTooltip />} />

        <Scatter
          name="A school"
          data={data01}
          line
          shape="cross"
          fill={colors.info}
        />
        <Scatter
          name="B school"
          data={data02}
          line
          shape="diamond"
          fill={colors.success}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default JointLineScatter;
