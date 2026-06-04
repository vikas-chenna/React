import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
      <h1>This Tag is Created my Own Function</h1>
      <h1>Vikas chenna</h1>
    </>
  )
}

const renderATag = React.createElement(
  "a",
  {href:"https://youtube.com",target:"_blank"},
  "this is A tag Click here to visit Youtube"
)

const renderPTag = React.createElement(
  "p",
  {id:"Ptag",class:"pcls"},
  "this is P Tag creaated my OWN"
)

createRoot(document.getElementById('root')).render(
  
    renderPTag  
  
)
