import { useState } from 'react'
// import Home from './pages/Home';
import Pages from './pages/Pages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <h1>helo</h1>
        {/* <Home/> */}
        <Pages/>
      </div>     
    </>
  )
}

export default App
