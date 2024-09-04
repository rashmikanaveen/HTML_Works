import axios from 'axios'
const promise = axios.get('http://localhost:3001/notes')

promise.then(response => {
  console.log(response)
})