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
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

const ThreeDimScatter = ({ height = 300 }) => {

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
        <ZAxis
          type="number"
          dataKey="z"
          range={[60, 400]}
          name="score"
          unit="km"
        />
        <Tooltip content={<CustomTooltip />} />
        <Scatter
          name="A school"
          data={data01}
          shape="star"
          fill={colors.info}
        />
        <Scatter
          name="B school"
          data={data02}
          fill={colors.success}
          shape="triangle"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ThreeDimScatter;
