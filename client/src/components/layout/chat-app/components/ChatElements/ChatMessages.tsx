import { Input } from "@/components/ui/input";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import React, { useContext } from "react";
import { socket } from "./Chat";
import Message from "./Message";
import { UserContext } from "@/App";

type ChatMessage = {
    username: string,
    text: string,
    color: string
}

export default function ChatMessages(){

    const [messages, setMessages] = React.useState<ChatMessage[]>([])
    const [message, setMessage] = React.useState('')
    const userOpt = useContext(UserContext)


    function sendMessage(){
        const newMessage = {
            username: userOpt?.email!,
            text: message,
            color: userOpt?.profileColor!
        }
        socket.emit("send_message", newMessage)
        setMessages(prevMessages => [...prevMessages,  newMessage])
        setMessage('')
        console.log("wywołano");
        
    }

    React.useEffect(() => { 
        function onReceiveMessage(data: ChatMessage){
            console.log(data)
                if (data.text !== '') {
                    setMessages(prevMessages => [...prevMessages, data])
                }
            }

        socket.on("receive_message",onReceiveMessage )

        return () => {socket.off("receive_message",onReceiveMessage )}

    }, [socket])


    return(
        <div className="flex flex-col py-6 relative grow">
            <div className="flex flex-col gap-5 grow">
                {messages.map((message, index) => (
                    <Message key={index} username={message.username} text={message.text} color={message.color} />
                ))}
            </div>

            <div className="bg-slate-400 dark:bg-[#181640] w-full h-12 py-2 px-4 rounded-lg my-3 flex items-center gap-3 dark:text-slate-100/50">
                <div className="text-xl cursor-pointer">
                    <IoAddCircleSharp />
                </div>
                <Input 
                    className="message-input border-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent dark:border-0"
                    placeholder="Type here"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") sendMessage()
                    }}
                />
                <div className="text-xl cursor-pointer">
                    <MdEmojiEmotions />
                </div>
                <div className="text-xl cursor-pointer">
                    <FaMicrophone />
                </div>
            </div>

        </div>
    )
}