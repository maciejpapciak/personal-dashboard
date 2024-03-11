import { FaTemperatureEmpty } from "react-icons/fa6";
import { TbTemperatureCelsius } from "react-icons/tb";

export default function FeelsLike({feelsLike, temperature}: {feelsLike: number, temperature: number}){
    return(
        <div className="flex flex-col p-3 bg-neutral-900/50 rounded">
            <h1 className="text-sm text-slate-100/70">Feels Like</h1>
            <div className="flex justify-between mt-5">
                <div className="flex items-end">
                    <h1 className="text-3xl mr-2"><FaTemperatureEmpty /></h1>
                    <h1 className="font-bold text-3xl">{feelsLike}</h1>
                    <h1 className="text-slate-100/50 "><TbTemperatureCelsius /></h1> 
                </div>
                <div className="flex items-end">
                    <h1 className="text-sm text-slate-100/50">{feelsLike >= temperature ? "Feels hotter" : "Feels colder"}</h1>
                </div>
            </div>
        </div>
    )
}