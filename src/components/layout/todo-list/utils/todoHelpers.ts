import { TaskStatus } from "../TodoList";


export default function toggleTodoStatus(status: TaskStatus){
    return status === "ACTIVE" ? "COMPLETED" : "ACTIVE"
}
