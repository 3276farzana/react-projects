import { useState } from 'react'
import './App.css'

//it's a component
//props allow us to send dynamic data to components
const Person=(props)=>{
  return(
    <>
    {/* by this we can call person component for multiple person  */}
    <h1>name:{props.name}</h1>
    <h1>last name: {props.last_name}</h1>
    <h1>Age:{props.age}</h1>
    </>
  )
}
function App() {

  return (
    <>
    <div className='App'>
      {/* component can call by it's name
      if you want to render a component it's first letter should be in uppercase  */}
      <Person name={"joey"} last_name={"trivari"} age={67} />
      <Person name={"chandler"} last_name={"goto"} age={68} />

    </div>
    </>
  )
}

export default App
