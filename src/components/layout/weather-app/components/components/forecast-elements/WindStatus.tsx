import ApexCharts from 'apexcharts'
import React from 'react';
import { Forecastday } from '../../../urlModel';

export default function WindStatus({windSpeed, windSpeedHours}: {windSpeed: number, windSpeedHours: Forecastday}){



    // CHART DATA

    const options = {
        chart: {
          type: 'area',
          height: 200,
          toolbar:{
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          borderColor: "#555",
          clipMarkers: false,
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        series: [{
          name: 'Wind speed [km/h]',
          data: windSpeedHours.hour.map(hourWind => hourWind.wind_kph)
          ,
        }],
        colors: ["#3EEEFF"],
        stroke: {
          width: 3,
          curve: "smooth"
        },
        xaxis: {
          categories: windSpeedHours.hour.map(hour => hour.time.slice(11,hour.time.length))
        }
    }
    
    React.useEffect(() => {
      const chart = new ApexCharts(document.querySelector('.windChart'), options);
      chart.render();
  
      // Cleanup function to destroy the chart when the component is unmounted
      return () => {
        chart.destroy();
      };
    }, [options]);


    // ACTUAL TIME

    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const timeMinute = minute < 10 ? `0${minute}` : minute
    const timeText = hour < 12 ? "A.M" : "P.M"

    const actualHour = `${hour}:${timeMinute} ${timeText}`

    return(
        <div className="row-span-2 col-span-2 flex flex-col p-3 bg-neutral-900/50 rounded">
            <h1 className="text-slate-100/70">Wind status</h1>
            <div>
                <div className="windChart text-black"></div>
                <div className="flex items-end justify-between">
                    <div className="flex items-end">
                        <h1 className="font-bold text-3xl">{windSpeed}</h1> 
                        <h1 className="text-slate-100/50 text-sm">km/h</h1> 
                    </div>
                    <h1 className="text-slate-100/50">{actualHour}</h1>
                </div>
                
            </div>
        </div>
    )
}