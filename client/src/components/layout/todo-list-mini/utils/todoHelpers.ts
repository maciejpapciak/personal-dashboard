import { TaskStatus } from "../TodoListMini";


export default function toggleTodoStatus(status: TaskStatus){
    return status === "ACTIVE" ? "COMPLETED" : "ACTIVE"
}
