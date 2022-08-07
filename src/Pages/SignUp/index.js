import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { BiShow, BiHide } from 'react-icons/bi'
import SocialLogin from '../SocialLogin'
import {motion} from 'framer-motion'

export default function SignUp() {
  // const userRef = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [pwdType, setPwdType] = useState(true)
  
  const eye = <BiShow size='20' color='#969696'/>
  const hide = <BiHide size='20' color='#969696'/>
  
  // useEffect(()=>{
  //   userRef.current.focus()
  // })

  const handleSubmit =(e)=>{
    e.preventDefault()
    setName('')
    setEmail('')
    setPwd('')
  }
  
  // console.log(pwdType);
  return (
    <motion.div
      className='signup-container'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:1}}
    >
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
            placeholder='Enter your name'
          />
        </div>
        <div className='form-input'>
          <label>Email Address</label>
          <input
            type='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='Enter your email'
          />
        </div>
        <div className='form-input'>
          <label>Enter Password</label>
          <div className='pass-wrapper'>
            <input 
              type={pwdType ? 'password':'text'}
              value={pwd}
              onChange={(e)=> setPwd(e.target.value)}
              placeholder='********'
            />
            <i onClick={()=> setPwdType(!pwdType)}>{ pwdType ? eye : hide }</i>
          </div>
        </div>
        <button className='button'>
          Create account
        </button>
        <div className='already'>Already have an account? <Link to='/signin'> Sign in</Link></div>
      </form>
      <SocialLogin/>
    </motion.div>
  )
}
