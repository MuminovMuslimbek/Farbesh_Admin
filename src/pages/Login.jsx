import React, { useContext, useState } from 'react'
import RightLogin from '../assets/rightLogin.svg'
import EyesOpen from '../assets/eyesOpen.svg'
import EyesClosed from '../assets/eyesClosed.svg'
import { LoginPasswordContext, LoginUsernameContext } from '../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const { logUsername } = useContext(LoginUsernameContext)
  const { logPass } = useContext(LoginPasswordContext)
  const [show, setShow] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function validate() {
    if (!username) {
      alert('Iltimos usernameni kiriting!')
      return false
    }
    if (!password) {
      alert('Iltimos passwordni kiriting!')
      return false
    }
    if (username != logUsername) {
      alert('Usernameni notog`ri kiritdingiz iltimos qayta urinib ko`ring!')
      return false
    }
    if (password != logPass) {
      alert('Passwordni notog`ri kiritdingiz iltimos qayta urinib ko`ring!')
      return false
    }
    return true
  }

  function handleSubmit(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    let UserLogin = {
      username, password
    }

    axios.post('https://farbesh.up.railway.app/api/auth/login/', UserLogin)
      .then(res => {
        console.log(res)
        if (res.data) {
          localStorage.setItem('user', JSON.stringify(res.data))
        }
        navigate('/')
      })
      .catch(err => {
        console.log(err)
      })

    setUsername('')
    setPassword('')
  }

  return (
    <div className='flex flex-col justify-center items-center bg-[#151513] h-screen select-none'>
      <div className='w-full max-w-[400px]'>
        <div className='flex flex-col gap-[3px]'>
          <p className='font-medium text-[14px] text-white'>Welcome back to</p>
          <h1 className='font-bold text-[#FCE000] text-[20px]'>FarBesh</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-[10px] mt-[30px]'>
          <label className='flex flex-col gap-[7px] text-[#FCE000] text-[14px]' htmlFor="username">Username:
            <input onChange={(e) => { setUsername(e.target.value) }} value={username} className='px-[10px] py-[7px] border rounded-md placeholder:text-white placeholder:text-[13px]' id='username' placeholder='Username..' type="text" />
          </label>
          <label className='relative flex flex-col gap-[7px] text-[#FCE000] text-[14px]' htmlFor="username">Password:
            <input onChange={(e) => { setPassword(e.target.value) }} value={password} className='px-[10px] py-[7px] border rounded-md placeholder:text-white placeholder:text-[13px]' id='username' placeholder='Password..' type={show ? 'password' : 'text'} />
            <img onClick={() => { setShow(!show) }} className='right-[14px] bottom-2 z-10 absolute w-[20px] cursor-pointer' src={show ? EyesOpen : EyesClosed} />
          </label>
          <button className='flex justify-center items-center gap-[7px] hover:gap-[10px] bg-[#FCE000] mt-[7px] py-[5px] rounded-md active:scale-95 transition-[0.3s] cursor-pointer'>Log in <img src={RightLogin} /></button>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Login);