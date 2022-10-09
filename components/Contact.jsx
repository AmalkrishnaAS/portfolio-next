import React from 'react'
import Title from './Title'
import { LocationMarkerIcon, MailIcon, PaperAirplaneIcon, PhoneIcon } from '@heroicons/react/outline'
import { FaLocationArrow } from 'react-icons/fa'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import Loader from './Loader'
const Contact = () => {
    const form = useRef()
  const service_id=process.env.NEXT_PUBLIC_SERVICE_ID
  const template_id=process.env.NEXT_PUBLIC_TEMPLATE_ID
  const public_key=process.env.NEXT_PUBLIC_PUBLIC_KEY
  const [loading,setLoading]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('Form submitted')
    //send email using emailjs
   const res= await emailjs.sendForm(service_id,template_id,form.current,public_key)
    console.log(res)
    setLoading(false)
    e.target.reset()

    
    

  }
  return (
    <div className='w-screen ' id='contact'>
        <Title text={'Contact Me'} />
        <div className='my-4 flex flex-wrap justify-center items-center gap-3'>
        
        <div className='flex justify-center items-center gap-3 flex-wrap flex-col md:flex-row'>
          <div className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 w-10 h-10 flex justify-center items-center rounded-full '>
            <LocationMarkerIcon className='h-6 w-6   ' aria-hidden='true' />
            

          </div>
          <p className='text-gray-300'>NIT Calicut</p>

        </div>
        
        <div className='flex justify-center items-center gap-3 flex-wrap flex-col md:flex-row '>
          <div className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 w-10 h-10 flex justify-center items-center rounded-full '>
            <PhoneIcon className='h-6 w-6   ' aria-hidden='true' />
            

          </div>
          <p className='text-gray-300'>+91 7736 256 574</p>

        </div>
        
        <div className='flex justify-center items-center gap-3 flex-wrap flex-col md:flex-row'>
          <div className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 w-10 h-10 flex justify-center items-center rounded-full '>
            <MailIcon className='h-6 w-6   ' aria-hidden='true' />
            

          </div>
          <p className='text-gray-300'>amalkrishna_b200729cs@nitc.ac.in</p>

        </div>
        </div>
       <form action="" ref={form} onSubmit={handleSubmit} className='p-4 text-xl max-w-[600px] mx-auto  flex flex-col gap-6 justify-center items-center'>
       <div class="relative z-0 w-full mx-auto">
    <input required={true} name='name' type="text" id="floating_standard" class="text-lg block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " />
    <label for="name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
</div>
       <div class="relative z-0 w-full mx-auto">
    <input type="email" required={true} name='email' id="floating_standard" class="text-lg block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " />
    <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
</div>
       <div class="relative z-0 w-full mx-auto">
    <input type="text" required={true} name='subject' id="floating_standard" class="text-lg block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " />
    <label for="subject" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
</div>
       <div class="relative z-0 w-full mx-auto">
    <textarea id="messasge" name='message' class="text-lg block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer min-h-32" placeholder=" " /> 
    <label for="message" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg">Message</label>
</div>
<button  className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 px-8 py-2 rounded-xl font-mono flex space-x-2'>
   { !loading? <><PaperAirplaneIcon className='h-6 w-6' />
<p>
 SEND   
</p>
</>:<Loader />

}
</button>
       </form>
    </div>
  )
}

export default Contact