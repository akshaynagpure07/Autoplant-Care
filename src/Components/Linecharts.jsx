import React, { useState } from "react";
import Chart from "react-apexcharts";

function Linechart() {
  // Simulated seasonal water utilization data for each month
  const [waterUtilization] = useState([
    {
      name: "Overall Water Utilization",
      data: [
        120, // Jan - Winter, moderate water usage
        130, // Feb - Winter, moderate water usage
        150, // Mar - Summer, high water usage
        180, // Apr - Summer, high water usage
        190, // May - Summer, high water usage
        200, // Jun - Summer, high water usage
        170, // Jul - Monsoon, moderate water usage
        160, // Aug - Monsoon, moderate water usage
        140, // Sep - Monsoon, moderate water usage
        130, // Oct - Winter, moderate water usage
        125, // Nov - Winter, moderate water usage
        120, // Dec - Winter, moderate water usage
      ],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ], // Month names
      labels: {
        style: { fontSize: "10px" },
      },
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "Water Utilized (1Km)",
      },
      labels: {
        style: { fontSize: "10px" },
      },
    },
    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
    },
    colors: ["#1f77b4"], // Single color for the overall utilization line
  });

  return (
    <div className="w-full h-full">
      <Chart
        type="line"
        series={waterUtilization}
        options={options}
        height="100%"
        width="100%"
      />
    </div>
  );
}

export default Linechart;
