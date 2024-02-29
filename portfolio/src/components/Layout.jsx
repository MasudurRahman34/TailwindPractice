import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'


function Layout() {
    return (
        <>
            <main className='flex min-h-screen flex-col bg-black'>
                <div className="container mx-auto px-12 py-4">
                    <Header />
                        <Outlet />
                    <Footer />
                </div>

            </main>
        </>

    )
}

export default Layout