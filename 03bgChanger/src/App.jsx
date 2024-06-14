import { useState } from "react";
function App() {
  const [color, setColor] = useState('yellow');
  return (
    <>
      <div className="w-full h-screen duration-250" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">test
          <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-xl ">
            <button onClick={()=>{setColor('red')}} className="outline-none px-4 py-1 rounded-lg text-white shadow-md" style={{backgroundColor:'red'}}>red</button>
            <button onClick={()=>{setColor('blue')}} className="outline-none px-4 py-1 rounded-lg text-white shadow-md" style={{backgroundColor:'blue'}}>blue</button>
            <button onClick={()=>{setColor('green')}} className="outline-none px-4 py-1 rounded-lg text-white shadow-md" style={{backgroundColor:'green'}}>green</button>
            <button onClick={()=>{setColor('black')}} className="outline-none px-4 py-1 rounded-lg text-white shadow-md" style={{backgroundColor:'black'}}>black</button>   
          </div>
        </div>
      </div>
    </>
  )
}

export default App
