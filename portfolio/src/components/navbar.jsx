import React from 'react';
import {Outlet, Link} from 'react-router-dom';

function Navbar() {
  return
   (
    <>
   <nav>
    <div>
        <Link href='/' className='text-5xl text-white font-semibold'>LOGO</Link>
    </div>
        
    </nav>
 <Outlet/>
 </>
  )
 
}

export default Navbar;