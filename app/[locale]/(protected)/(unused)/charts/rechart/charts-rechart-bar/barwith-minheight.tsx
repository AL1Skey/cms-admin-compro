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
  LabelList,
} from "recharts";
import { data } from "./data";
import CustomTooltip from "./custom-tooltip";

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

const BarWithMinHeight = ({ height = 300 }) => {

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

        <Bar
          dataKey="pv"
          fill={colors.primary}
          minPointSize={5}
        >
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        <Bar
          dataKey="uv"
          fill={colors.info}
          minPointSize={10}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarWithMinHeight;
