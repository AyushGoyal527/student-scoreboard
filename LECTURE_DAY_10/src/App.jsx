import { useState } from 'react'
import './App.css'
import NavBar from'./Components/NavBar.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome to Context</h1>
      <NavBar />
    </div>
  )
}
