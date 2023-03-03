import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
  return (
    <div className='Register'>
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
        <label>Username</label>
        <input type="mail" placeholder='Enter your username...' />
        <label>E-mail</label>
        <input type="mail" placeholder='Enter your mail...' />
        <label>Password</label>
        <input type="Password" placeholder='Enter your password...' />
        <button className='RegisterButton'>Register</button>
      </form>
      <button className='LoginButton'>
        <Link className='link' to='/login'>Login</Link>
      </button>
    </div>
  )
}

export default Register