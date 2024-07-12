import React, { useCallback, useState } from 'react'

export default function Prac() {
    const[password,setPassword]=useState('');
    const[length,setLength]=useState(8);
    const[number,setNumber]=useState(false);
    const[charcater,setCharacter]=useState(false);

    const paswordGen=useCallback(()=>{
        let pass='';
        let str="ABCDEFGHIJKJMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let num='0123456789';
        let char='}{|.,·])[/_¿º§"*-+(!&#';
        if(number){
            str+=num;
        }
        if(charcater){
            str+=char;
        }
        for (let i = 1; i < length; i++) {
            const element = Math.floor(Math.random()*str.length+1);
            pass+=element;
        }
        setPassword(pass);
    },[])
  return (
    <div>
      <h1>password generator</h1>
    </div>
  )
}
