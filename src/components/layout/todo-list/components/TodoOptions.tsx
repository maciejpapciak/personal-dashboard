import { Switch } from "@/components/ui/switch"
import TodoTaskItem from "./TodoTaskItem"
import { Task } from "../TodoList"
import React from "react"


export default function TodoOptions({toggleTodo, removeTodo, taskData, checkAsFavorite}:   {   
        taskData: Task[]
        toggleTodo: (id: number) => void, 
        removeTodo: (id:number) => void,
        checkAsFavorite: (id: number) => void
    }){

    const [searchTask, setsearchTask] = React.useState("")
    const [toggleCompleted, setToggleCompleted] = React.useState(false)
    const [toggleUncompleted, setToggleUncompleted] = React.useState(false)
    const [toggleFavorite, setToggleFavorite] = React.useState(false)


    const filteredTasks = taskData.filter(task => 
        ((task.status === "COMPLETED" && toggleCompleted) ||
        (task.status !== "COMPLETED" && toggleUncompleted) ||
        (task.isFavorite && toggleFavorite) ||
        (!toggleCompleted && !toggleUncompleted && !toggleFavorite)) &&
        task.content.toLowerCase().includes(searchTask.toLowerCase())
    )


    return(
        <div className="grid grid-cols-4 gap-5">
            <div className="my-5 col-span-4 lg:col-span-1">
                <h1 className="my-2 text-violet-500">Search tasks</h1>
                <div>
                    <input 
                        type="text" 
                        className="w-full placeholder:font-normal font-bold text-violet-600 placeholder: italic placeholder-violet-600 border border-violet-300 rounded-sm py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-300 focus:ring-2 bg-violet-200" 
                        placeholder="Search..." 
                        name="taskName"
                        onChange={(e) => setsearchTask(e.target.value)}
                        value={searchTask}
                    />
                    <div className="flex items-center space-x-2 my-4">
                        <Switch id="completed" onCheckedChange={(value) => setToggleCompleted(value)} checked={toggleCompleted} />
                        <label htmlFor="completed">Show completed tasks</label>
                    </div>
                    <div className="flex items-center space-x-2 my-4">
                        <Switch id="uncompleted" onCheckedChange={(value) => setToggleUncompleted(value)} checked={toggleUncompleted} />
                        <label htmlFor="uncompleted">Show uncompleted tasks</label>
                    </div>
                    <div className="flex items-center space-x-2 my-4">
                        <Switch id="favorite" onCheckedChange={(value) => setToggleFavorite(value)} checked={toggleFavorite} />
                        <label htmlFor="favorite">Show favorites</label>
                    </div>
                </div>
            </div>
            <ul className="h-80 mt-8 overscroll-auto overflow-y-auto col-span-4 lg:col-span-3">
                {
                    filteredTasks.map(task => 
                        <TodoTaskItem 
                            key={task.id}
                            task={task}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                            checkAsFavorite={checkAsFavorite}
                        />
                    )
                    
                }
                
            </ul>
        </div>
    )
}