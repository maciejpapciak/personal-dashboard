import React from "react"
import TodoHeader from "./TodoHeader"
import TodoTasks from "./TodoTasks"

export type TaskStatus = "ACTIVE" | "COMPLETED"

export type Task = {
    id: number,
    content:string,
    status: TaskStatus
}




export default function TodoList(){

    const [taskData, setTaskData] = React.useState<Task[]>(() => {
        const data = localStorage.getItem("myTasks");
        return data !== null ? JSON.parse(data) : [];
    })


    const completedTasksPercentage = Math.round(taskData.filter(completed => completed.status === "COMPLETED").length*100/(taskData.length || 1))



    React.useEffect(() => {
        localStorage.setItem("myTasks", JSON.stringify(taskData))
    }, [taskData])


    function AddTodo(task: Task){
        setTaskData(prevTaskData => {
            return[
                ...prevTaskData,
                task
            ]
        })
    }

    function ToggleTodo(id: number){
        setTaskData(prevTaskData => prevTaskData.map(task => task.id === id ? {...task, status: ToggleStatus(task.status)} : task))
    }

    function ToggleStatus(status: TaskStatus){
        return status === "ACTIVE" ? "COMPLETED" : "ACTIVE"
    }

    function Remove(id: number){
        setTaskData(prevTaskData => prevTaskData.filter(task => task.id !== id))
    }
   
    


    return(
        <div className="border mb-5 p-5 rounded-md break-inside-avoid bg-slate-100">
            <TodoHeader percentage={completedTasksPercentage}/>
            <TodoTasks taskData={taskData} AddTodo={AddTodo} ToggleTodo={ToggleTodo} Remove={Remove} />
        </div>
    )
}