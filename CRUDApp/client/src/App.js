
import './App.css';
import {useState} from 'react';

function App() {
  const[name, setName] = useState('');
  const[Age, setAge] = useState(0);
  const[Country, setCountry] = useState('');
  const[wage, setWage] = useState(0);
  const[Position, setPosition] = useState('');


const displayName=()=>{
  console.log(name+Age+Country+wage+Position);
  
}

  return (
    <div className="App">
        <form className='information'>
        <label>Enter Name:</label>
        <input type='text' onChange={(event)=>{setName(event.target.value)}} required />
        <label>Enter Age:</label>
        <input type='number' onChange={(event)=>{setAge(event.target.value)}} required></input>
        <label>Position:</label>
        <input type='text' onChange={(event)=>{setPosition(event.target.value)}} required></input>
        <label>Country:</label>
        <input type='text' onChange={(event)=>{setCountry(event.target.value)}} required></input>
        <label>Wage(year):</label>
        <input type='number' onChange={(event)=>{setWage(event.target.value)}} required></input>
        <button >Add Employee</button>
        </form>
    </div>
  );
}

export default App;
