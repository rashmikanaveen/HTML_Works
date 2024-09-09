import { useState,useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  //const hook = () => {
  //  console.log('effect')
  //  axios
  //    .get('http://localhost:3001/notes')
  //    .then(response => {
  //      console.log('promise fulfilled')
  //      setNotes(response.data)
  //    })
  //}
  
  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  console.log('render', notes.length, 'notes')
  

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
  

    const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        important: Math.random() > 0.5
      }
  
      noteService
        .create(noteObject)
        .then(response => {
          setNotes(notes.concat(response.data))
          setNewNote('')
        })
    }
  
    const toggleImportanceOf = id => {
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }
  
      noteService
        .update(id, changedNote)
        .then(response => {
          setNotes(notes.map(note => note.id !== id ? note : response.data))
        })
    }
  


  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
          Add new Note here
      <div>
        <form onSubmit={addNote}>
          <input 
            value={newNote}
            onChange={handleNoteChange}
            placeholder='a new note...'
          />
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  )
}

export default App 