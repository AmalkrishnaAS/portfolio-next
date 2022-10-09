import React from 'react'
import {XIcon } from '@heroicons/react/outline'
import {motion} from 'framer-motion'
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa'


const Menu = ({
    menuOpen,
    setMenuOpen
}) => {
   
        const icons = [
            {
                name: 'Facebook',
                icon: <FaFacebook
                className='text-white hover:text-base-500 transition-all duration-150'
                size={30}
                 />,
                link: 'https://www.facebook.com/amalkrishna.as.39',
            },
            {
                name: 'Twitter',
                icon: <FaTwitter
                className='text-white hover:text-base-500 transition-all duration-150'
                size={30} />,
                link: 'https://twitter.com/AmalkrishnaAS7',
            },
            {
                name: 'Linkedin',
                icon: <FaLinkedin 
                className='text-white hover:text-base-500 transition-all duration-150'
                size={30} />,
                link: 'https://www.linkedin.com/in/amalkrishna-as/',
            },
            {
                name: 'Github',
                icon: <FaGithub
                className='text-white hover:text-base-500 transition-all duration-150'
                size={30} />,
                link: 'https://www.github.com/AmalkrishnaAS',
            }
        ]
        const routes=[
            {
                name:'Home',
                function:()=>{
                    //scroll to top
                    window.scrollTo(0,0)
                },
             
            },
            {
                name:'About',
                function:()=>{
                    //scroll to about
                    window.scrollTo(0,document.getElementById('about').offsetTop)
                }
            },
            {
                name:'Contact',
                function:()=>{
                    //scroll to contact
                    window.scrollTo(0,document.getElementById('contact')?.offsetTop)
                }
            },
            {
                name:'Resume',
                function:()=>{
                    //download file
                    window.open('/resume.pdf')

            }
            }
        ]
            
        const menuVariants={
            hidden:{
                //expand
                opacity:0,
              
                x:'100%',
            },
            visible:{
                opacity:1,
                
             
                x:0,
    
        

                
                transition:{
                    duration:0.35,
                    staggerChildren: 0.07,
                     delayChildren: 0.2
                }
            }
        }
  return (
    <>
    {menuOpen&&<motion.div className='h-screen w-screen  bg-gradient-to-tr from-orange-300 to-primary-600 z-50 fixed flex flex-col justify-center items-center text-4xl '
    variants={menuVariants}
    initial='hidden'
    animate='visible'
    >
        <div className='absolute top-5 right-5 '
           
        >
        <XIcon className='text-white h-9  transition-all duration-150 hover:text-base-500 cursor-pointer' size={30}
         onClick={()=>setMenuOpen(false)} 
         />
            
        </div>
        <ul className='text-center'>
            {
                routes.map((route,index)=>{
                    return (
                        <motion.li className='p-3 mb-3 cursor-pointer  'onClick={
                            ()=>{
                                route.function()
                                setMenuOpen(false)
                            }
                        }
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            key={index}
            transition={{duration:0.2}}
            >
                <p  className='tracking-wide font-semibold text-white uppercase hover:text-base-500 transition-all duration-150 '>{route.name}</p>
            </motion.li>
                    )
            }
            )
            }
            
          
        </ul>
        <div className="social flex space-x-3 absolute bottom-6">
            {icons.map(icon => (
                <motion.a
                    key={icon.name}
                    href={icon.link}
                    className='flex items-center p-3'
                    whileHover={{ scale: 1.2,
                    transition: {
                        duration: 0.35
                    } 
                    }}
                >
                    {icon.icon}
                </motion.a>
            ))}

        </div>
       

        

    </motion.div>}
    </>
  )
}

export default Menu