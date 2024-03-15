export default function Message({username, text, color}: {username: string, text: string, color: string}){
    
    return(
        <div className="flex gap-3">
            <div className='w-8 h-8 rounded-lg' style={{backgroundColor: color}}></div>
            <div className="flex flex-col grow">
                <div className="flex items-center gap-3">
                    <h1 className="text-md dark:text-slate-100 font-bold">{username}</h1>
                    <h1 className="text-[12px] dark:text-slate-100/50">4:00 pm</h1>
                </div>
                <h1 className="dark:text-slate-100/50">{text}</h1>
            </div>
        </div>
    )
}