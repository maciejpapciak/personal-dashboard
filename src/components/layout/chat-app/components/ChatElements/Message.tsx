export default function Message({username, text}: {username: string, text: string}){
    return(
        <div className="flex gap-3">
            <div className="w-8 h-8 bg-red-500 rounded-lg"></div>
            <div className="flex flex-col grow">
                <div className="flex items-center gap-3">
                    <h1 className="text-md text-slate-100 font-bold">{username}</h1>
                    <h1 className="text-[12px] text-slate-100/50">4:00 pm</h1>
                </div>
                <h1 className="text-slate-100/50">{text}</h1>
            </div>
        </div>
    )
}