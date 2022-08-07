import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from '../SocialLogin'
export default function Signin() {
    
    const [mail, setMail] = useState('')
    const [pwd, setPwd ] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <div className='signup-container'>
            <h3>Log In</h3>
            <p>Please login to continue using our app </p>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label>Email Address</label>
                    <input
                        type='text'
                        placeholder='Enter your mail'
                        value={mail}
                        onChange={(e)=>setMail(e.target.value)}
                    />
                </div>
                <div className='form-input'>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='*********'
                        value={pwd}
                        onChange={(e)=>setPwd(e.target.value)}
                    />
                </div>
                <div className='forget'>Forget Password?</div>
                <button className='button'>
                    Log In
                </button>
                <div className='already'>Don't have an account? <Link to='/signup'> Create one</Link></div>
            </form>
            <SocialLogin/>
        </div>
    )
}
