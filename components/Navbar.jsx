import React from 'react'
// import style from '../styles/navbar.module.css'
import {DownloadIcon,MenuIcon} from '@heroicons/react/outline'
import {motion} from 'framer-motion'
const Navbar = ({menuOpen,setMenuOpen,navbg}) => {
    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
        {
            name: 'Resume',
            path: '/resume.pdf'
        }
    ]
  return (
    <nav className={`bg-${navbg?'gradient-to-r from-base-300 to-base-500 ':'transparent'} h-16 fixed top-0 w-screen z-10`}>
        <div className='flex '>
            <div className='flex-1'>
                
            <img  src="/a.png" className=' h-16 w-16 p-3' alt="" />
            </div>
            <ul className='hidden justify-between items-center mr-3 sm:flex '>
                {routes.map(route => (
                    <motion.li key={route.name} className='p-3 cursor-pointer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <p href={route.path} className='tracking-wide font-semibold text-white uppercase hover:text-primary-500 transition-all duration-150  '>{route.name}</p>
                    </motion.li>
                    
                    
                ))}

               
                
            </ul>
            <div className='h-16 w-16 rounded-full p-3 sm:hidden mr-3 cursor-pointer' onClick={()=>setMenuOpen(true)}>
                <MenuIcon className=' transition-all duration-150 ml-2  text-white mt-2 h-9' />

            </div>
       

        </div>
    </nav>
  )
}

export default Navbar