"use client"

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];
const StraightAngle = ({ height = 300 }) => {

    const { theme: mode } = useTheme();

    return (
        <ResponsiveContainer width="100%" height={height}>
            <PieChart >
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill={colors.primary}
                    label
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default StraightAngle;