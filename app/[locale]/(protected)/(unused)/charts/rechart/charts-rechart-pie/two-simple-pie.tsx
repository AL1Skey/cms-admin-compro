"use client"

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
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

const TwoSimplePie = ({ height = 300 }) => {

    const { theme: mode } = useTheme();

    return (
        <ResponsiveContainer width="100%" height={height}>
            <PieChart >
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill={colors.primary}
                    label
                />
                <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80}
                    fill={colors.info}
                />
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TwoSimplePie;