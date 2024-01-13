import './App.css';
// import state stuff
import React, { useState } from 'react';
import Axios from 'axios';


function App() {
  // react state (for form fields)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [ctc, setCtc] = useState(0);
  
  //react state for employee list
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
  Axios.post('http://localhost:3001/create/', { 
    name: name, 
    email: email,
    age: age, 
    position: position, 
    ctc: ctc}).then(() => {
      // console.log('Success');

      //array destructuting 
      setEmployeeList([...employeeList, { name: name, email: email, age: age, position: position, ctc: ctc},]); 
    });
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      // console.log(response);
      setEmployeeList(response.data);
    });
  }

  return (
    <div className="App">
      <div className="infoo">
        <label> Name </label>
        <input type="text" onChange={(event) => {
          setName(event.target.value);
        }} />

        <label> Email </label>
        <input type="text" onChange={(event) => {
          setEmail(event.target.value);
        }} />

        <label> Age </label>
        <input type="number" onChange={(event) => {
          setAge(event.target.value);
        }} />

        <label> Position </label>
        <input type="text" onChange={(event) => {
          setPosition(event.target.value);
        }} />

        <label> CTC </label>
        <input type="number" onChange={(event) => {
          setCtc(event.target.value);
        }} />

        <button onClick={addEmployee}>Add Employee</button>
        <hr></hr>
      </div>

      <div className="emplBtn">
        <button onClick={getEmployees}>Show Employees</button>
      </div>
      <div className='empNameBox'>
      {employeeList.map((val, key) => {
        return (
          <div className='empName'> 
            <span className='listBox'>
              <br></br>Name: {val.name}
              <br></br>EMail: {val.email}
              <br></br>Age: {val.age}
              <br></br>Position: {val.position}
              <br></br>CTC: {val.ctc}
            </span>
          </div>
        );
        })}
        </div>
    </div>
  );
}

export default App;
