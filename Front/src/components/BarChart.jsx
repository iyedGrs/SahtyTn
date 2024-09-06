/* eslint-disable no-unused-vars */
import { useState } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
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
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    tooltip: {
      enabled: true,
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Sales",
      data: [100, 200, 150, 300, 400, 350, 200, 280, 500],
    },
  ]);

  return (
    <div className="col-span-2 lg:col-span-1 bg-white rounded">
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default BarChart;
