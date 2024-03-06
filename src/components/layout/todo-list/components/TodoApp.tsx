import { Task } from "../TodoList";
import TodoHeader from "./TodoHeader";
import TodoTasks from "./TodoTasks";

export default function TodoApp({taskData, completedTasksPercentage, addTodo, toggleTodo, removeTodo, checkAsFavorite}: 
    {taskData: Task[], 
    completedTasksPercentage: number,
    addTodo:  (task: Task) => void,
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void,
    checkAsFavorite: (id: number) => void
}){
    return(
        <div className="container col-span-5 row-span-3 p-5 rounded bg-gradient-to-r from-slate-500/30 from-10% to-gray-500/10 to-90% text-slate-100">
            <TodoHeader percentage={completedTasksPercentage}/>
            <TodoTasks taskData={taskData} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} checkAsFavorite={checkAsFavorite} />
        </div>
    )
}