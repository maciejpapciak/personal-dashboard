import WeatherAppHeader from "./components/WeatherAppHeader"
import WeatherAppContent from "./components/WeatherAppContent"
import useWeatherAPI from "./hooks/useWeatherAPI"


export default function WeatherApp(){
    

    const {weatherData} = useWeatherAPI()

    if(!weatherData) return null

    return(
        <div className="border mb-5 p-5 rounded-md break-inside-avoid bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <WeatherAppHeader 
                cityName={weatherData.location.name}
            />

            <WeatherAppContent 
                icon={weatherData.current.condition.icon} 
                weatherStatus={weatherData.current.condition.text} 
                temperature={weatherData.current.temp_c}
            />
        </div>
    )
}