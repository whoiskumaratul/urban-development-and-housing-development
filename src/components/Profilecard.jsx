import React from 'react'
import IMAGES from '../image/Image'
import Title from './react-helmet/Title'



function Profilecard() {
  return (
    <div>

    <Title title="Profile Card  | UDHD "/>
    
<div className="flex grid lg:grid-cols-3 gap-6 m-5  ">
<div className="bg-white h-auto md:grid-cols-6  shadow-lg shadow-indigo-500/40 pb-5">
  <div className="bg-green-700  text-white  h-16 mt-auto mb-auto p-5 text-lg"> Mr. Vinay Kumar Choubey<div>Secretary </div>
    
  </div>
  
  <div className='bg-green-700 h-11' >
  <img className="ml-auto mr-auto  relative mt-auto rounded-full border-4 border-white w-24 h-24 " src={IMAGES.image3} alt="a" />
  </div>

  <h3 className='text-center mt-16 font-semibold text-sm' >
Urban Development & Housing Department<br />
 0651-2400962 <br />
  ud.secy@gmail.com 
</h3>
  </div>

  
  <div className="bg-white h-auto md:grid-cols-6  shadow-lg shadow-indigo-500/40 pb-5">
  <div className="bg-[#DB8B0B]  text-white  h-16 mt-auto mb-auto p-5 text-lg"> Mr. Amit Kumar<div>Director </div>
    
  </div>
  

  
  <div className='bg-[#DB8B0B] h-11' >
  <img className="ml-auto mr-auto  relative mt-auto rounded-full border-4 border-white w-24 h-24 " src={IMAGES.image4} alt="a" />
  </div>


   <h3 className='text-center mt-16 font-semibold text-sm' >
  State Urban Development Agency <br />
  0651-2446640 <br />
 suda.goj@gmail.com
</h3>
  </div>

  <div className="bg-white h-auto md:grid-cols-6  shadow-lg shadow-indigo-500/40 pb-5">
  <div className="bg-blue-600  text-white  h-16 mt-auto mb-auto p-5 text-lg">Mr. Aditya Kumar Anand<div>Director </div>
    
  </div>
  
  <div className='bg-blue-600   h-11' >
  <img className="ml-auto mr-auto  relative mt-auto rounded-full border-4 border-white w-24 h-24 " src={IMAGES.image5} alt="a" />
  </div>

   <h3 className='text-center mt-16 font-semibold text-sm' >
Urban Development & Housing Department<br />
0651-2401955<br />
director.ma.goj@gmail.com  
</h3>
  </div>
  </div>

  
   
  </div>
     
  )
}

export default Profilecard