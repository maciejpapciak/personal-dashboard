export default function TodoHeader({percentage}: {percentage: number}){
    return(
        <div className="grid grid-cols-2">
            <h1 className="font-bold">My tasks</h1>

            
            <h3 className="text-right text-xs">{`${percentage}% done`}</h3>
        </div>
    )
}