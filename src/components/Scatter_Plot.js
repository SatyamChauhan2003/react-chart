import React from 'react';
import ReactECharts from 'echarts-for-react';


const Scatter_Plot = () => {
  const options = {
    grid: { top: 78, right: 88, bottom: 24, left: 86 },
    xAxis: {
      type: 'category',
      data: ['2.29', '1.28', '2.81', '2.18', '1.82', ' 1.97', '1.98','1.74','1.69','1.46','1.66'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [5.64, 4.38, 5.68, 7.8, 4.32, 6.75, 5.25,4.5,3.8, 3.93,3.52],
        type: 'scatter',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default Scatter_Plot;