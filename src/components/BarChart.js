import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector} from 'react-redux';

export default function BarChart() {
    const covid = useSelector(state => state.covid);

    const info = {
        series: [{
          name: "Case",
          data: covid.case,
        }, {
          name: "Death",
          data: covid.death,
        }],
        options: {
          chart: {
            type: 'bar',
            height: 500
          },
          title: {
              text: 'COVID-19 US',
              align: 'left'
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#FFF']
          },
          xaxis: {
            categories: covid.state
          },
        },
        
    };
    
      return (
        <div id="chart">
            <ReactApexChart options={info.options} series={info.series} type="bar" height={500} />
        </div>
      );
    
  }