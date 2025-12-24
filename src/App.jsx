import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App(){
  const [name,setName] = useState("Kanishka")
  const [occ,setOcc] = useState("Student")
  function nameChange(){
    setName("KanishkaChandrasekar")
    setOcc("student")
    console.log(name)
  }
  return (
  <Dashboard name={name} occ={occ} nameChange={nameChange}/>
  )
  }

export default App                                                    
