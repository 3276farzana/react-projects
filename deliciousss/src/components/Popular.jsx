import React, { useEffect } from 'react'

function Popular() {
  // const apiKey = import.meta.env.VITE_API_KEY; 

  useEffect(()=>{
    getPopular();
  },[])
  //use async to wait untill data are fetch
  const getPopular= async()=>{
    const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`)
    const data=await  api.json()
    console.log(data)
  }
  return (
    <div>
      Popular dishes
    </div>
  )
}

export default Popular
