import { FaHome, FaUser } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoSettingsSharp } from "react-icons/io5";

export default function SidebarChatMenu(){
    return(
        <div className="flex flex-col items-center w-36 gap-3 px-6 py-4 text-2xl dark:text-slate-200/70">
            <button className="sidebarChatItem">
                <FaHome />
            </button>
            <button className="sidebarChatItem">
                <IoChatbubbleEllipsesSharp />
            </button>
            <button className="sidebarChatItem">
                <FaUser />
            </button>
            <button className="sidebarChatItem">
                <IoSettingsSharp />
            </button>
        </div>
    )
}