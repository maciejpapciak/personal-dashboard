import { Note } from "../NotesApp"
import NoteItem from "./NoteItem"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RiErrorWarningLine } from "react-icons/ri";


export default function NoteItems({notes, removeNote, selectNote}: 
    {notes: Note[], removeNote: (id:number) => void, selectNote: (id: number) => void}){
    return(
        <div className="w-full mt-5 h-64 overflow-y-auto">
            {notes.length > 0 ? notes.map(note => <NoteItem key={note.id} note={note} removeNote={removeNote} selectNote={selectNote} />) : 
                <Alert className="select-none text-emerald-700 border border-4 border-emerald-700">
                    <RiErrorWarningLine />
                    <AlertTitle className="font-bold mb-4">Empty!</AlertTitle>
                    <AlertDescription>
                    Your notes will be shown here.
                    </AlertDescription>
                </Alert>
            }
        </div>
    )
}