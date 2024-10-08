"use client"

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import { ResponsiveContainer, PieChart, Pie } from 'recharts';


const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

const TwoLevelPie = ({ height = 300 }) => {

    const { theme: mode } = useTheme();

    return (
        <ResponsiveContainer width="100%" height={height}>
            <PieChart height={height} >
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60}
                    fill={colors.primary} />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90}
                    fill={colors.info}
                    label
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TwoLevelPie;