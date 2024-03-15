import { Forecastday, WeatherData } from "../../urlModel";
import FeelsLike from "./forecast-elements/FeelsLike";
import Humidity from "./forecast-elements/Humidity";
import UvIndex from "./forecast-elements/UvIndex";
import Visibility from "./forecast-elements/Visibility";
import WindStatus from "./forecast-elements/WindStatus";

export default function ForecastElements({weatherData}: {weatherData: WeatherData}){


    return(
        <div className="grid grid-cols-3 grid-rows-3 gap-3 mt-5">
            <WindStatus 
                windSpeed={weatherData.current.wind_kph} 
                windSpeedHours={weatherData.forecast.forecastday[0] as Forecastday} 
            />
            <UvIndex uvIndex={weatherData.current.uv} />
            <Humidity humidity={weatherData.current.humidity} />
            <Visibility visibility={weatherData.current.vis_km} />
            <FeelsLike 
                feelsLike={weatherData.current.feelslike_c} 
                temperature={weatherData.current.temp_c} 
            />
        </div>
    )
}