import TodoListItem from "./TodoTaskItem"
import TodoListInput from "./TodoListInput"
import { Task } from "../TodoListMini"

export default function TodoTasks({addTodo, toggleTodo, removeTodo, taskData}:
        {
            taskData: Task[],
            addTodo: (task: Task) => void, 
            toggleTodo: (id: number) => void, 
            removeTodo: (id:number) => void
        }){


    return(
        <div className="mt-5">

            <TodoListInput addTodo={addTodo} />

            <ul className="mt-10 overscroll-contain overflow-y-auto">
                {taskData.map(task => 
                    <TodoListItem 
                        task={task} 
                        key={task.id} 
                        toggleTodo={() => toggleTodo(task.id)} 
                        removeTodo={() => removeTodo(task.id)}
                    />
                )}
            </ul>

            
        </div>
    )
}