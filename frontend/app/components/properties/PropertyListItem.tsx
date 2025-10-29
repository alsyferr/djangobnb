import Image from 'next/image'
import React from 'react'

const PropertyListItem = () => {
  return (
    <div className='cursor-pointer'>
        <div className=" relative overflow-hidden aspect-square rounded-xl">
            <Image 
                fill 
                src='/beach_1.jpg' 
                sizes='(max-width: 768px) 768px, (max-width: 1200px):768px, 768px' 
                className='hover:scale-110 object-cover transition h-full w-full'
                alt='property'
            />
        </div>

        <div className="mt-2">
            <p className="text-lg font-bold">Beach House</p>
        </div>

        <div className='mt-2'>
            <p className="text-sm text-gray-500"><strong>$250 </strong></p>
        </div>

    </div>
  )
}

export default PropertyListItem