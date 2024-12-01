import React from "react";
import Chart from "react-apexcharts";

function Barchart() {
  // Function to generate random water utilization data
  const generateRandomData = () => {
    return Array.from({ length: 7 }, () => [
      Math.floor(Math.random() * (200 - 100 + 1)) + 100, // Random value for Week 1
      Math.floor(Math.random() * (200 - 100 + 1)) + 100, // Random value for Week 2
      Math.floor(Math.random() * (200 - 100 + 1)) + 100, // Random value for Week 3
    ]);
  };

  // Generate random water data for all weekdays
  const waterData = generateRandomData();

  // Create series for each week
  const series = [
    { name: "Week 1", data: waterData.map((day) => day[0]) },
    { name: "Week 2", data: waterData.map((day) => day[1]) },
    { name: "Week 3", data: waterData.map((day) => day[2]) },
  ];

  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Chart
          type="bar"
          height="100%"
          width="100%"
          series={series}
          options={{
            colors: ["#28a745", "#34ce57", "#7ddc88"], // Different shades of green for weeks
            theme: { mode: "light" },
            xaxis: {
              categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // Weekdays
              labels: {
                style: { fontSize: "12px", colors: ["#4d4d4d"] },
              },
            },
            yaxis: {
              labels: {
                formatter: (val) => `${val}L`, // Display "L" for liters
                style: { fontSize: "12px", colors: ["#4d4d4d"] },
              },
              min: 100, // Minimum value
              max: 220, // Adjusted maximum for larger values
            },
            grid: {
              borderColor: "#e0e0e0",
              strokeDashArray: 4,
            },
            dataLabels: {
              enabled: false, // Disable data labels
            },
            legend: {
              show: true,
              position: "top",
              horizontalAlign: "center",
            },
            plotOptions: {
              bar: {
                columnWidth: "30%", // Compact grouped bars
                borderRadius: 5, // Rounded bar corners
                dataLabels: { position: "top" },
                grouped: true, // Group the bars by weekday
              },
            },
            tooltip: {
              enabled: true,
              theme: "light",
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Barchart;
