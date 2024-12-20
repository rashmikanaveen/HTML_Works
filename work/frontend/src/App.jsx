import { useState,useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'


const Notification = ({ message }) => {
  if (message === null  || message === '') {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Rashmika Naveen  2024</em>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState(null)

  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

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
    const fetchNotes = async () => {
      try {
        const initialNotes = await noteService.getAll();
        setNotes(initialNotes);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  if (!notes) { 
    return null 
  }
  
  /*
  if (notes === null) {
    return (
      <div>
        <p>server has issue</p>
      </div>
    )


  }
  */


  

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
        .then(returnedNote => {
          setNotes(notes.concat(returnedNote))
          setNewNote('')
        })
    }
  
    const toggleImportanceOf = id => {
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }
  
      noteService
        .update(id, changedNote)
        .then(returnedNote => {
          setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })

        .catch(error => {
          setErrorMessage(
            `Note '${note.content}' was already removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNotes(notes.filter(n => n.id !== id))
        })
    }
  


  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
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
          Add new Note here---
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
      <Footer />
    </div>
  )
}

export default App 