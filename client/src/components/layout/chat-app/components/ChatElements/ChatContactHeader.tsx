import { FaPhone } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { useContext } from "react";
import { UserContext } from "@/App";

export default function ChatContactHeader(){

    const userOpt = useContext(UserContext)

    return(
        <div>
            <div className="flex items-center justify-between py-7 border-b border-black dark:border-slate-100/50">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl relative" style={{backgroundColor: userOpt?.profileColor}}>
                        <div className="absolute right-0 w-3 h-3 ring-4 ring-offset-0 ring-slate-300 dark:ring-[#25235D] rounded-3xl bg-green-500"></div>
                    </div>
                    <h1 className="text-xl font-bold">{userOpt?.email}</h1>
                    
                </div>
                <div className="flex items-center gap-5 dark:text-slate-100/50">
                    <h1 className="interactiveContactItems">
                        <FaPhone />
                    </h1>
                    <h1 className="interactiveContactItems">
                        <FaVideo />
                    </h1>
                    <h1 className="interactiveContactItems">
                        <SlOptionsVertical />
                    </h1>
                </div>
            </div>
        </div>
    )
}