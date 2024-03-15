import { Task } from "../TodoListMini";
import { Button } from "@/components/ui/button";
import { HiTrash } from "react-icons/hi";

export default function TodoListItem({task, toggleTodo, removeTodo}:
    { 
        task: Task, 
        toggleTodo: (id: number) => void, 
        removeTodo: (id: number) => void
    })
    {


    function handleRemove(){
        removeTodo(task.id)
    }

    return(
            <label className={`flex items-center justify-between my-2 mx-2 pl-2 rounded-md ${task.status === "COMPLETED" ? "bg-violet-200 text-violet-600 accent-violet-600 font-bold" : ""}`} >
                <div className="flex">
                <input
                    type="checkbox"
                    name="status"
                    checked={task.status === "COMPLETED"}
                    onChange={(e) => toggleTodo(task.id)} 
                    className="w-4"
                />
                <li className="ml-2">{task.content}</li>
                </div>
                

                <Button variant="destructive" onClick={handleRemove}>
                    <HiTrash />
                </Button>
                
        </label>
    )
}