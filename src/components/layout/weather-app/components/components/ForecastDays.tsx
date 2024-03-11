import { WeatherData } from "../../urlModel";
import ForecastDay from "./ForecastDay";

export default function ForecastDays({weatherData}: {weatherData: WeatherData}){

    const days = weatherData.forecast.forecastday.map(currentDay => 
        <ForecastDay 
            key={currentDay.date}
            image={currentDay.day.condition.icon}
            maxTemp={currentDay.day.maxtemp_c}
            minTemp={currentDay.day.mintemp_c}
            dayOfMonth={currentDay.date.slice(8, currentDay.date.length)}
            month={currentDay.date.slice(5, -3)}
        />)

    return(
        <div className="col-span-6 col-start-1 col-end-7 row-start-2 lg:col-span-3 lg:row-start-1 lg:col-start-4 xl:col-span-2 xl:row-start-2 m-2 p-4 bg-gradient-to-r from-slate-500/30 to-gray-500/10 rounded text-slate-100">
            <h1 className="text-xl font-bold p-2">5 days Forecast</h1>
            <div className="flex flex-col mt-10">
                {days}
            </div>
        </div>
    )
}