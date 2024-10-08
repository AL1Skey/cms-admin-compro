"use client"

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import { ResponsiveContainer, BarChart, Bar } from 'recharts';
import { data } from "./data";

const TinyBar = ({ height = 300 }) => {

    const { theme: mode } = useTheme();

    return (
        <ResponsiveContainer height={height}>
            <BarChart height={height} data={data} >
                <Bar
                    dataKey="uv"
                    fill={colors.primary}
                />

            </BarChart>
        </ResponsiveContainer>
    );
};

export default TinyBar;