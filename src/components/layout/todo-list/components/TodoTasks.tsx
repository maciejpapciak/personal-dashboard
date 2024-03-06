import TodoListInput from "./TodoListInput"
import { Task } from "../TodoList"
import TodoOptions from "./TodoOptions"

export default function TodoTasks({addTodo, toggleTodo, removeTodo, taskData, checkAsFavorite}:
        {
            taskData: Task[],
            addTodo: (task: Task) => void, 
            toggleTodo: (id: number) => void, 
            removeTodo: (id:number) => void,
            checkAsFavorite: (id: number) => void
        }){


    return(
        <div className="mt-5">

            <TodoListInput addTodo={addTodo} />
            
            <TodoOptions toggleTodo={toggleTodo} removeTodo={removeTodo} taskData={taskData} checkAsFavorite={checkAsFavorite} />
            
        </div>
    )
}