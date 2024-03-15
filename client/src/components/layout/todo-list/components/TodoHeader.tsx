export default function TodoHeader({percentage}: {percentage: number}){
    return(
        <div className="grid grid-cols-2">
            <h1 className="font-bold text-xl text-violet-700">My tasks</h1>
            <h1 className="text-right text-xs">{`${percentage}% done`}</h1>
        </div>
    )
}