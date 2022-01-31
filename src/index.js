import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App.js'
import reportWebVitals from './reportWebVitals'
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='preferences' element={<Preferences />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
