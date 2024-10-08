"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

const MultipleSeriesTreeMap = ({ height = 300 }) => {

    const [config] = useConfig();
    const { theme: mode } = useTheme();


    const series = [
        {
            name: 'Desktops',
            data: [
                {
                    x: 'ABC',
                    y: 10
                },
                {
                    x: 'DEF',
                    y: 60
                },
                {
                    x: 'XYZ',
                    y: 41
                }
            ]
        },
        {
            name: 'Mobile',
            data: [
                {
                    x: 'ABCD',
                    y: 10
                },
                {
                    x: 'DEFG',
                    y: 20
                },
                {
                    x: 'WXYZ',
                    y: 51
                },
                {
                    x: 'PQR',
                    y: 30
                },
                {
                    x: 'MNO',
                    y: 20
                },
                {
                    x: 'CDE',
                    y: 30
                }
            ]
        }
    ];
    const options: any = {
        chart: {
            type: 'treemap',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true,
        },
        colors: ["#62f78c"],
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        legend: {
            show: false
        }
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

export default MultipleSeriesTreeMap;
