import React from 'react'
import Image from 'next/image'

const photo = () => {
  return (
    <div className=' sm:flex-col sm:justify-center md:w-[1170px] md:flex  justify-center 33'>
      <div>
        <h1 className='text-gray-400 text-opacity-100 text-4xl mt-10 ml-10 font-semibold'>photo</h1>
        <h1 className='text-gray-900 text-opacity-100 font-bold mt-3 ml-10 text-4xl mb-5'>Gallery</h1>
      </div>
      <div className='flex space-x-3 justify-center items-center'>
      
        <div  className='flex  flex-col lg:flex-row lg:flex-wrap lg:space-x-5 lg:ml-2'>
        <div className='w-[210] h-[260] bg-gray-400 mb-4 pr-2  ml-5'></div>
            <Image src="/g1.png" width={210} height={260} alt='' className='mb-4 ' />
            <Image src="/g2.png" width={210} height={260} alt='' className='mb-4' />
            <Image src="/g3.png" width={210} height={260} alt='' className='mb-4' />
            <Image src="/g4.png" width={210} height={260} alt='' className='mb-4' />
            <Image src="/g5.png" width={210} height={260} alt='' className='mb-4' />
            <Image src="/g6.png" width={210} height={260} alt='' className='mb-4' />
            <Image src="/g7.png" width={210} height={260} alt='' className='mb-4' />
            <Image src="/g8.png" width={210} height={260} alt='' className='mb-4' />
            <Image src="/g9.png" width={210} height={260} alt='' className='mb-4' />
            </div>
      </div>
    </div>
  )
}

export default photo
