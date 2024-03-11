import React from "react";
import { WeatherData } from "../urlModel";

const useWeatherAPI = () => {
    
    const [weatherData, setWeatherData] = React.useState<WeatherData>()

    React.useEffect(() => {
        fetch("https://api.weatherapi.com/v1/current.json?key=1ef8bfe100dc4719900182816242102&q=Rzesz%C3%B3w")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            setWeatherData(data  as WeatherData)
        })
        .catch((error) => {
            console.log("Error", error)
        })
    }, [])



    return {weatherData}
    
}

export default useWeatherAPI