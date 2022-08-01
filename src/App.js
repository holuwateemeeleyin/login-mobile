import React from 'react'
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SignUp from './Pages/SignUp';
import Signin from './Pages/SignIn';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </div>
  );
}

export default App;