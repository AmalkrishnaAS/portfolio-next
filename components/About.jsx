import React from 'react'
import Title from './Title'
import Cube from './Box'
const About = () => {
  return (
  <div className='mt-20 bg-base-500 p-4 tracking-wide'  id='about'>
    <Title text='About'></Title>
    <div className="content p-3   mx-auto flex flex-col md:flex-row-reverse md:w-[80%]">
        <div className="cube">
            <Cube></Cube>

        </div>
        <div className="text ">
            <p className='text-gray-400 text-lg text-center w-full md:w-[70%] mdz:text-left p-6 md:text-2xl'
            style={{
                lineHeight:'1.7',
            }}
            >
              A young undergraduate student pursuing Computer
Science & Engineering from the National Institute of
Technology Calicut, interested in Web development in
search of opportunities to contribute to the industry and
add to his experience and skillset. Proficient in C/C++ with
a Beginner level Expertise in Python and Javascript.
            </p>
        </div>
    </div>
  </div>
  )
}

export default About