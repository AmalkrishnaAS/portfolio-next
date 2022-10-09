import React from 'react'

const Loader = () => {
  return (
    <div className='mx-auto'><span class="w-2 h-2 ml-2 rounded-full bg-orange-200 inline-block animate-flash"></span><span class="w-2 h-2 ml-2 rounded-full bg-orange-200 inline-block animate-flash [animation-delay:0.2s]"></span><span class="w-2 h-2 ml-2 rounded-full bg-orange-200 inline-block animate-flash [animation-delay:0.4s]"></span></div>
  )
}

export default Loader