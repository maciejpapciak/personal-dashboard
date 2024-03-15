import ChatLeftPanel from "./ChatLeftPanel";
import ChatRightPanel from "./ChatRightPanel";
import useChatHeader from "./hooks/useChatHeader";

export default function ChatApp(){

    
    const {darkMode, changeMode} = useChatHeader()

    return(
        <div className={darkMode ? "dark" : ""}>
            <div className="flex h-[100vh] bg-slate-100 dark:bg-[#181640]/80 dark:text-slate-100">
                <ChatLeftPanel darkMode={darkMode} changeMode={changeMode} />
                <ChatRightPanel />
            </div>
        </div>
    )
}