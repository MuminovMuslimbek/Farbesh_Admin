import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route index element={<MainLayout><Home /></MainLayout>} />
      <Route path='/:id' element={<MainLayout><Detail /></MainLayout>} />
      <Route path='/settings' element={<MainLayout><Settings /></MainLayout>} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App