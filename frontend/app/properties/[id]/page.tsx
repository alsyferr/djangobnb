import React from 'react'
import Image from 'next/image'
import ReservationSidebar from '@/app/components/properties/ReservationSidebar'

const PropertyDetailPage
 = () => {
  return (
    <main className="max-w-[1500] mx-auto px-6 pb-6">
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
            <Image 
                src="/beach_1.jpg" 
                alt="Property Image" 
                fill 
                className="object-cover w-full h-full"
            />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4 ">
            <div className="py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">Beautiful Beach House</h1>
                <span className="mb-6 block text-lg text-gray-600">
                    4 guests - 2 bedrooms - 1 bathroom
                </span>
                <hr className="" />
                
                <div className="py-6 flex items-center space-x-4">
                    <Image 
                        src="/profile_pic_1.jpg" 
                        alt="Host Avatar" 
                        width={50} 
                        height={50} 
                        className="rounded-full"
                    />
                    <p><strong>John Doe</strong> is your host</p>
                </div>
                <hr className="" />

                <p className="mt-6 text-lg ">
                    This beautiful beach house offers stunning ocean views, modern amenities, and a cozy atmosphere perfect for your next vacation. Enjoy the spacious living area, fully equipped kitchen, and private balcony to soak in the sun.
                </p>

            </div>
            <ReservationSidebar />
        </div>
    </main>
  )
}

export default PropertyDetailPage
