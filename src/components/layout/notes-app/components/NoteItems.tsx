import { Note } from "../NotesApp"
import NoteItem from "./NoteItem"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RiErrorWarningLine } from "react-icons/ri";


export default function NoteItems({notes, removeNote, selectNote}: 
    {notes: Note[], removeNote: (id:number) => void, selectNote: (id: number) => void}){
    return(
        <div className="flex gap-2 w-full my-5 p-1 snap-x overflow-x-auto">
            {notes.length > 0 ? notes.map(note => <NoteItem key={note.id} note={note} removeNote={removeNote} selectNote={selectNote} />) : 
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