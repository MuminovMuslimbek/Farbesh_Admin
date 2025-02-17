import React from 'react'
import Header from '../components/Header'

function MainLayout({ children }) {
    return (
        <div className='flex'>
            <Header />
            <div className='p-[50px]'>
                {children}
            </div>
        </div>
    )
}

export default MainLayout