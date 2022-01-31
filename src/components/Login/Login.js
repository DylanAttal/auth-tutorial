import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form>
        <label htmlFor='username'>
          <p>Username</p>
          <input id='username' type='text' />
        </label>
        <label htmlFor='password'>
          <p>Password</p>
          <input id='password' type='password' />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
