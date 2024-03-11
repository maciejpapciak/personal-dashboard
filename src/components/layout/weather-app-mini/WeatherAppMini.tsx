import WeatherAppHeader from "./components/WeatherAppHeader"
import WeatherAppContent from "./components/WeatherAppContent"
import useWeatherAPI from "./hooks/useWeatherAPI"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function WeatherAppMini(){
    

    const {weatherData, changeCity, loading} = useWeatherAPI()

    if(!weatherData) return null

    return(
        <div className="mb-5 p-5 row-span-2 rounded break-inside-avoid bg-gradient-to-r from-slate-500/30 from-10% to-gray-500/10 to-90% text-slate-100">
            <WeatherAppHeader 
                cityName={weatherData.location.name}
                changeCity={changeCity}
            />

            {
                loading ? (
                    <div className="flex flex-col text-center justify-center my-5">
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