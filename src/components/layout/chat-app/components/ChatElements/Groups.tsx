export default function Groups(){
    return(
        <div className="p-4 rounded-xl bg-slate-300 dark:bg-[#25235D]">
            <div className="flex items-center justify-between font-bold">
                <h1 className="text-lg">Groups</h1>
                <h1 className="text-sm  dark:text-[#15C9CF] cursor-pointer">See all</h1>
            </div>
            <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#25235D] scrollbar-track-[#181640] h-40 overflow-y-auto mt-5">
                <div className="flex flex-col gap-6 pr-5 h-40">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl"></div>
                        <div className="flex flex-col gap-1 grow">
                            <div className="flex items-center justify-between">
                                <h1 className="text-lg font-bold">Off topic</h1>
                                <h1 className="text-sm dark:text-slate-100/50">7:59 am</h1>
                            </div>
                            <h1 className="text-sm dark:text-slate-100/50 w-80 truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nulla maxime facere deleniti excepturi?</h1>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-violet-500 rounded-2xl"></div>
                        <div className="flex flex-col gap-1 grow">
                            <div className="flex items-center justify-between">
                                <h1 className="text-lg font-bold">Guitar enjoyers</h1>
                                <h1 className="text-sm dark:text-slate-100/50">4:12 am</h1>
                            </div>
                            <h1 className="text-sm dark:text-slate-100/50 w-80 truncate">Lorem ipsum dolor sit amet consectetur.</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}