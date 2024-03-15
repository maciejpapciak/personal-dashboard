import { MdOutlineVisibility } from "react-icons/md";

export default function Visibility({visibility}: {visibility: number}){
    return(
        <div className="col-span-3 md:col-span-1 flex flex-col p-3 bg-neutral-900/50 rounded">
            <h1 className="text-sm text-slate-100/70">Visibility</h1>
            <div className="flex justify-between mt-5">
                <div className="flex items-end">
                    <h1 className="text-3xl mr-2"><MdOutlineVisibility /></h1>
                    <h1 className="font-bold text-3xl">{visibility}</h1>
                    <h1 className="text-slate-100/50 text-sm">km</h1> 
                </div>
                <div className="flex items-end">
                    <h1 className="text-sm text-slate-100/50">{visibility > 2 ? "Good visibility": "Bad visibility"}</h1>
                </div>
            </div>
        </div>
    )
}