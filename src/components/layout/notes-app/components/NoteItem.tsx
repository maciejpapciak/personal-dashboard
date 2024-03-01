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
            className="outline outline-1 outline-green-200 w-1/2 p-2 rounded-md scroll-ml-6 snap-start"
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
            <div className="truncate text-sm mt-5">
                {note.content.replace(regExp, '')}
            </div>            
        </div>

    )
}