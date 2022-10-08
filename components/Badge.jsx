import React from 'react'

const Badge = ({data}) => {
  return (
    <div className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 px-4 py-1 rounded-3xl'>
        <h6 className='font-mono'>
            {data +' </>'}
        </h6>
    </div>
  )
}

export default Badge