import { useEffect, useState } from 'react'
import './App.css'

// movie key- e4d787e5

const API_URL='http://www.omdbapi.com?apikey=e4d787e5'
function App() {
  const [count, setCount] = useState(0)
  const movieSearch=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
    const data=await response.json()
    console.log(data.Search)
  }
  useEffect(()=>{
    movieSearch('frozen')
  },[])

  return (
    <>
      
    </>
  )
}

export default App
