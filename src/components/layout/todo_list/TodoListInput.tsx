import { Task } from "./TodoList";
import React from "react";
import { Button } from "@/components/ui/button"

export default function TodoListInput(props: { AddTodo: (task: Task) => void}){

    const [inputValue, setInputValue] = React.useState("")

    function handleInputValue(e: { target: { value: React.SetStateAction<string>; }; }){
        setInputValue(e.target.value)
    }

    function handleAddTodo(){
        if(inputValue !== ""){
            const newTask: Task = {
                id: Date.now(),
                content: inputValue,
                status:"ACTIVE"
            }

            props.AddTodo(newTask)
            setInputValue("")
        }
    }

    return(
        <div className="mt-10">
            <input 
                type="text"
                className="placeholder: italic placeholder: text-slate-900 w-3/4 border border-slate-200 rounded-sm py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Add new task..."
                name="taskItem"
                onChange={handleInputValue}
                value={inputValue}
            />
            <Button variant="default" className="w-1/4" onClick={handleAddTodo}>Add</Button>
        </div>
    )
}