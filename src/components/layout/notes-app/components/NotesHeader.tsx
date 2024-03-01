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
        <div className="grid grid-cols-5 gap-2">
            <h1 className="col-span-2 text-left text-2xl font-bold text-green-400">Notez</h1>
            <Input
            className="col-span-2"
                type="text"
                placeholder="Note title"
                onChange={titleChange}
                value={title}
            />
            <Button
                className="text-md bg-green-400 hover:bg-green-500"
                onClick={handleAddNote}
            >
                Create
            </Button>
        </div>
    )
}