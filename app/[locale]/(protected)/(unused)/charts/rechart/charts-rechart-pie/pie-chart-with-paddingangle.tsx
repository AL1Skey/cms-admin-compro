"use client"

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PieChartWithPaddingAngle = ({ height = 300 }) => {

    const { theme: mode } = useTheme();


    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = [
        colors.primary,
        colors.info,
        colors.warning,
        colors.success
    ];


    return (
        <ResponsiveContainer width="100%" height={height}>
            <PieChart height={height}>
                <Pie
                    data={data}
                    cx={120}
                    cy={150}
                    innerRadius={80}
                    outerRadius={120}
                    fill={colors.primary}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie
                    data={data}
                    cx={420}
                    cy={120}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={80}
                    outerRadius={100}
                    fill={colors.info}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartWithPaddingAngle;