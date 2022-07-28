import React from 'react'
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SignUp from './Pages/SignUp';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;