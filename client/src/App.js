import './App.css';
// import state stuff
import React, { useState } from 'react';
import Axios from 'axios';


function App() {
  // react state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [ctc, setCtc] = useState(0);
  
  // console.log(name);
  // const displayInfo = () => {
  //   console.log(name + email + age + position + ctc);
  // }

  const addEmployee = () => {
  Axios.post('http://localhost:3001/create/', { 
    name: name, 
    email: email,
    age: age, 
    position: position, 
    ctc: ctc}).then(() => {
      console.log('Success');
    });
  };

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

      </div>
    </div>
  );
}

export default App;
