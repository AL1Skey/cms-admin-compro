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
  Cell,
} from "recharts";
import CustomTooltip from "./custom-tooltip";
interface DataPoint {
  x: number;
  y: number;
  z: number;
}
const data: DataPoint[] = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const ScatterChartWithCells = ({ height = 300 }) => {

  const { theme: mode } = useTheme();


  const COLORS = [
    colors.primary,
    colors.info,
    colors.warning,
    colors.success,
  ];

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

        <Tooltip content={<CustomTooltip />} />
        <Scatter
          data={data}
          name="A school"
          fill={colors.primary}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartWithCells;
