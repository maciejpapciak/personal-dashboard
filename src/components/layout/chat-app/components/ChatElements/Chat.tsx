import ChatContactHeader from "./ChatContactHeader";
import ChatMessages from "./ChatMessages";


export default function Chat(){
    return(
        <div className="flex flex-col px-6 rounded-xl bg-slate-300 dark:bg-[#25235D] w-[550px]">
            <ChatContactHeader />
            <ChatMessages />
        </div>
    )
}