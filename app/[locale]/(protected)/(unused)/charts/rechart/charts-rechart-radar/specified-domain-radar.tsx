"use client";
import React from "react";

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const ReSpecifiedDomainRadarChart = ({ height = 300 }) => {

  const { theme: mode } = useTheme();


  const data = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  return (
    <ResponsiveContainer height={height}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke={colors.primary}
          dot={true}
          strokeWidth={2}
          fill={colors.primary}
          style={{
            opacity: 0.2,
            "--theme-primary": colors.primary,
          } as React.CSSProperties}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke={colors.success}
          dot={true}
          strokeWidth={2}
          fill={colors.success}
          style={{
            opacity: 0.4,

          } as React.CSSProperties}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ReSpecifiedDomainRadarChart;
