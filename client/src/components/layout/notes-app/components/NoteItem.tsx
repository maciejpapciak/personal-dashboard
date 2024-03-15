import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";
import { Note } from "../NotesApp";

export default function NoteItem({note, removeNote, selectNote}: {note: Note, removeNote: (id:number) => void, selectNote: (id: number) => void}){


    const regExp = /<\/?[a-z][^>]*>/gi


    function handleRemoveNote(){
        removeNote(note.id)
    }

    function handleSelectNote(){
        selectNote(note.id)
    }

    return(
        <div 
            className="bg-emerald-700 text-slate-100 w-full p-2 mt-0.5 cursor-pointer"
            onClick={handleSelectNote}
        >
            <div className="flex items-center justify-between">
                <h1 className="font-bold">{note.noteTitle}</h1>
            
                <Button 
                    variant="destructive"
                    onClick={handleRemoveNote}
                >
                    <FaTrash />
                </Button> 
            </div>
            <div className="truncate font-normal text-sm mt-3">
                <h1 className="mt-5">{note.content.replace(regExp, '')}</h1>
            </div>            
        </div>

    )
}