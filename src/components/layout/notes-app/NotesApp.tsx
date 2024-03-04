import NoteContent from "./components/NoteContent"
import NoteItems from "./components/NoteItems"
import NotesHeader from "./components/NotesHeader"
import useNotes from "./hooks/useNotes"


export type Note = {
    id:number,
    noteTitle: string,
    content: string
}


export default function NotesApp(){

    const {selectedNote, notes, selectNote, addNote, removeNote, editNote} = useNotes()

    const newNoteContent = notes.find((note: { id: number | null })=> note.id === selectedNote)?.content || ""

    console.log(selectedNote, newNoteContent)

    return(
        <div className=" mb-5 p-5 rounded-md break-inside-avoid row-span-2 bg-gradient-to-r from-slate-500/30 from-10% to-gray-500/10 to-90%">
            <NotesHeader addNote={addNote} />
            <NoteItems notes={notes} removeNote={removeNote} selectNote={selectNote}/>
            {selectedNote && notes.length ? <NoteContent key={selectedNote} editNote={editNote} currentNoteId={selectedNote} newNoteContent={newNoteContent} /> : null}
        </div>
    )
}