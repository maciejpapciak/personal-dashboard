import ApexCharts from 'apexcharts'
import React from 'react';

export default function UvIndex({uvIndex}: {uvIndex: number}){

    var options = {
        chart: {
          height: 280,
          type: "radialBar",
        },
        series: [uvIndex*100/12],
        colors: ["#FFEB59"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: '#333',
              startAngle: -90,
              endAngle: 90,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                fontSize: "30px",
                show: false
              }
            }
          }
        },
        stroke: {
          lineCap: "round"
        }
      };
    
      React.useEffect(() => {
        const chart = new ApexCharts(document.querySelector('.uvChart'), options);
        chart.render();
    
        // Cleanup function to destroy the chart when the component is unmounted
        return () => {
          chart.destroy();
        };
      }, [options]);

    return(
        <div className="row-span-2 col-span-3 md:col-span-2 md:row-span-3 lg:col-span-1 lg:row-span-2 flex flex-col p-3 bg-neutral-900/50 rounded">
            <h1 className="text-slate-100/70">UV Index</h1>
            <div>
                <div className="uvChart">
                </div>
                <div className="flex items-end justify-center">
                    <h1 className="font-bold text-3xl">{uvIndex}</h1>
                    <h1 className="text-slate-100/50 text-sm">UV</h1>
                </div>
            </div>
        </div>
    )
}