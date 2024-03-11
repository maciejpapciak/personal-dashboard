import TodoHeader from "./components/TodoHeader"
import TodoTasks from "./components/TodoTasks"
import useTasks from "./hooks/useTasks"


export type TaskStatus = "ACTIVE" | "COMPLETED"

export type Task = {
    id: number,
    content:string,
    status: TaskStatus
}




export default function TodoList(){
   
    const {taskData, completedTasksPercentage, addTodo, toggleTodo, removeTodo} = useTasks()

    return(
        <div className="border mb-5 p-5 rounded-md break-inside-avoid bg-slate-100 row-span-2">
            <TodoHeader percentage={completedTasksPercentage}/>
            <TodoTasks taskData={taskData} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
    )
}