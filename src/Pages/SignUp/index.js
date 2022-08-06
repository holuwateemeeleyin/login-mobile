import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { MdFacebook } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { BiShow, BiHide } from 'react-icons/bi'

export default function SignUp() {
  const userRef = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [pwdType, setPwdType] = useState(true)
  
  const eye = <BiShow size='25'/>
  const hide = <BiHide size='25'/>
  
  // useEffect(()=>{
  //   userRef.current.focus()
  // })

  const handleSubmit =(e)=>{
    e.preventDefault()
    setName('')
    setEmail('')
    setPwd('')
  }
  
  console.log(pwdType);
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
              type={pwdType ? 'password':'text'}
              value={pwd}
              onChange={(e)=> setPwd(e.target.value)}
            />
            <i onClick={()=> setPwdType(!pwdType)}>{ pwdType ? eye : hide }</i>
          </div>
        </div>
        <button className='button'>
          Create account
        </button>
        <div className='already'>Already have an account? <Link to='/signin'> Sign in</Link></div>
      </form>
      <div className='continue'> 
        <span style={{color:'#969696', marginRight:'0.5em', letterSpacing:'-0.2em' }}>--------------------------</span> 
        <span> or continue with </span>
        <span style={{color:'#969696', marginLeft:'0.5em', letterSpacing:'-0.2em'}}>--------------------------</span>
      </div>
      <div className='social'>
        <div className='facebook'><MdFacebook color='#003cff' size='25'/> Facebook</div>
        <div className='facebook'> <FcGoogle size='25'/> Google</div>
      </div>
    </div>
  )
}
