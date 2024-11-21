import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const rabta = () => {
  return (
    <div className=' flex-col w-auto md:flex md:flex-row md:justify-center md:items-center md:mb-20 md:mr-10'>
      <div className='mr-30 pr-10'>
        <h1 className='text-gray-400 text-opacity-100 text-4xl  mt-10 '>contact</h1>
        <h1 className='text-gray-900 text-opacity-100 text-2xl font-bold  py-3'>Information</h1>
        <h2 className=' text-gray-900 text-opacity-100 text-lg  mt-5 py-3'>Company Name</h2>
        <h2 className='text-gray-400 text-opacity-100 text-sm'>1234 sample street Austin Taxas 67401</h2>
        <h2 className='text-gray-900  mt-5 text-lg'>512 333 2222</h2>

      <h3 className='text-gray-400 text-opacity-100 text-sm mb-6'>  sampleemail@gmail.com</h3>
      <Link href="/phone">  <button className='bg-gray-900 py-3 px-3 rounded-lg hover:border-gray-400 border-2 border-opacity-100 text-gray-400 hover:transition-300 transform hover:scale-105'>Contact Us</button></Link>
      </div>
      <div className='w-[600px]'>
       <Image src="/image 14.png" width={1250} height={501}alt='' className=' ml-2 md:ml-10'/>
      </div>
    </div>
  )
}

export default rabta;