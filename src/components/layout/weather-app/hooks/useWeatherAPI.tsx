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
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=4692545817db46f8805175804242802&q=${city}&days=5&aqi=no&alerts=no`)
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