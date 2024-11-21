import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Ph = () => {
  return (
    <div className=' w-auto mt-10 my-5  lg:w-[1170px] lg:h-[603px]  lg:justify-center lg:ml-10 opacity-100'>
        <h1 className='text-gray-400 text-opacity-100 text-3xl '>Contact Us</h1>
        <div className='  lg:flex lg:justify-center '>
            <div className=' w-auto h-auto flex flex-col lg:w-[391px] lg:h-[369px] space-y-3 '>
                <input type="text" placeholder='Name* ' className='bg-gray-300 text-opacity-100  py-5 rounded-lg pl-4 bg-opacity-100 mt-4'/>
              <input type="Email"  placeholder='Email* ' className='bg-gray-300 text-opacity-100 py-5 rounded-lg  pl-4 bg-opacity-100'/>
        <input type="text" placeholder='Interested IN ' className='bg-gray-300 text-opacity-100  py-5 rounded-lg pl-4 bg-opacity-100' />
            <input type="text"placeholder='message* ' className='bg-gray-300 text-opacity-100 pb-20  py-5 rounded-lg pl-4 bg-opacity-100' />
            </div>
            <div>
               < Image src="/image06.png" width={749}height={369}alt='' className=' w-auto h-auto  md:w-[]749 md:h-[369]'/> 
            </div>
        </div>
        <Link href="/rabta"><button className='bg-gray-900 text-gray-300 text-opacity-100 p-3 rounded-lg mt-10 border-2 hover:border-gray-400 hover:transition-300 transform hover:scale-105'> Send Email → </button></Link>
      
    </div>
  )
}

export default Ph 