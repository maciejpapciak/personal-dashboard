import WeatherAppHeader from "./components/WeatherAppHeader"
import WeatherAppContent from "./components/WeatherAppContent"
import useWeatherAPI from "./hooks/useWeatherAPI"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function WeatherApp(){
    

    const {weatherData, changeCity, loading} = useWeatherAPI()

    if(!weatherData) return null

    return(
        <div className="border mb-5 p-5 rounded-md break-inside-avoid bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-[31.5rem]">
            <WeatherAppHeader 
                cityName={weatherData.location.name}
                changeCity={changeCity}
            />

            {
                loading ? (
                    <div className="flex flex-col text-center justify-center my-5 h-full">
                        <Button disabled className="bg-white text-black">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                    </div>
                ) : (
                    <WeatherAppContent 
                        icon={weatherData.current.condition.icon} 
                        weatherStatus={weatherData.current.condition.text} 
                        temperature={weatherData.current.temp_c}
                    />
                )
            }
        </div>
    )
}