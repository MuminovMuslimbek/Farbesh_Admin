import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from '../assets/logo.webp'
import Menu from '../assets/menu.svg'
import LogOut from '../assets/LogOut.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    function LogOutFun() {
        let isLogOut = confirm('Rostdanham chiqib ketmoqchimisiz?')
        if (isLogOut) {
            navigate('/login')
            localStorage.removeItem('UserLogin')
        }
    }

    return (
        <div className="relative flex flex-col justify-between items-center bg-[#151513] pb-[24px] rounded-r-[20px] w-auto max-w-[103px] min-h-screen">
            <Link to="/">
                <img className="rounded-r-[20px] w-[103px] h-[103px]" src={Logo} />
            </Link>
            <div className="relative flex flex-col items-center gap-[10px] w-full">
                <img
                    onClick={LogOutFun}
                    className="ml-[7px] w-[35px] h-[35px] active:scale-95 transition-[0.3s] cursor-pointer"
                    src={LogOut}
                />
                <button onClick={() => setIsOpen(!isOpen)} className="z-20 bg-[#FCE000] px-[16px] py-[15px] rounded-full w-full max-w-[56px] active:scale-95 transition-[0.3s] cursor-pointer" > <img className="w-[24px] h-[24px] cursor-pointer" src={Menu} /> </button>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, x: "-100%", y: "100%" }}
                    animate={{ scale: isOpen ? 1 : 0.5, opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "-100%", y: isOpen ? "0%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bottom-[70px] left-[110px] absolute flex flex-col items-start gap-[7px] bg-[#151513] shadow-lg p-4 rounded-lg w-[130px]"
                >
                    <button onClick={() => setIsOpen(false)} className="top-[10px] absolute self-end text-md text-white cursor-pointer">✕</button>
                    <Link to="/" className="text-md text-white">Drivers</Link>
                    <Link to="/users" className="text-md text-white">Users</Link>
                    <Link to="/settings" className="text-md text-white">Settings</Link>
                </motion.div>
            </div>
        </div>
    )
}

export default React.memo(Header)