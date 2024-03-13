import { MdEmail, MdBlock, MdArrowForwardIos } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function ChatRightPanel(){
    return(
        <div className="flex flex-col border-l border-1 w-full">
            <div className="flex flex-col items-center w-full gap-6 py-20">
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-24 h-24 rounded-3xl bg-red-500 relative">
                        <div className="w-5 h-5 absolute right-0 ring ring-8 ring-offset-0 ring-slate-100 dark:ring-[#181640] rounded-3xl bg-green-500"></div>
                    </div>
                    <h1 className="text-md font-bold">Peter Parker</h1>
                    <h1 className="text-slate-100/50 text-sm">ID #12345</h1>
                </div>
                <div className="flex gap-4">
                    <div className="contactItem"><MdEmail /></div>
                    <div className="contactItem"><BsFillPhoneFill /></div>
                    <div className="contactItem"><FaLinkedinIn /></div>
                </div>
                <div className="flex items-center gap-2 px-4 py-1 text-sm dark:text-slate-100/50 rounded-md hover:bg-slate-400 dark:hover:bg-[#25235D]/80 dark:hover:text-slate-100 ease-in-out duration-200 cursor-pointer">
                    <MdBlock />
                    <h1>Block</h1>
                </div>
            </div>
            <div className="flex flex-col px-7 gap-2">
                <div className="userOptions">
                    <h1>Themes</h1>
                    <MdArrowForwardIos />
                </div>
                <div className="userOptions">
                    <h1>Media</h1>
                    <MdArrowForwardIos />
                </div>
            </div>
        </div>
    )
}