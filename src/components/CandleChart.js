import React from "react";
import ReactApexChart from "react-apexcharts";

export default function CandleChart(candle) {
    console.log("hihihihi",candle)
    const info = {
        series: [{
            data: candle.candle
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 230
            },
            title: {
                text: `CandleStick Chart(Forex EUR/${candle.name})`,
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                enabled: true,
                range: 1.085
                }
            }
        },
    
    
    };
        
      return (
        <div id="chart">
            <ReactApexChart options={info.options} series={info.series} type="candlestick" height={230} />
        </div>
      );
    
}
