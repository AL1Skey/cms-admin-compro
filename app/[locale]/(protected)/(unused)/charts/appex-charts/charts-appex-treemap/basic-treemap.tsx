"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

const BasicTreeMap = ({ height = 300 }) => {

    const [config] = useConfig();
    const { theme: mode } = useTheme();


    const series = [
        {
            data: [
                {
                    x: 'New Delhi',
                    y: 218
                },
                {
                    x: 'Kolkata',
                    y: 149
                },
                {
                    x: 'Mumbai',
                    y: 184
                },
                {
                    x: 'Ahmedabad',
                    y: 55
                },
                {
                    x: 'Bangaluru',
                    y: 84
                },
                {
                    x: 'Pune',
                    y: 31
                },
                {
                    x: 'Chennai',
                    y: 70
                },
                {
                    x: 'Jaipur',
                    y: 30
                },
                {
                    x: 'Surat',
                    y: 44
                },
                {
                    x: 'Hyderabad',
                    y: 68
                },
                {
                    x: 'Lucknow',
                    y: 28
                },
                {
                    x: 'Indore',
                    y: 19
                },
                {
                    x: 'Kanpur',
                    y: 29
                }
            ]
        }
    ];
    const options: any = {
        chart: {
            type: 'treemap',
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: true,
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    };
    return (
        <Chart
            options={options}
            series={series}
            type="treemap"
            height={height}
            width={"100%"}
        />
    );
};

export default BasicTreeMap;
