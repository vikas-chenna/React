import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //assignment

  // function addValue(){
  //   if(count < 20) setCount(count + 1)
  //   else return;
  // }
  // function removeValue(){
  //   if(count > 0 ) setCount(count - 1)
  //   else return;
  // }

  //problem i have written multiple setcount but because of fiber it only send update once
  // to overcome this problem we use callback fun in that what callback do it will send one by one, one fun executed then it send another not like above one
  // function addValue(){
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  // }

  //here we are passing callback fun to executed multiple times   
  function addValue(){
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
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
