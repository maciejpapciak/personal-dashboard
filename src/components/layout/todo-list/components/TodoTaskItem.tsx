import { Task } from "../TodoList";
import { Button } from "@/components/ui/button";
import { HiTrash } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge"
import { getColorByValue } from "../utils/todoHelpers";



export default function TodoListItem({task, toggleTodo, removeTodo, checkAsFavorite}:
    { 
        task: Task, 
        toggleTodo: (id: number) => void, 
        removeTodo: (id: number) => void,
        checkAsFavorite: (id: number) => void
    })
    {

    const createdDate = new Date(task.id)

    function handleRemove(){
        removeTodo(task.id)
    }

    function handleCheckAsFavorite(){
        checkAsFavorite(task.id)
    }

    return(
        <div className={`my-2 m-2 p-2 rounded-md ${task.status === "COMPLETED" ? "bg-violet-200 text-violet-600 accent-violet-600 font-bold" : ""}`} >
            <div className="flex items-center justify-between">

                <label className="flex">
                <input
                    type="checkbox"
                    name="status"
                    checked={task.status === "COMPLETED"}
                    onChange={(e) => toggleTodo(task.id)} 
                    className="w-4"
                />
                <li className="ml-2">{task.content}</li>
                </label>
                
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl text-violet-700 cursor-pointer" onClick={handleCheckAsFavorite}>
                        {task.isFavorite ? <FaStar /> : <FaRegStar />}
                    </h1>
                    <Button variant="destructive" onClick={handleRemove}>
                        <HiTrash />
                    </Button>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex text-[12px] mx-6">
                    <h1 className="mr-1">Created at:</h1> {createdDate.toLocaleString()}
                </div>
                <div>
                    <Badge className={getColorByValue(task.category)} >{task.category}</Badge>
                </div>
            </div>
        </div>
    )
}