import React from "react"
import { Note } from "../NotesApp"
import useLocalStorage from "@/lib/useLocalStorage"

const useNotes = () => {
    const [selectedNote, setSelectedNote] = React.useState<number | null>(null)
    const [notes, setNotes] = useLocalStorage<Note[]>('myNotes', [])


    function selectNote(id:number){
        setSelectedNote(id)
    }


    function addNote(note: Note){
        setNotes((prevNotes) => {
            return[
                ...prevNotes,
                note
            ]
        })

        setSelectedNote(null)
    }

    function removeNote(id: number){
        setNotes((prevNotes) => prevNotes.filter((note: { id: number }) => note.id !== id))
        setSelectedNote(null)
    }

    function editNote(id:number, content: string){
        setNotes((prevNotes) => prevNotes.map((note) => note.id === id ? {...note, content: content} : note ))
    }


    return {selectedNote, notes, selectNote, addNote, removeNote, editNote}
}

export default useNotes