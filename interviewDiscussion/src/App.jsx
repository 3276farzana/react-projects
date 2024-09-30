import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//remount means the function will run again line by line
function App() {
  const [value, setValue] = useState(1)
  // const [multiValue,setMultiValue]=useState(1)
  let multiValue=value*5
  const multipli=()=>{
    // setMultiValue(multiValue*5)
    setValue(value+1)
  }

  return (
    <>
      <h2>main value:{value}</h2>
      <h2>multiplied value:{multiValue}</h2>
      <button onClick={multipli}>Clicked to multi by 5</button>
    </>
  )
}

export default App
