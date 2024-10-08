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
} from "recharts";
import CustomTooltip from "./custom-tooltip";
interface DataPoint {
  x: number;
  y: number;
  z: number;
}
const data01: DataPoint[] = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const data02: DataPoint[] = [
  { x: 300, y: 300, z: 200 },
  { x: 400, y: 500, z: 260 },
  { x: 200, y: 700, z: 400 },
  { x: 340, y: 350, z: 280 },
  { x: 560, y: 500, z: 500 },
  { x: 230, y: 780, z: 200 },
  { x: 500, y: 400, z: 200 },
  { x: 300, y: 500, z: 260 },
  { x: 240, y: 300, z: 400 },
  { x: 320, y: 550, z: 280 },
  { x: 500, y: 400, z: 500 },
  { x: 420, y: 280, z: 200 },
];

const MultipleYAxesChart = ({ height = 300 }) => {

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
          yAxisId="left"
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
          yAxisId="right"
          orientation="right"
        />
        <Tooltip content={<CustomTooltip />} />
        <Scatter
          yAxisId="left"
          name="A school"
          data={data01}
          fill={colors.primary}
        />
        <Scatter
          yAxisId="right"
          name="A school"
          data={data02}
          fill={colors.primary}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default MultipleYAxesChart;
