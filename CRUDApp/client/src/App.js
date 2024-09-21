
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const[name, setName] = useState('');
  const[Age, setAge] = useState(0);
  const[Country, setCountry] = useState('');
  const[wage, setWage] = useState(0);
  const[Position, setPosition] = useState('');
  const[employeelist, setEmployeelist] = useState([]);


  const addEmployee=()=>{
    console.log(name)
    axios.post('http://localhost:3001/create',{
      name:name,
      age:Age,
      country:Country,
      position:Position,
      wage:wage
      
    }).then(()=>{
      setEmployeelist([...employeelist,{
        name:name,
        age:Age,
        country:Country,
        position:Position,
        wage:wage
        
      }])
    })

  }

  const getEmployees=()=>{
    axios.get('http://localhost:3001/employees')
    .then((response)=>{
      setEmployeelist(response.data);
      //console.log(response.data);
    })

  }


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
        <button onClick={addEmployee}>Add Employee</button>
        </form>

        _______________________________________________________________________________________________________________________________________________________________________________________________________________

        <div className='Employees'>
        <button onClick={getEmployees}>Show Employees</button>
        {employeelist.map((val,key)=>{

          return(
            <div className='employee'  key={key}>
              <div>
                <h3>Employee Name: {val.name}</h3>
                <h3>Employee Age: {val.age}</h3>
                <h3>Employee Country: {val.country}</h3>
                <h3>Employee Position: {val.position}</h3>
                <h3>Employee Wage: {val.wage}</h3>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  );
}

export default App;
