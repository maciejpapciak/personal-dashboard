import { RiCelsiusLine } from "react-icons/ri";

export default function ForecastDay({image, maxTemp,minTemp, dayOfMonth, month}: {image:string, maxTemp:number, minTemp: number, dayOfMonth: string, month:string}){
    
    const months = ["January", "February","March","April","May","June","July","August","September","October","November","December"]

    return(
        <div className="flex justify-between items-center py-2 my-2">
            <div className="flex">
                <img src={`https:${image}`} alt="icon" className="mx-2"></img>
                <div className="flex items-center font-bold text-2xl">
                    {maxTemp}
                    <RiCelsiusLine />/
                </div>
                <div className="flex items-center text-lg text-slate-100/60">
                    {minTemp}
                    <RiCelsiusLine />
                </div>
            </div>
            <div>
                <h1 className="text-lg text-slate-100/60">{dayOfMonth} {months[parseInt(month)-1]}</h1>
            </div>
        </div>
    )
}