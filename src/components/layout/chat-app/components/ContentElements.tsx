import Chat from "./ChatElements/Chat";
import Contacts from "./ChatElements/Contacts";
import Groups from "./ChatElements/Groups";

export default function ContentElements(){
    return(
        <div className="flex gap-5 w-full pr-5">
            <div className="flex flex-col gap-5">
                <Groups />
                <Contacts />
            </div>
            <Chat />
        </div>
    )
}