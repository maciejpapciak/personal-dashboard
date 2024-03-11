import React from "react"
import { WeatherData } from "../urlModel"

const useWeatherAPI = () => {

    const [weatherData, setWeatherData] = React.useState<WeatherData>()
    const [loading, setLoading] = React.useState(true)
    const [city, setCity] = React.useState("Rzeszów")

    function changeCity(inputValue: string){
        setCity(inputValue)
    }



    React.useEffect(() => {
        setLoading(true)
        fetch(`https://api.weatherapi.com/v1/current.json?key=1ef8bfe100dc4719900182816242102&q=${city}`)
        .then(response => {
            if (!response.ok) {
                alert(`Cannot find city: ${city}`)

                throw new Error("Cannot load data");
            }
            return response.json()
        })
        .then((data) => {
            setWeatherData(data  as WeatherData)
            setLoading(false)
        })
        .catch((error) => {
            console.log("Error", error)
            setLoading(false)
        })
    }, [city])



    return {weatherData, changeCity, loading}
    
}

export default useWeatherAPI