import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NoteElement.css'

const NoteElement = (props) => {
    const toNote = `/dashboard/viewNote/${props.id}`;
  return (
    <Link to = {toNote} className = "noteIndividual" >
        <h3 className = "note-title">{props.title}</h3>
        <p className = "note-body">{props.body}</p>
    </Link>
  )
}

export default NoteElement