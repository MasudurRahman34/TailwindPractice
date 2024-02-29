import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import NavLink from './Navlink';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid' 
function Header() {
    const navLinks=[
        {
            title: "About",
            href:'about'
        },
        {
            title: "Project",
            href:'project'
        },
        {
            title: "Contact",
            href:'contact'
        }
        
      
    ]
    const [navbarOpen, setNavbarOpen]=useState(false);
  return (
   
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-90'>
    <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link to='/' className='text-white text-2xl md:text-5xl font-semibold'>Logo</Link>
        <div className='mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                    <button onClick={()=>setNavbarOpen(true)} className='flex flex-item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'>
                        <Bars3Icon className='h-5 w-5'/>
                    </button>
                ) : (
                    <button onClick={()=>setNavbarOpen(false)} className='flex flex-item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'>
                        
                        <XMarkIcon className='h-5 w-5'/>
                    </button>
                )
            }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex md:flex-row md:space-x-8 p-4'>
                {
                    navLinks.map((link,key)=>(
                        <li key={key}>
                            <NavLink href={link.href} title={link.title}/>
                        </li>
                    ))
                }
            </ul>

        </div>
        
    </div>
    </nav>
    
  )
}

export default Header;