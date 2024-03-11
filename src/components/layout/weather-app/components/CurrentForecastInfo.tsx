import { WeatherData } from "../urlModel";
import ForecastElements from "./components/ForecastElements";

export default function CurrentForecastInfo({weatherData}: {weatherData: WeatherData}){


    return(
        <div className="col-span-6 xl:col-span-4 m-2 p-4 bg-gradient-to-r from-slate-500/30 to-gray-500/10 rounded text-slate-100">
            <div className="w-full m-2">
                <h2>Today's Highlight</h2>
            </div>
            <ForecastElements weatherData={weatherData} />
        </div>
    )
}