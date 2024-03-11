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
        <div className="mb-5 p-5 rounded break-inside-avoid bg-gradient-to-r from-slate-500/30 from-10% to-gray-500/10 to-90% row-span-2 text-slate-100">
            <TodoHeader percentage={completedTasksPercentage}/>
            <TodoTasks taskData={taskData} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
    )
}