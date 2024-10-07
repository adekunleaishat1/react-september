import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Http from './Http'
import Home from './Home'
import Oneaudio from './Oneaudio'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/http' element={<Http/>}/>
        <Route path='/one/:i' element={<Oneaudio/>}/>
      </Routes>
    </div>
  )
}

export default App