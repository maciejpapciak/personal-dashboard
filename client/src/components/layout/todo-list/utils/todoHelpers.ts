import { TaskStatus } from "../TodoList";


export default function toggleTodoStatus(status: TaskStatus){
    return status === "ACTIVE" ? "COMPLETED" : "ACTIVE"
}

export const taskCategories = [
    {
        value: "Goals",
        color: "bg-violet-500"
    },
    {
        value: "Personal",
        color: "bg-teal-400"
    },
    {
        value: "Financial",
        color: "bg-green-700"
    },
    {
        value: "Education",
        color: "bg-red-400"
    },
    {
        value: "Hobby",
        color: "bg-orange-600"
    },
    {
        value: "Sport",
        color: "bg-amber-800"
    },
    {
        value: "Self-care",
        color: "bg-lime-400"
    },
    {
        value: "Work",
        color: "bg-cyan-500"
    },
    {
        value: "Programming",
        color: "bg-gradient-to-r from-fuchsia-500 to-violet-500"
    },
    {
        value: "School",
        color: "bg-purple-700"
    },
    {
        value: "Visits",
        color: "bg-fuchsia-500"
    },
    {
        value: "Health",
        color: "bg-pink-400"
    },
    {
        value: "Investments",
        color: "bg-yellow-500"
    }
]

export function getColorByValue(value: string){
    return taskCategories.find(category => category.value === value)?.color
}