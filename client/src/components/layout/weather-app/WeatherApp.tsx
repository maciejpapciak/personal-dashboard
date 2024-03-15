import CurrentForecastInfo from "./components/CurrentForecastInfo"
import CurrentForecastView from "./components/CurrentForecastView"
import ForecastDays from "./components/components/ForecastDays"
import ForecastMap from "./components/components/ForecastMap"
import useWeatherAPI from "./hooks/useWeatherAPI"


export default function WeatherApp(){

    const {weatherData, changeCity, loading} = useWeatherAPI()

    
    if(!weatherData) return null

    return(
        <div className="grid grid-cols-6 gap-3 p-5 bg-neutral-900">
            <CurrentForecastView weatherData={weatherData} changeCity={changeCity} loading={loading} />
            <CurrentForecastInfo weatherData={weatherData} />
            <ForecastDays weatherData={weatherData} />
            <ForecastMap lat={weatherData.location.lat} lon={weatherData.location.lon} />
        </div>
    )
}