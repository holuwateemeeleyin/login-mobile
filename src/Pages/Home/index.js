import React from 'react'
import pic from '../../Assets/mobile.png'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()
  return (
    <div className='home'>
      <img src={pic} alt='home' width='60%'/>
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
    </div>
  )
}
