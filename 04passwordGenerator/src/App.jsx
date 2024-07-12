import { useCallback, useEffect, useRef, useState } from "react"

function App() {
 const[length,setLength]=useState(8);
 const[numberAllow,setNumberAllow]=useState(false);
 const[characterAllow,setCharacterAllow]=useState(false);
 const[password,setPassword]=useState('');

  // for ref
  const passwordRef=useRef(null);
 const passwordGenerator=useCallback(()=>{
  let pass="";
  let string="ABCDEFGHIJKJMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllow) string+='0123456789';
  if (characterAllow) string+='}{|.,·])[/_¿º§"*-+(!&#';

  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*string.length+1);
    pass+=string.charAt(char);
  }
  setPassword(pass);
 },[length,numberAllow,characterAllow,setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(9,15);
    passwordRef
    window.navigator.clipboard.writeText();
  },[password])
 useEffect(()=>{
  passwordGenerator()
 },[numberAllow,length,characterAllow,passwordGenerator])
  return (
    <>
      <div className="bg-gray-500 w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-400">test
        <h3 className="text-xl text-white text-center my-3">Password Generator</h3>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="bg-white outline-none w-full px-3 py-2" placeholder="Password" readOnly ref={passwordRef}/>
          <button className="bg-blue-300 outline-none text-white p-2 shrink-0.5" onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={95} value={length} className="cursor-pointer" onChange={(e)=>{
              setLength(e.target.value)
            }} />
            <label>Lenght:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllow} className="cursor-pointer" onChange={()=>{setNumberAllow((prev)=>!prev)}} />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={characterAllow} className="cursor-pointer" onChange={()=>{setCharacterAllow((prev)=>!prev)}} />
            <label>Character</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
