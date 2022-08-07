import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from '../SocialLogin'
import { BiShow, BiHide } from 'react-icons/bi'
import { motion } from 'framer-motion'

export default function Signin() {

    const [mail, setMail] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdType, setPwdType] = useState(true)

    const eye = <BiShow size='20' color='#969696' />
    const hide = <BiHide size='20' color='#969696' />

    const handleSubmit = (e) => {
        e.preventDefault()
        setMail('')
        setPwd('')
    }
    return (
        <motion.div
            className='signup-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
        >
            <h3>Log In</h3>
            <p>Please login to continue using our app </p>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label>Email Address</label>
                    <input
                        type='text'
                        placeholder='Enter your mail'
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>
                <div className='form-input'>
                    <label>Password</label>
                    <div className='pass-wrapper'>
                        <input
                            type={pwdType ? 'password' : 'text'}
                            placeholder='*********'
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />
                        <i onClick={() => setPwdType(!pwdType)}>{pwdType ? eye : hide}</i>
                    </div>
                </div>
                <div className='forget'>Forget Password?</div>
                <button className='button'>
                    Log In
                </button>
                <div className='already'>Don't have an account? <Link to='/signup'> Create one</Link></div>
            </form>
            <SocialLogin />
        </motion.div>
    )
}
