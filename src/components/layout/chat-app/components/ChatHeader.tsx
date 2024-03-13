import { Input } from "@/components/ui/input";
import { IoHelpCircleSharp } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


export default function ChatHeader({darkMode, changeMode}: 
    {
        darkMode: boolean,
        changeMode: () => void
    }){


    return(
        <div className="col-span-5 flex items-center gap-3 h-20 pl-32">
            <div className="flex items-center gap-2 w-full">
                <div className="text-2xl">
                    <CiSearch />  
                </div>
                <Input
                    className="w-full border-0 dark:text-slate-100/50 text-md dark: bg-transparent"
                    type="text"
                    name="searchContacts"
                    placeholder="Search contact..."
                />
            </div>
            
            <div className="flex items-center px-8 gap-4 w-fit">
                <div className="text-2xl cursor-pointer">
                    <IoHelpCircleSharp />
                </div>
                <div className="text-2xl cursor-pointer" onClick={changeMode}>
                    {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-md relative">
                    <div className="absolute top-0 right-0 w-2 h-2 rounded-xl bg-red-500 ring-4 ring-slate-100 dark:ring-[#181640] ring-offset-0"></div>
                </div>
            </div>
        </div>
    )
}