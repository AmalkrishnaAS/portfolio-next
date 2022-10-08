import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import { useState } from 'react'
import {useEffect} from 'react'
import {useRef} from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null)
  const [navbg, setNavbg] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setNavbg(true)
      } else {
        setNavbg(false)
      }
    })
  }, [])
  const [menuOpen, setMenuOpen] = useState(false)
  return(
    
        <div
        className='bg-base-500 ' 

        >
          <Head>
            <title>
              Amalkrishna A S | Home
            </title>
          </Head>
         
          <Navbar
          navbg={navbg}
          setNavbg={setNavbg}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
           />
          <Menu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          ></Menu>
         
            <Component {...pageProps} />
         
        
   
   
    
    

  </div>
  
 

  

  )

}

export default MyApp
