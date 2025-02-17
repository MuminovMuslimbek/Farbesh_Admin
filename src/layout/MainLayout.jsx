import React from 'react'
import Header from '../components/Header'

function MainLayout({ children }) {
    return (
        <div className='flex select-none'>
            <Header />
            <div className='mx-auto p-[50px] w-full max-w-[1000px]'>
                {children}
            </div>
        </div>
    )
}

export default React.memo(MainLayout);