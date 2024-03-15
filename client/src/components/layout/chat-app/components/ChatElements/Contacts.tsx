export default function Contacts(){
    return(
        <div className="p-4 rounded-xl bg-slate-300 dark:bg-[#25235D]">
            <div className="flex items-center justify-between font-bold">
                <h1 className="text-lg">Chats</h1>
                <h1 className="text-sm dark:text-[#15C9CF] cursor-pointer">See all</h1>
            </div>
            <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#25235D] scrollbar-track-[#181640] h-56 overflow-y-auto mt-5">
                <div className="flex flex-col gap-6 pr-5 h-56">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl relative">
                            <div className="absolute right-0 ring-4 ring-offset-0 ring-slate-300 dark:ring-[#25235D] w-2 h-2 rounded-xl bg-green-500"></div>
                        </div>
                        <div className="flex flex-col gap-1 grow">
                            <div className="flex items-center justify-between">
                                <h1 className="text-lg font-bold">Jack O'Neil</h1>
                                
                                <h1 className="text-sm dark:text-slate-100/50">7:59 am</h1>
                            </div>
                            
                            <h1 className="text-sm dark:text-slate-100/50 w-80 truncate">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, modi?. Lorem ipsum dolor sit.</h1>
                            
                            
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-red-500 rounded-2xl relative">
                            <div className="absolute right-0 ring-4 ring-offset-0 ring-slate-300 dark:ring-[#25235D] w-2 h-2 rounded-xl bg-red-500"></div>
                        </div>
                        <div className="flex flex-col gap-1 grow">
                            <div className="flex items-center justify-between">
                                <h1 className="text-lg font-bold">Peter Parker</h1>
                                
                                <h1 className="text-sm dark:text-slate-100/50">4:03 pm</h1>
                            </div>

                            <h1 className="text-sm dark:text-slate-100/50 w-80 truncate">Fuck off!</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}