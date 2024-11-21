import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gray-900  text-gray-300  '>
       <div className='flex flex-col md:flex-row justify-between items-center'>
     
        <div> 
        <Image  src= "/logo1.png" width={145} height={94} alt='' className='mt-10 text-gray-50  '/>
        </div>
        <div> 
            <h1 className='mt-10 text-lg mb-4'>Information</h1>
            <ul className='text-sm justify-center'>
            <Link href="/">    <li className=' py-2'>Main</li></Link>
            <Link href="/photo">    <li className= 'py-2'>Gallery</li></Link>
            <Link href="/work">   <li className='py-2'>Projects</li></Link>
            <Link href="/card">   <li className='py-2'>Certification</li></Link>
            <Link href="/rabta">   <li className='pb-2'>Contacts</li></Link>
            </ul>
        </div>``
        <div>
            <h1 className='text-lg mt-10 mb-6  justify-center'>contacts</h1>
            <div >
           <div  className='flex justify-center space-x-2 mb-2'> <IoLocationOutline />

                <h2 className='text-wrap text-center text-sm'>1234 sample street</h2></div>
               <div> <h2 className='text-sm text-center mb-4'> Modal colony karachi</h2>
                </div>
              <div className='flex justify-center space-x-2 mb-4'>  <MdOutlineLocalPhone />
                <h2>092 0330 567</h2></div>
               <div className='flex justify-center space-x-2 text-sm'>
                <CgMail className='size-6' />
                <h2>sample@gmail.com</h2>
                </div> 

            </div>

        </div>
        <div>
            <h1 className='text-lg mb-16'>
                Social Media
            </h1>
            <div className='flex  rounded-lg space-x-4 mt-0 '>
            <FaFacebook  className='size-5 rounded-lg  '/>
            <FaTwitterSquare className='size-5 rounded-lg' />
            <FaLinkedin className='size-5 rounded-lg' />
            <FaWhatsapp  className='size-5 rounded-lg'/>  </div>
        </div>
       </div>
       <footer className='text-center py-4 border-2 border-t border-gray-400 border-opacity-100'>
        <h1>  All Copyright Reserved</h1>
       </footer>
    </div>
  )
}

export default Footer
