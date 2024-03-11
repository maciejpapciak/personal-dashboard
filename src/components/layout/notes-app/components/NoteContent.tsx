import { Button } from '@/components/ui/button'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


export default function NoteContent({editNote, currentNoteId, newNoteContent}: {editNote: (id:number, editedNote: string) => void, currentNoteId: number, newNoteContent:string}){


    const [quillValue, setQuillValue] = React.useState(newNoteContent)

    function handleEditNote(){
        editNote(currentNoteId, quillValue)
    }

    return(
        <div className="mt-20">
            <ReactQuill theme='snow' value={quillValue} onChange={setQuillValue} />
            <Button className='bg-green-400 hover:bg-green-500 my-4' onClick={handleEditNote}>Save note</Button>
        </div>
    )
}