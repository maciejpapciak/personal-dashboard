import current from "../utils/weatherHelpers";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react";

export default function WeatherAppHeader({cityName, changeCity}: {cityName:string, changeCity: (inputValue: string) => void}){

    const [inputValue, setInputValue] = React.useState("")

    function handleChangeCity(){
        if(inputValue !== ""){
            changeCity(inputValue)
            setInputValue("")
        }
    }

    function handleCityInput(e: { target: { value: React.SetStateAction<string>; }; }){
        setInputValue(e.target.value)
    }

    return(
        <div className="flex flex-col border-b py-5">
            <div className="flex w-full justify-center space-x-2 py-4">
                <Input 
                    type="email" 
                    placeholder="Enter city" 
                    className="placeholder: text-slate-200"
                    name="inputValue"
                    onChange={handleCityInput}
                    value={inputValue}
                />
                <Button onClick={handleChangeCity} className="bg-transparent outline outline-1 hover:bg-transparent/20">Search</Button>
            </div>

            <h1 className="text-center font-bold uppercase text-3xl my-2">{cityName}</h1>
            <h1 className="text-center text-zinc-100">{current}</h1>
        </div>
        
    )
}