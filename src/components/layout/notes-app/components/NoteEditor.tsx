import { Button } from '@/components/ui/button'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


export default function NoteEditor({editNote, currentNoteId, newNoteContent}: {editNote: (id:number, editedNote: string) => void, currentNoteId: number, newNoteContent:string}){


    const [quillValue, setQuillValue] = React.useState(newNoteContent)

    function handleEditNote(){
        editNote(currentNoteId, quillValue)
    }

    return(
        <div className='h-96'>
            <ReactQuill className='bg-slate-100 text-black' theme='snow' value={quillValue} onChange={setQuillValue} />
            <Button className='bg-slate-100 hover:bg-slate-300 mt-5 text-emerald-800' onClick={handleEditNote}>Save note</Button>
        </div>
    )
}