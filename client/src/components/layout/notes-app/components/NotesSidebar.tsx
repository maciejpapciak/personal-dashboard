import { Note } from "../NotesApp";
import NoteItems from "./NoteItems";

export default function NotesSidebar({notes, selectNote, removeNote}: 
    {
        notes: Note[],
        selectNote: (id: number) => void,
        removeNote: (id: number) => void 
    }){
    return(
        <div className="w-1/4 bg-slate-100 text-emerald-800 font-bold">
            <h1 className="text-lg p-5">Your notes</h1>
            <NoteItems notes={notes} removeNote={removeNote} selectNote={selectNote}/>
        </div>
    )
}