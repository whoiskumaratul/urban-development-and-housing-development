import React from 'react'
import IMAGES from '../image/Image'

function Logo() {
  return (
    <div>
    
{/*     
    <div className="flex grid grid-cols-2 gap-2 m-5 ">
  <div className=" md:grid-cols-6 text-center">
 <img src={IMAGES.image1} alt="JHK Logo " />
  </div>
  <div className=" md:grid-cols-2">
  <p className=' font-semibold ' >Government of Jharkhand</p>
  <h1 className='text-2xl font-bold ' >Urban Development & Housing Department</h1>
  
  </div>

  </div> */}

  <div className="flex">
  <div className="flex-none m-3 ml-4">
  <img src={IMAGES.image1} className='w-14 ' alt="JHK Logo " />
  </div>
  <div className="flex-initial  ...">
  <p className=' font-semibold text-blue-900 mt-5 text-xs ' >Government of Jharkhand</p>
   
  <h1 className=' text-xl font-bold text-blue-900 font-serif ' >Urban Development & Housing Department</h1>
  
   
  </div>
  <div className="flex-initial w-32 ...">
    
  </div>
</div>
  
  </div>
  )
}

export default Logo