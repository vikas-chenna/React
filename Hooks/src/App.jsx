import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue(){
    if(count < 20) setCount(count + 1)
    else return;
  }
  function removeValue(){
    if(count > 0 ) setCount(count - 1)
    else return;
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Number is {count}</h3>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
