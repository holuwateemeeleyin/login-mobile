import React, { useEffect, useState } from 'react'
import Home from './Pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import SignUp from './Pages/SignUp';
import Signin from './Pages/SignIn';
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 2000)
    return()=> clearTimeout(timer)
  }, [])

  if (loading){
    return <div className='loading'></div>
  }

  return (
    <AnimatePresence>
      <div className='app'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;