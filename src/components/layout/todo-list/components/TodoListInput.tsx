import { Task } from "../TodoList";
import React from "react";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { taskCategories } from "../utils/todoHelpers";
  

export default function TodoListInput({addTodo}: { addTodo: (task: Task) => void}){

    const [inputValue, setInputValue] = React.useState("")
    const [selectedCategory, setSelectedCategory] = React.useState('Personal')

    function handleInputValue(e: { target: { value: React.SetStateAction<string>; }; }){
        setInputValue(e.target.value)
    }

    function handleAddTodo(){
        if(inputValue !== ""){
            const newTask: Task = {
                id: Date.now(),
                content: inputValue,
                status:"ACTIVE",
                isFavorite: false,
                category: selectedCategory
            }

            addTodo(newTask)
            setInputValue("")
        }
    }

    return(
        <div className="flex items-center mt-10 gap-2">
            <input 
                type="text"
                className="w-full placeholder: italic placeholder: text-slate-900 border border-slate-200 rounded-sm py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Add new task..."
                name="taskItem"
                onChange={handleInputValue}
                value={inputValue}
            />
            <Select name="selectedCategory" value={selectedCategory.toString()} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                        {taskCategories.map(item => <SelectItem key={item.value} value={item.value} >{item.value}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button variant="default" className="w-1/4 py-6" onClick={handleAddTodo}>Add</Button>
        </div>
    )
}