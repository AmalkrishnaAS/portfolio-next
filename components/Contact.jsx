import React from 'react'
import Title from './Title'
import { LocationMarkerIcon, MailIcon, PaperAirplaneIcon, PhoneIcon } from '@heroicons/react/outline'
import { FaLocationArrow } from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
    
    

  }
  return (
    <div className='w-screen ' id='contact'>
        <Title text={'Contact Me'} />
        <div className='my-4 flex flex-wrap justify-center items-center gap-3'>
        
        <div className='flex justify-center items-center gap-3 flex-wrap'>
          <div className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 w-10 h-10 flex justify-center items-center rounded-full '>
            <LocationMarkerIcon className='h-6 w-6   ' aria-hidden='true' />
            

          </div>
          <p className='text-gray-300'>NIT Calicut</p>

        </div>
        
        <div className='flex justify-center items-center gap-3 flex-wrap '>
          <div className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 w-10 h-10 flex justify-center items-center rounded-full '>
            <PhoneIcon className='h-6 w-6   ' aria-hidden='true' />
            

          </div>
          <p className='text-gray-300'>+91 7736 256 574</p>

        </div>
        
        <div className='flex justify-center items-center gap-3 flex-wrap'>
          <div className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 w-10 h-10 flex justify-center items-center rounded-full '>
            <MailIcon className='h-6 w-6   ' aria-hidden='true' />
            

          </div>
          <p className='text-gray-300'>amalkrishna_b200729cs@nitc.ac.in</p>

        </div>
        </div>
       <form action="" onSubmit={handleSubmit} className='p-4 text-xl max-w-[600px] mx-auto  flex flex-col gap-6 justify-center items-center'>
       <div class="relative z-0 w-full mx-auto">
    <input type="text" id="floating_standard" class="text-lg block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " />
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
</div>
       <div class="relative z-0 w-full mx-auto">
    <input type="email" id="floating_standard" class="text-lg block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " />
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
</div>
       <div class="relative z-0 w-full mx-auto">
    <input type="text" id="floating_standard" class="text-lg block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " />
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
</div>
       <div class="relative z-0 w-full mx-auto">
    <textarea id="floating_standard" class="text-lg block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer min-h-32" placeholder=" " /> 
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg">Message</label>
</div>
<button  className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 px-8 py-2 rounded-xl font-mono flex space-x-2'>
    <PaperAirplaneIcon className='h-6 w-6' />
<p>
    SEND
</p>
</button>
       </form>
    </div>
  )
}

export default Contact