import { io } from "socket.io-client";
import ChatContactHeader from "./ChatContactHeader";
import ChatMessages from "./ChatMessages";
import { useState, useEffect } from "react";

export const socket = io("http://localhost:4000", {autoConnect: false})

export default function Chat(){

    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        socket.connect()
        function onConnect() {
            setIsConnected(true);
        }
  
      function onDisconnect() {
        setIsConnected(false);
      }

  
      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
  
      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
      };
    }, [isConnected]);

    return(
        <div className="flex flex-col px-6 rounded-xl bg-slate-300 dark:bg-[#25235D] w-[550px]">
            
            <ChatContactHeader />
            <ChatMessages />
        </div>
    )
}