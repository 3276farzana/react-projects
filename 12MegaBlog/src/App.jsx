import { useEffect, useState } from 'react';
import {useDispatch} from'react-redux';
import authService from './appwrite/auth_service.js';
import {login,logout} from './store/authSlice.js';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  //if you want to fetch or ask something from database or network
  //make a loading state, with it you can make a conditional rendering 
  //using an if-else. if it loading is true will show a loading icon. if false will show the data

  const[loading,setLoading]=useState(true);
  //dispatch use for using redux with react
  const dispatch=useDispatch();

  //with useEffect ask the service if it's locked in or not
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
          <Header/>
          <main>
            TODO: <Outlet/>
          </main>
          <Footer/>
      </div>
    </div>
  ):null
}

export default App
