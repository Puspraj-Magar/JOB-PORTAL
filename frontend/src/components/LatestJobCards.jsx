
import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer'>
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
        <div>
          <h1 className='font-bold text-lg my-2 '>Job Title</h1>
          <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, quae.</p>
        </div>
      </div>
      <div>
        <Badge className={'text-blue-700 font-bold'} variant="ghost" >Full Time</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost" >12 positions</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost" >25 LPA</Badge>
      </div>
    </div>
  )
}

export default LatestJobCards
