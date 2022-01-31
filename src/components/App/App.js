import './App.css'
import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <Outlet />
    </div>
  )
}

export default App
