import React from 'react'
import pic from '../../Assets/login.svg'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Home() {

  const navigate = useNavigate()
  return (
    <motion.div 
      className='home'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:1}}
    >
      <img src={pic} alt='home' className='home-image'/>
      <div className='home-text'>
        <h4> Welcome </h4>
        <p> Create an account and access thousand of cool stuffs</p>
        <button 
          className='home-button'
          onClick={()=> navigate('/signup')}
        >
          Get Started
        </button>
        <div className='already'>Already have an account? <Link to='/signin'>Sign in</Link></div>
      </div>
    </motion.div>
  )
}
