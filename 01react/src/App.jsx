import { useState } from 'react'

function App() {
  const[counter,setCounter]=useState(12);

  const addValue=()=>{
      if(counter<20)
        {
        setCounter(counter+1);
        console.log(`clicked ${setCounter}`);
      }
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1);
    console.log(`clicked ${setCounter}`);
    }

  }
  return (
    <>
    <h1>heloo</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button><br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App;
