import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div >

        <div className= 'flex mr-0   lg:flex lg:justify-center lg:items-center'>
            <div className='mt-20'>
                <h1 className= ' text-gray-400 text-opacity-100 text-3xl'>PROJECT</h1>
                <h1 className='text-gray-900 text-opacity-100 text-3xl font-bold'>Lorum</h1>
                <button className='border-2 border-gray-300 hover:transition-300 transform hover:scale-105 px-3 py-3 space-x-6 mt-10 mr-5 '> ← </button>
                <button className='border-2 border-gray-300 hover:transition-300 transform hover:scale-105 px-3  py-3 mt-10 space-x-2 '> → </button>
            </div>
            <div className='flex flex-col '>
               <Image src="/Rectangle .png" width={770}height={827} alt='pic here'  className='  w-auto h-auto lg:w-[770] lg:h-[827] lg:ml-20 lg:mt-20 opacity-100' />
            <Link href="/work">  <button className=' items-start  mb-20 ml-20 pb-2 px-10 text-gray-400 text-opacity-100  bg-white hover: border-gray-200 border-2 mt-0 pt-0 trnsition-400 transform hover:scale-105'>veiw project   → </button></Link> 
            </div>
        </div>
      
    </div>
  )
}

export default Hero
