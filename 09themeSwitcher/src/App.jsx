import { useEffect, useState } from 'react'
import {ThemeProvider} from './contexts/Theme.js'
import './App.css'
import ThemeBtn from './components/ThemeBtn.jsx';
import Card from './components/Card.jsx';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  //jehetu light r dark theme method theme.js e define kora hoy nai ai jonno exactly same name er function lekhle sei function method e inject korbe
  const lightTheme=()=>{
    setThemeMode('light')
  }
  const darkTheme=()=>{
    setThemeMode('dark')
  }

  // actual change in theme

  useEffect(()=>{
    let changeTheme= document.querySelector('html')
    //it's because i wanna add new value, and i don't know what is the current value now in html that's why we did remove the value
    changeTheme.classList.remove('dark','light')
    changeTheme.classList.add(themeMode)
  },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* Theme Btn */}
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                {/* card */}
                <Card/>
            </div>
        </div>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
