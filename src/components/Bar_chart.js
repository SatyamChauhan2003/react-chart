import React from "react";
import ReactECharts from "echarts-for-react";

const Bar_chart = () => {
  const options = {
    grid: { top: 78, right: 88, bottom: 24, left: 86 },
    xAxis: {
      type: "category",
      data: [
        "Bordeaux",
        "Chianti",
        "Rioja",
        "Syrah",
        "Primitivo",
        "Beaujolais",
        "Aging",
        "Varietals",
        "Aroma",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [14.23, 17.2, 13.16, 10.37, 13.24, 9.2, 14.39, 12.93, 13.71],
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default Bar_chart;
