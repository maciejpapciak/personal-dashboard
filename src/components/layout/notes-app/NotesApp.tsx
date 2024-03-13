import NotesHeader from "./components/NotesHeader"
import NotesMainContent from "./components/NotesMainContent"
import useNotes from "./hooks/useNotes"


export type Note = {
    id:number,
    noteTitle: string,
    content: string
}


export default function NotesApp(){

    const {selectedNote, notes, selectNote, addNote, removeNote, editNote} = useNotes()


    return(
        <div className="container py-7 row-span-2 text-slate-100 h-screen">
            <div className=" rounded-md bg-gradient-to-r from-slate-500/30 from-10% to-gray-500/10 to-90%">
                <NotesHeader addNote={addNote} />
                <NotesMainContent notes={notes} selectNote={selectNote} removeNote={removeNote} editNote={editNote} selectedNote={selectedNote} />
            </div>
            
        </div>
    )
}