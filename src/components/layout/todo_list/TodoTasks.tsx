import TodoListItem from "./TodoTaskItem"
import TodoListInput from "./TodoListInput"
import { Task } from "./TodoList"

export default function TodoTasks(props:
        {
            taskData: Task[],
            AddTodo: (task: Task) => void, 
            ToggleTodo: (id: number) => void, 
            Remove: (id:number) => void
        }){


    return(
        <div className="mt-5">
            <ul>
                {props.taskData.map(task => 
                    <TodoListItem 
                        task={task} 
                        key={task.id} 
                        ToggleTodo={() => props.ToggleTodo(task.id)} 
                        Remove={() => props.Remove(task.id)}
                    />
                )}
            </ul>

            <TodoListInput AddTodo={props.AddTodo} />
        </div>
    )
}