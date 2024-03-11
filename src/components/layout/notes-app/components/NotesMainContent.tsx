import { Note } from "../NotesApp";
import NoteEditor from "./NoteEditor";
import NotesSidebar from "./NotesSidebar";

export default function NotesMainContent({notes, selectNote, removeNote, editNote, selectedNote}: {
    notes: Note[],
    selectNote: (id: number) => void,
    removeNote: (id: number) => void,
    editNote: (id:number, content: string) => void,
    selectedNote: number | null
}){


    const newNoteContent = notes.find((note: { id: number | null })=> note.id === selectedNote)?.content || ""

    return(
        <div className="flex mt-5 bg-emerald-800">
            <NotesSidebar notes={notes} selectNote={selectNote} removeNote={removeNote} />
            <div className="w-full p-5">
                {selectedNote && notes.length ? <NoteEditor key={selectedNote} editNote={editNote} currentNoteId={selectedNote} newNoteContent={newNoteContent} /> : null} 
            </div>
            
        </div>
    )
}