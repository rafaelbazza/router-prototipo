import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/Nav' 

//Outlet para renderizar pelo Router somente o que esta no componente Outlet 

function App() {
 

  return (
    <div className="App">
     <NavBar/>
      <h1>React Router </h1>
      <Outlet/>
      <p>Footer</p>
     
    </div>
  )
}

export default App
