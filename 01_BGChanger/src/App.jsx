import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <>
    <div className="w-full h-screen text-white flex justify-center"
    style={{backgroundColor:color}}
    >
      <div className="w-[60%] h-[70px] bg-white flex relative top-10 rounded-4xl items-center text-black">
        <button
        onClick={() => setColor("green")}
        className='bg-green-500 w-20 rounded-4xl h-10 ml-8 border-2'>Green</button>
        <button
        onClick={() => setColor("blue")}
        className='bg-blue-700 w-20 rounded-4xl h-10 ml-2 border-2'>Blue</button>
        <button
        onClick={() => setColor("yellow")}
        className='bg-yellow-400 w-20 rounded-4xl h-10 ml-2 border-2'>Yellow</button>
        <button
        onClick={() => setColor("black")}
        className='bg-black w-20 rounded-4xl h-10 ml-2 text-white border-2'>Black</button>
        <button
        onClick={() => setColor("white")}
        className='bg-white w-20 rounded-4xl h-10 ml-2 border-2'>White</button>
        <button
        onClick={() => setColor("purple")}
        className='bg-purple-600 w-20 rounded-4xl h-10 ml-2 border-2'>Purple</button>
        <button
        onClick={() => setColor("teal")}
        className='bg-amber-500 w-25 rounded-4xl h-10 ml-2 border-2'>Teal</button>
        <button
        onClick={() => setColor("orange")}
        className='bg-orange-300 w-20 rounded-4xl h-10 ml-2 border-2'>Orange</button>
        <button
        onClick={() => setColor("red")}
        className='bg-red-600 w-20 rounded-4xl h-10 ml-2 border-2'>Red</button>
        <button
        onClick={() => setColor("cyan")}
        className='bg-cyan-400 w-20 rounded-4xl h-10 ml-2 border-2'>Cyan</button>
        <button
        onClick={() => setColor("pink")}
        className='bg-pink-500 w-20 rounded-4xl h-10 ml-2 border-2'>Pink</button>
        <button
        onClick={() => setColor("indigo")}
        className='bg-indigo-700 w-20 rounded-4xl h-10 ml-2 border-2'>Indigo</button>
      </div>
    </div>
   </>
  )
}

export default App
