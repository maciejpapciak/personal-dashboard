import { Note } from "../NotesAppMini"
import NoteItem from "./NoteItem"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RiErrorWarningLine } from "react-icons/ri";


export default function NoteItems({notes, removeNote}: 
    {notes: Note[], removeNote: (id:number) => void}){
    return(
        <div className="gap-2 w-full h-96 my-5 p-1 overscroll-contain overflow-y-auto">
            {notes.length > 0 ? notes.map(note => <NoteItem key={note.id} note={note} removeNote={removeNote} />) : 
                <Alert className="select-none">
                    <RiErrorWarningLine />
                    <AlertTitle>Empty!</AlertTitle>
                    <AlertDescription>
                    Your notes will be shown here.
                    </AlertDescription>
                </Alert>
            }
        </div>
    )
}