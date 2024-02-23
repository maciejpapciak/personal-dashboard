import current from "../utils/weatherHelpers";

export default function WeatherAppHeader({cityName}: {cityName:string}){


    return(
        <div className="flex flex-col border-b py-5">
            <h1 className="text-center font-bold uppercase text-3xl my-2">{cityName}</h1>
            <h1 className="text-center text-zinc-100">{current}</h1>
        </div>
        
    )
}