import React, { useEffect } from 'react'
import { useState } from 'react'

function Counter() {
    const[counter,setCounter]=useState(0);
    // useEffect allow us to do something on some kind of effect or an event
    // useEffect(()=>{
    //     // alert('reload')
    //     setCounter(100)
    //this code will run continuously if i give counter in the dependency because setcounter changingi it's intial value to 100 then counter is again calling it
    // },[counter])
    //so
    useEffect(()=>{
        setCounter(20)
    },[])
  return (
    <div>
      <button onClick={()=> setCounter((prevCount)=>prevCount-1) }>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  )
}

export default Counter
