import React, { useState } from 'react'

function Prac() {
    const[counter,setCounter]=useState(0);
    const add=()=>{
        setCounter(prev=>prev+1)
    }
    const remove=()=>{
        setCounter(prev=>prev-1)
    }
  return (
    <div>
        <h1>value is: {counter}</h1>
      <button onClick={add}>increment</button>
      <button onClick={remove}>decrement</button>
    </div>
  )
}

export default Prac
