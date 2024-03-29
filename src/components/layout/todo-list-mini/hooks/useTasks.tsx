import React from "react";
import { Task, TaskStatus } from "../TodoListMini";
import toggleTodoStatus from "../utils/todoHelpers";


const useTasks = () => {

    const [taskData, setTaskData] = React.useState<Task[]>(() => {
        const data = localStorage.getItem("myTasks");
        return data !== null ? JSON.parse(data) : [];
    })


    const completedTasksPercentage = Math.round(taskData.filter(completed => completed.status === "COMPLETED").length*100/(taskData.length || 1))



    React.useEffect(() => {
        localStorage.setItem("myTasks", JSON.stringify(taskData))
    }, [taskData])


    function addTodo(task: Task){
        setTaskData(prevTaskData => {
            return[
                ...prevTaskData,
                task
            ]
        })
    }

    function toggleTodo(id: number){
        setTaskData(prevTaskData => prevTaskData.map(task => task.id === id ? {...task, status: toggleTodoStatus(task.status)} : task))
    }

    function removeTodo(id: number){
        setTaskData(prevTaskData => prevTaskData.filter(task => task.id !== id))
    }

    return {completedTasksPercentage, addTodo, toggleTodo, removeTodo, taskData}
}


export default useTasks