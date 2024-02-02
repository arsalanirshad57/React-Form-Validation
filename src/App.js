import React from 'react'
import Registration from './Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Login"
import Signup from './Signup'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
