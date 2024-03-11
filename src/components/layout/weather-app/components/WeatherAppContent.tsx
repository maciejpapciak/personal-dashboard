import { RiCelsiusLine } from "react-icons/ri";
import { RiFahrenheitLine } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import React from "react";

export type Temperature = {
    typeOfTemp: "CELCIUS" | "FAHRENHEIT",
}

export default function WeatherAppContent(
    {icon, weatherStatus, temperature}: {icon:string, weatherStatus: string, temperature: number})
{

    const [temp, setTemp] = React.useState<Temperature>({
        typeOfTemp: "CELCIUS",
    })

    function toggleTemperature(){
        setTemp(prevTemp => {
            return{
                typeOfTemp: prevTemp.typeOfTemp === "CELCIUS" ? "FAHRENHEIT" : "CELCIUS",
            }
        })
    }

    const displayedTemperature = temp.typeOfTemp === "CELCIUS" ? temperature : Math.round(9/5*temperature+32)

    return(
        <div className="flex flex-col text-center justify-center my-5 h-full">
            <div className="flex justify-center">
                <img src={`https:${icon}`} alt={weatherStatus}></img>
                <h5 className="uppercase text-md mt-5">{weatherStatus}</h5>
            </div>
            <div className="flex justify-center text-7xl text-zinc-100 pb-4">{displayedTemperature}{temp.typeOfTemp === "CELCIUS" ? <RiCelsiusLine /> : <RiFahrenheitLine />}</div>

            <div className="py-5" onClick={toggleTemperature}>
                <Button className="w-24 text-xl bg-zinc-200 hover:bg-white text-black drop-shadow-2xl">{temp.typeOfTemp === "CELCIUS" ? <RiFahrenheitLine /> : <RiCelsiusLine />}</Button>
            </div>
        </div>
    )
}