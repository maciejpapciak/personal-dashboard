import { IoIosWater } from "react-icons/io";

export default function Humidity({humidity}: {humidity: number}){
    return(
        <div className="flex flex-col p-3 bg-neutral-900/50 rounded">
            <h1 className="text-sm text-slate-100/70">Humidity</h1>
            <div className="flex mt-5">
                <div className="flex items-end">
                    <h1 className="text-3xl mr-2"><IoIosWater /></h1>
                    <h1 className="font-bold text-3xl">{humidity}</h1>
                    <h1 className="text-slate-100/50 text-sm">%</h1> 
                </div>
            </div>
        </div>
    )
}