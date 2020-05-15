import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector} from 'react-redux';

export default function BarChart() {
    const covid = useSelector(state => state.covid);

    const info = {
        series: [{
          data: covid.case
        }, {
          data: covid.death
        }],
        options: {
          chart: {
            type: 'bar',
            height: 460
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: covid.state
          },
        },
    };
    
      return (
        <div id="chart">
            <ReactApexChart options={info.options} series={info.series} type="bar" height={460} />
        </div>
      );
    
  }