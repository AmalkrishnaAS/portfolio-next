import React from 'react'
import Cube from 'react-3d-cube'

const Box = () => {
  const images = [
    'react.png',
    'python.png',
    'node.png',
    'tailwind.png',
    'express.png',
    'mysql.png'
  ]
  return (
   
    <div
    style={{
      width: 250,
      height: 250,
      transform: 'rotateZ(0deg)',
      transformOrigin: 'center center',
      margin: '20 auto',
    }}
    className=' hover:animate-none focus:animate-none  mx-auto mt-20 mb-12 md:mb-0 md:mt-0 box-rotate'
  >
    <Cube size={250} index="front"
    
    >
      {
        images.map((image, index) => {
          return (
            <div key={index} className=" bg-gradient-to-tr from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] w-[250px] h-[250px] ">
              <img src={image} className='p-3' alt=""/>
            </div>
          )
        }
        )
        
      }
     
    </Cube>
  </div>
      
  )
}

export default Box