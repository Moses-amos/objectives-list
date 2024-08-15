import { useState } from 'react'
import './App.css'
import AddObjective from './Components/AddObjective'
import Objectives from './Components/Objectives'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddObjective />
    <Objectives />
  </>
  )
}

export default App
