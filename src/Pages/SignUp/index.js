import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { MdFacebook } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { BiShow } from 'react-icons/bi'

export default function SignUp() {
  const userRef = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const eye = <BiShow size='25'/>
  // useEffect(()=>{
  //   userRef.current.focus()
  // })

  const handleSubmit =(e)=>{
    e.preventDefault()
    setName('')
    setEmail('')
    setPwd('')
  }
  
  return (
    <div className='signup-container'>
      <h3> Sign Up</h3>
      <p>Please fill in the details and create account</p>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>Full Name</label>
          <input
            // ref={userRef} 
            type='text'
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className='form-input'>
          <label>Email Address</label>
          <input
            type='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className='form-input'>
          <label>Enter Password</label>
          <div className='pass-wrapper'>
            <input 
              type='password'
              value={pwd}
              onChange={(e)=> setPwd(e.target.value)}
            />
            <i>{eye}</i>
          </div>
        </div>
        <button className='button'>
          Create account
        </button>
        <div className='already'>Already have an account? <Link to='/signin'> Sign in</Link></div>
      </form>
      
    </div>
  )
}
