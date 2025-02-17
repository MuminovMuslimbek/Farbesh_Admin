import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.webp'
import Menu from '../assets/menu.svg'
import LogOut from '../assets/LogOut.png'

function Header() {
    return (
        <div className='flex flex-col justify-between items-center bg-[#151513] pb-[24px] rounded-r-[20px] w-auto max-w-[103px] min-h-screen'>
            <Link to='/' ><img className='rounded-r-[20px] w-[103px] h-[103px]' src={Logo} /></Link>
            <div className='flex flex-col items-center gap-[5px] w-full'>
                <img className='w-[40px]npm h-[40px] active:scale-95 transition-[0.3s] cursor-pointer run dev' src={LogOut} />
                <button className='bg-white px-[21px] py-[16px] rounded-full w-full max-w-[56px] active:scale-95 transition-[0.3s] cursor-pointer'><img className='w-[24px] h-[24px]' src={Menu} /></button>
            </div>
        </div>
    )
}

export default React.memo(Header)