import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import './App.css'

function App() {

  return (
    <>
    <UserContextProvider>
      all of  us are waiting for his mercy
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
