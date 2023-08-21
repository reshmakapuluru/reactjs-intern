import React from 'react';
import './App.css'

function App(){
  const students=[
    {
      "firstname":"divya",
      "lastname":"chowdary",
      "gender":"female"
        
    },
    {
      "firstname":"bharath",
      "lastname":"reddy",
      "gender":"male"
        
    },
    {
      "firstname":"sireesha",
      "lastname":"reddy",
      "gender":"female"
        
    },
    {
      "firstname":"harshit",
      "lastname":"chowdary",
      "gender":"male"
        
    },
  ]
  const [count,setcount]=React.useState(1)
  function inc(){
    setcount(count+1)
  }
  function dec(){
    setcount(count-1)
  }
   
  const [todos,settodo]=React.useState(['dog','goat','crow','camel'])
  var x=(document.getElementById('d1')as HTMLButtonElement).value
  function xyz(){
    settodo([...todos,x])
  }

  return (
    <>
    
    <h1>{count}</h1>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>decrement</button>
      <table border={2}>
        <thead>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Gender</th>
        </thead>
        <tbody>
          {
            students.map((a)=>{
              return <tr style={(a.gender=='female')?{backgroundColor:'pink'}:{backgroundColor:'lightblue'}}><td>{a.firstname}</td><td>{a.lastname}</td><td>{a.gender}</td></tr>
            })
          }
        </tbody>
      </table>
      <input type='text' id='d1'></input>
      <button onClick={xyz}>click me</button>
      {
        todos.map((todo)=>{
          return <li>{todo}</li>
        })
      }
    </>
  )
}

export default App
