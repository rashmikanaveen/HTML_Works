const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let notes = [
  { id: 1, content: 'HTML is easy', important: true },
  { id: 2, content: 'Browser can execute only JavaScript', important: false },
  { id: 3, content: 'GET and POST are the most important methods of HTTP protocol', important: true },
  { id: 4, content: 'new note', important: false },
  { id: 5, content: 'rashmika', important: false }
];

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.put('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = req.body;
  
    notes = notes.map(n => (n.id === id ? note : n));
    res.status(200).json(note);
  });
  

app.post('/api/notes', (req, res) => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
    const note = req.body;
    note.id = maxId + 1;
  
    notes.push(note);
    res.json(note);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});