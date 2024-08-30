const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

const Note2 = (Notes) => {
  console.log("Hi_2")
    return (
      
      <div>
        {notes.map(note => <li key={note.id}>{note.content}</li>)}
      </div>
    )
  }
  


const Note = () => {
  console.log("hi_1")
    return (
      <Note2 note={notes} />
    )
  }
  
  export default Note