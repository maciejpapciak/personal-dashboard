import TodoApp from "./components/TodoApp"
import useTasks from "./hooks/useTasks"


export type TaskStatus = "ACTIVE" | "COMPLETED"

export type Task = {
    id: number,
    content:string,
    status: TaskStatus,
    isFavorite: boolean,
    category: string
}




export default function TodoList(){
   
    const {taskData, completedTasksPercentage, addTodo, toggleTodo, removeTodo, checkAsFavorite} = useTasks()

    return(
        <div className="grid grid-cols-5 grid-rows-3 p-7 rounded-md gap-5 lg:h-screen">
            <TodoApp 
                taskData={taskData} 
                completedTasksPercentage={completedTasksPercentage}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                checkAsFavorite={checkAsFavorite}
            />
            
        </div>
    )
}