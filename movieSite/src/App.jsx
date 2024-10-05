import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

// movie key- e4d787e5

const API_URL='http://www.omdbapi.com?apikey=e4d787e5'
const movie1={
  "Title":"Amazing Spiderman Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const movieSearch=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
    const data=await response.json()
    // console.log(data.Search)
    setMovies(data.Search)
  }
  useEffect(()=>{
    movieSearch('frozen')
  },[])

  return (
    <>
      <div className='app'>
        <h1>MovieFun</h1>
        <div className='search'>
          {/* in react input need two things 1-value,2-onChange  */}
          <input 
            placeholder='Search for Movies'
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
          />
          <img src={SearchIcon} alt="search" onClick={()=>movieSearch(searchTerm)} />
        </div>

        {
          movies?.length>0 ? (
            <div className='container'>
              {/* <MovieCard movie1={movies[0]}/> */}
              {movies.map((movie)=>(
                <MovieCard movie1={movie}/>
              )
              )}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
        }

        
      </div>
    </>
  )
}
export default App
