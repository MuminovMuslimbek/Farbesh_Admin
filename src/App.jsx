import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import Settings from './pages/Settings'
import Users from './pages/Users'

export const LoginUsernameContext = createContext(null)
export const LoginPasswordContext = createContext(null)

function App() {
  const [logUsername, setLogUsername] = useState('admin')
  const [logPass, setLogPass] = useState('admin')
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('UserLogin')) {
      navigate('/login')
    }
  }, [])

  return (
    <LoginUsernameContext.Provider value={{ logUsername, setLogUsername }}>
      <LoginPasswordContext.Provider value={{ logPass, setLogPass }}>
        <Routes>
          <Route index element={<MainLayout><Home /></MainLayout>} />
          <Route path='/:id' element={<MainLayout><Detail /></MainLayout>} />
          <Route path='/users' element={<MainLayout><Users /></MainLayout>} />
          <Route path='/settings' element={<MainLayout><Settings /></MainLayout>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </LoginPasswordContext.Provider>
    </LoginUsernameContext.Provider>
  )
}

export default App