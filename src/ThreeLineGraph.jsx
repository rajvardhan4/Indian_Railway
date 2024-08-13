import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const ThreeLineGraph = () => {
  useEffect(() => {
    const ctx = document.getElementById("threeLineGraph").getContext("2d");
    
    // Destroy any existing chart instance before creating a new one
    if (ctx.chart) {
      ctx.chart.destroy();
    }

    // Create a new chart instance
    ctx.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Line 1",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "blue",
            fill: false,
          },
          {
            label: "Line 2",
            data: [10, 15, 20, 25, 30, 35],
            borderColor: "green",
            fill: false,
          },
          {
            label: "Line 3",
            data: [5, 10, 15, 20, 25, 30],
            borderColor: "red",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.raw}`;
              },
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Cleanup chart instance on component unmount
      if (ctx.chart) {
        ctx.chart.destroy();
      }
    };
  }, []);

  return (
    <div className="graph-container">
      <canvas id="threeLineGraph"></canvas>
    </div>
  );
};

export default ThreeLineGraph;
