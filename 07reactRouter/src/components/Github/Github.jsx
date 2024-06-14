import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Github() {
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/3276farzana')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data);
  //   })
  // },[])
  const data= useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-400 text-xl p-4 text-white'>
      Github followers: {data.followers}
      <img src='data.avatar_url' alt='git picture' width={300}/>
    </div>
  )
}

export default Github;

export const githubInfoLoader= async ()=>{
  const response=await fetch('https://api.github.com/users/3276farzana')
  return response.json()
}
