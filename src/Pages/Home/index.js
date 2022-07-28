import React from 'react'
import pic from '../../Assets/mobile.png'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className='home'>
      <img src={pic} alt='home' width='60%'/>
      <div className='home-text'>
        <h4> Welcome </h4>
        <p> Create an account and access thousand of cool stuffs</p>
        <button className='home-button'>
          Get Started
        </button>
        <div className='already'>Already have an account? <Link to='/signin'>Sign in</Link></div>
      </div>
    </div>
  )
}
