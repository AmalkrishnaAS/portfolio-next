import React from 'react'
import Badge from './Badge'
import Link from 'next/link'
import { LinkIcon } from '@heroicons/react/outline'
import { FaRegEye } from 'react-icons/fa'

const ProjectCard = ({item}) => {
  return (
    <div className='border-2 border-orange-400 rounded-md max-w-[580px] p-4'>
    <h2 className='font-bold text-4xl font-mono text-orange-500'>
        {item.title}
    </h2>
    <div className='flex gap-x-3 flex-wrap gap-y-3 my-4'>
   {item.tags.map((data)=>{
    return (
      <Badge data={data} />
    )
   })}

    </div>
    <p className='text-xl p-2'>
    {item.desc}
    </p>
    <div>
      <div className='m-3 flex p-2 space-x-4'>
      <a href={item.links.contribute} className='border-2 hover:scale-105 transition-all duration-100 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 w-10 h-10 flex justify-center items-center rounded-full '>
            <LinkIcon className='h-6 w-6   ' aria-hidden='true' />
            

          </a>
          <a href={item.links.preview} title={item.links.preview?'Preview':'No Preview available'} target='_blank' className='hover:scale-105 transition-all duration-100 border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 w-10 h-10 flex justify-center items-center rounded-full '>
            <FaRegEye className='h-6 w-6   ' aria-hidden='true' />
            

          </a>
      </div>

    </div>

    </div>
  )
}

export default ProjectCard