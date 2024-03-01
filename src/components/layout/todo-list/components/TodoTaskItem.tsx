import { Task } from "../TodoList";
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
            <label className={`flex items-center justify-between my-2 mx-2 ${task.status === "COMPLETED" ? "line-through" : ""}`} >
                <div className="flex">
                <input
                    type="checkbox"
                    name="status"
                    checked={task.status === "COMPLETED"}
                    onChange={(e) => toggleTodo(task.id)} 

                />
                <li className="ml-2">{task.content}</li>
                </div>
                

                <Button variant="destructive" onClick={handleRemove}>
                    <HiTrash />
                </Button>
                
        </label>
    )
}