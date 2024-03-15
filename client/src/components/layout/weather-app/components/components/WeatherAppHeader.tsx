import current from "../../utils/weatherHelpers";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoLocationSharp } from "react-icons/io5";
import React from "react";

export default function WeatherAppHeader({cityName, changeCity}: {cityName:string, changeCity: (inputValue: string) => void}){

    const [inputValue, setInputValue] = React.useState("")


    function handleCityInput(e: { target: { value: React.SetStateAction<string>; }; }){
        setInputValue(e.target.value)
    }


    function handleChangeCity(){
        if(inputValue !== ""){
            changeCity(inputValue)
            setInputValue("")
        }
    }



    return(
        <div className="flex flex-col border-b py-5">
            <div className="flex w-full space-x-2 py-4">
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
            <div className="flex items-center">
                <h1 className="text-slate-100/50 text-3xl"><IoLocationSharp /></h1>
                <h1 className="text-slate-100 font-bold uppercase text-3xl m-2">{cityName}</h1>
                
            </div>
            
            <h1 className="text-zinc-100 ml-2">{current}</h1>
        </div>
        
    )
}