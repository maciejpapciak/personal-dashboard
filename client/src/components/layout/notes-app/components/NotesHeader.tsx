import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Note } from "../NotesApp";

export default function NotesHeader({addNote}: {addNote: (note: Note) => void}){

    const [title, setTitle] = React.useState("")

    function titleChange(e: { target: { value: React.SetStateAction<string>; }; }){
        setTitle(e.target.value)
    }

    function handleAddNote(){
        if(title){
            const newNote: Note = {
                id: Date.now(),
                noteTitle: title,
                content: "Your content will be displayed here"
            }

            addNote(newNote)
            setTitle("")
        }
    }

    return(
        <div className="flex gap-2 p-5">
            <h1 className="w-full text-left text-2xl font-bold text-emerald-600">Notez</h1>
            <Input
                className="w-2/5 text-emerald-600"
                type="text"
                placeholder="Note title"
                onChange={titleChange}
                value={title}
            />
            <Button
                className="w-1/5 text-md bg-emerald-800 hover:bg-emerald-700"
                onClick={handleAddNote}
            >
                Create
            </Button>
        </div>
    )
}