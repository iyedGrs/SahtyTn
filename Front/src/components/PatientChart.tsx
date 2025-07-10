/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartSeries {
  name: string;
  data: number[];
}

const PatientChart: React.FC = () => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      enabled: true,
    },
  });

  const [series, setSeries] = useState<ChartSeries[]>([
    {
      name: "Sales",
      data: [100, 200, 150, 300, 400, 350, 200, 280, 500],
    },
  ]);

  return (
    <div className="chart-container bg-white col-span-2 lg:col-span-1  rounded">
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default PatientChart;
