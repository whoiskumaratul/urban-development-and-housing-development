import React from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import IMAGES from '../../image/Image'
import Footer from '../Footer'
import Copyright from '../Copyright'
import Title from '../react-helmet/Title'
// import {Helmet} from 'react-helmet';

function Aboutus() {
  return (
    <div>
{/* 
    <div>
      <Helmet>
       <title>About us | UDHD </title>

      </Helmet>
    </div> */}

    <Title title="About us | UDHD" />
    

    <Schemesandprogramscommon header="About Us" />

    <div className="flex grid lg:grid-cols-1  bg-white   mt-0 pt-5 ml-5 mr-5 pl-3 pb-6">
    
    <p>Urban Development and Housing Department, Jharkhand provides civic amenities in urban areas and extends support through Urban local bodies to the deprived section of the society as well as shares the responsibility of insuring planned development of the city and its outskirt. Induction of the twelfth schedule in the constitution through 74th Constitutional amendment has brought various urban activities and services such as urban planning including town planning, regulation of land use, planning for economic and social development, safeguarding the interests of weaker sections of society, providing civic amenities, promotion of cultural, education and aesthetic aspects etc. within the purview of urban local bodies.

    <br />
    <br />
            It is, therefore, inevitable for the urban local bodies to render services as per the requirement and necessity of the citizen and town in pursuance to the provisions as contemplated in the constitution. There are 50 urban local bodies consisting of 9 Municipal Corporations, 18 Nagar Parishad , 22 Nagar Panchayats and 01 Notified Areas Committees (NAC), responsible for implementation of the Urban development activities in their respective areas in the state of Jharkhand. </p>

    </div>   



     
<div className="flex grid lg:grid-cols-1 gap-6  w-[500px] ml-auto mr-auto m-5   ">
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
  </div>
 
   
<div className="flex grid lg:grid-cols-2  gap-6 m-5   ">
<div className="bg-white h-auto md:grid-cols-6  shadow-lg shadow-indigo-500/40 pb-5">
  <div className="bg-[#DB8B0B]  text-white  h-16 mt-auto mb-auto p-5 text-lg"> Mr.   Amit Kumar<div>Director, SUDA </div>
    
  </div>
  
  <div className='bg-[#DB8B0B] h-11' >
  <img className="ml-auto mr-auto  relative mt-auto rounded-full border-4 border-white w-24 h-24 " src={IMAGES.image4} alt="a" />
  </div>

  <h3 className='text-center mt-16 font-semibold text-sm' >
  Mr. Aditya Kumar Anand<br />
 0651-2400962 <br />
  ud.secy@gmail.com 
</h3>
  </div>

  

  
  <div className="bg-white h-auto md:grid-cols-6  shadow-lg shadow-indigo-500/40 pb-5">
  <div className="bg-blue-600  text-white  h-16 mt-auto mb-auto p-5 text-lg"> Mr. Aditya Kumar Anand<div>Director, DMA </div>
    
  </div>
  

  <div className='bg-blue-600   h-11' >
  <img className="ml-auto mr-auto  relative mt-auto rounded-full border-4 border-white w-24 h-24 " src={IMAGES.image5} alt="a" />
  </div>

  <h3 className='text-center mt-16 font-semibold text-sm' >
  State Urban Development Agency <br />
  0651-2446640 <br />
 suda.goj@gmail.com
</h3>
  </div>

 
  </div>

     
<Footer />
<Copyright />
  
    
    </div>
  )
}

export default Aboutus