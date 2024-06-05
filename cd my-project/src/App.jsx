import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>login form</h1>
      <div>
           USERNAME <input name="user name" placeholder="enter your name"/><br/>
           PASSWORD <input name="password" placeholder="enter your password"/><br/>
            <button >submit</button>
            </div>
       </div>
    </>
  )
}

export default App
