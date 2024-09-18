
import './App.css';
import {useState} from 'react';

function App() {
  const[name, setName] = useState('');
  const[Age, setAge] = useState(0);
  const[Country, setCountry] = useState('');
  const[wage, setWage] = useState(0);
  const[Position, setPosition] = useState('');
  return (
    <div className="App">
        <div className='information'>
        <label>Enter Name:</label>
        <input type='text' onChange={(event)=>{setName(event.target.value)}}></input>
        <label>Enter Age:</label>
        <input type='number' onChange={(event)=>{setAge(event.target.value)}}></input>
        <label>Position:</label>
        <input type='text' onChange={(event)=>{setPosition(event.target.value)}}></input>
        <label>Country:</label>
        <input type='text' onChange={(event)=>{setCountry(event.target.value)}}></input>
        <label>Wage(year):</label>
        <input type='number' onChange={(event)=>{setWage(event.target.value)}}></input>
        <button>Add Employee</button>
        </div>
    </div>
  );
}

export default App;
