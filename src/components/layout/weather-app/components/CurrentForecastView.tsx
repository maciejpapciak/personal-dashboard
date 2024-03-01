import WeatherAppHeader from "./components/WeatherAppHeader"
import WeatherAppContent from "./components/WeatherAppContent"

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WeatherData } from "../urlModel"

export default function CurrentForecastView({weatherData, changeCity, loading}: {weatherData: WeatherData, changeCity: (inputValue: string) => void, loading: boolean}){


    return(
        <div className="col-span-2 m-2 p-8 bg-gradient-to-r from-slate-500/30 from-10% to-gray-500/10 to-90% rounded">
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