"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { getGridConfig, getLabel } from "@/lib/appex-chart-options";
import moment from "moment";
const CustomColor = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();



  const series = [
    {
      data: [
        {
          x: "Analysis",
          y: [
            new Date("2019-02-27").getTime(),
            new Date("2019-03-04").getTime(),
          ],
          fillColor: "#008FFB",
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime(),
          ],
          fillColor: "#00E396",
        },
        {
          x: "Coding",
          y: [
            new Date("2019-03-07").getTime(),
            new Date("2019-03-10").getTime(),
          ],
          fillColor: "#775DD0",
        },
        {
          x: "Testing",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime(),
          ],
          fillColor: "#FEB019",
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-17").getTime(),
          ],
          fillColor: "#FF4560",
        },
      ],
    },
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
        var label = opts.w.globals.labels[opts.dataPointIndex];
        var a = moment(val[0]);
        var b = moment(val[1]);
        var diff = b.diff(a, "days");
        return label + ": " + diff + (diff > 1 ? " days" : " day");
      },
      style: {
        colors: ["#fff"],
      }
    },
    colors: [
      colors.primary,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    yaxis: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      labels: getLabel(mode === 'light' ? colors["default-600"] : colors["default-300"]),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  };
  return (
    <Chart
      options={options}
      series={series}
      type="rangeBar"
      height={height}
      width={"100%"}
    />
  );
};

export default CustomColor;
