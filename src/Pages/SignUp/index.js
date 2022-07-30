import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const userRef = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  
  useEffect(()=>{
    userRef.current.focus()
  })
  return (
    <div className='signup-container'>
      <h3> Sign Up</h3>
      <p>Please fill in the details and create account</p>
      <form>
        <div className='form-input'>
          <label>Full Name</label>
          <input
            ref={userRef} 
            type='text'
            value={name}
            onChange={(e)=> e.target.value}
          />
        </div>
        <div className='form-input'>
          <label>Email Address</label>
          <input 
            type='email'
            value={email}
            onChange={(e)=> e.target.value}
          />
        </div>
        <div className='form-input'>
          <label>Enter Password</label>
          <input 
            type='password'
            value={pwd}
            onChange={(e)=> e.target.value}
          />
        </div>
        <button className='button'>
          Create account
        </button>
        <div className='already'>Already have an account? <Link to='/'> Sign in</Link></div>
      </form>
      <div className='continue'>_______________ or continue with ______________ </div>
    </div>
  )
}
