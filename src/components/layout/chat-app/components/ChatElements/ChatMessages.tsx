import { Input } from "@/components/ui/input";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import Message from "./Message";
import io from 'socket.io-client';
import React from "react";


export default function ChatMessages(){

    const socket = io('http://localhost:5173')

    const [messages, setMessages] = React.useState([])
    const [messageText, setMessageText] = React.useState('')

    React.useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    React.useEffect(() => {
        window.addEventListener('keydown', e => {
            if(e.key === 'Enter'){
                sendMessage()
            }
        })
    })

    function sendMessage(){
        socket.emit('sendMessage', {text: messageText})
        setMessageText('')
    }

    return(
        <div className="flex flex-col py-6 relative grow">
            <div className="flex flex-col gap-5 grow">
                {messages.map((message, index) => (
                    <Message key={index} username={message.username} text={message.text} />
                ))}
            </div>

            <div className="bg-slate-400 dark:bg-[#181640] w-full h-12 py-2 px-4 rounded-lg my-3 flex items-center gap-3 dark:text-slate-100/50">
                <div className="text-xl cursor-pointer">
                    <IoAddCircleSharp />
                </div>
                <Input 
                    className="border-0 dark:bg-transparent dark:border-0"
                    placeholder="Type here"
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
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