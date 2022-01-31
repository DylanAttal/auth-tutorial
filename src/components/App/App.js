import './App.css'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../Login/Login'

function App() {
  const [token, setToken] = useState()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <Outlet />
    </div>
  )
}

export default App
