import ChatHeader from "./components/ChatHeader"
import ContentElements from "./components/ContentElements"
import SidebarChatMenu from "./components/SidebarChatMenu"

export default function ChatLeftPanel({
    darkMode, changeMode
}: {
    darkMode: boolean,
    changeMode: () => void
}){
    return(
        <div className="pb-5">
            <ChatHeader darkMode={darkMode} changeMode={changeMode} />
            <div className="flex">
                <SidebarChatMenu />
                <ContentElements />
            </div>
            
        </div>
    )
}