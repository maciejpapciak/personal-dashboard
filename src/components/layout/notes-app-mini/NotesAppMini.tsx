import NoteItems from "./components/NoteItems"
import NotesHeader from "./components/NotesHeader"
import useNotes from "./hooks/useNotes"


export type Note = {
    id:number,
    noteTitle: string,
    content: string
}


export default function NotesApp(){

    const { notes, addNote, removeNote} = useNotes()


    return(
        <div className=" mb-5 p-5 rounded-md break-inside-avoid row-span-2 bg-gradient-to-r from-slate-500/30 from-10% to-gray-500/10 to-90% text-slate-100">
            <NotesHeader addNote={addNote} />
            <NoteItems notes={notes} removeNote={removeNote}/>
        </div>
    )
}