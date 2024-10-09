import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Http from './Http'
import Home from './Home'
import Oneaudio from './Oneaudio'
import Navbar from './Navbar'
import Signup from './Signup'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/http' element={<Http/>}/>
        <Route path='/one/:i' element={<Oneaudio/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App