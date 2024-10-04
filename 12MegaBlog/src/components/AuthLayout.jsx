// it's for how to protect page or route
//by it we can decide if it's children need to render or not

import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'

function Protected({children,authentication=true}) {
  const navigate=useNavigate()
  const [loader,setLoader]=useState(true)
  //first we will ask from store that if user is loged in or not
  const authStatus= useSelector(state=>state.auth.status)

  //useEffect will tell us in which page it will send to us. and in which field its changing and should i check second time or not

  useEffect(()=>{
    if (authentication && authStatus !== authentication) {
      navigate('/login')
    } else if(!authentication && authStatus !== authentication){
      navigate('/')
    }
    //or
    // if (authStatus===true) {
    //   navigate('/')
    // } else if(authStatus===false){
    //   navigate('/login')
    // }
    setLoader(false);
  },[authStatus,navigate,authentication])
  return loader? <h1>Loading...</h1>: <>{children} </>      
    
}

export default Protected
