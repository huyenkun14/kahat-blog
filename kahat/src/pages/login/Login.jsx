import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>E-mail</label>
            <input type="mail" placeholder='Enter your mail...' />
            <label>Password</label>
            <input type="Password" placeholder='Enter your password...' />
            <button className='loginButton'>Login</button>
        </form>
        <button className='registerButton'>
          <Link className='link' to='/register'>Register</Link>
        </button>
    </div>
  )
}

export default Login