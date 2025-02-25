import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function TypeDistribution({ results }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!results?.length) return;

    const mbtiCounts = results.reduce((acc, result) => {
      acc[result.mbti] = (acc[result.mbti] || 0) + 1;
      return acc;
    }, {});

    const mbtiTypes = [
      "ISTJ",
      "ISFJ",
      "INFJ",
      "INTJ",
      "ISTP",
      "ISFP",
      "INFP",
      "INTP",
      "ESTP",
      "ESFP",
      "ENFP",
      "ENTP",
      "ESTJ",
      "ESFJ",
      "ENFJ",
      "ENTJ",
    ];

    const data = mbtiTypes.map((type) => mbtiCounts[type] || 0);
    const total = data.reduce((a, b) => a + b, 0);
    const percentages = data.map((count) => ((count / total) * 100).toFixed(1));

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: mbtiTypes,
        datasets: [
          {
            data: percentages,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#FF9F40",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#FF9F40",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#FF9F40",
              "#FF6384",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.label}: ${context.raw}%`;
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [results]);

  return (
    <div className="relative aspect-square">
      <canvas ref={chartRef} />
    </div>
  );
}
