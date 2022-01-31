import './App.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../Login/Login'
import useToken from './useToken'

function App() {
  const { token, setToken } = useToken()

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
