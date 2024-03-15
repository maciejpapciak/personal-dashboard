import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";
import { Note } from "../NotesAppMini";

export default function NoteItem({note, removeNote}: {note: Note, removeNote: (id:number) => void}){


    const regExp = /<\/?[a-z][^>]*>/gi


    function handleRemoveNote(){
        removeNote(note.id)
    }

   
    return(
        
        <div 
            className="outline outline-1 outline-green-200 w-full p-2 rounded-md my-2"
        >
            <div className="flex items-center justify-between">
                <h1 className="font-bold">{note.noteTitle.toLocaleUpperCase()}</h1>
            
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