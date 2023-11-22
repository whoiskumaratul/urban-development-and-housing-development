import React from 'react'
import { useNavigate } from 'react-router-dom'
 

function Footer() {

  const navigate = useNavigate();
  return (
    <div>

    
     <div className="flex grid lg:grid-cols-4 gap-2 bg-blue-600 m-0 pb-6">
  <div className="  h-auto md:grid-cols-6 text-left pl-5 pr-5 text-white text-sm">
    <div className="border-b-4 border-b-yellow-400 text-white h-10 mt-auto mb-auto text-sm p-2 text-center "> Important Links</div>

   <ul className="pt-5 pl-8 font-semibold text-xs/[10px] space-y-2 list-disc " >
   <li className="hover:text-yellow-400" ><a href="#">National Portal of India</a></li>
   <li className="hover:text-yellow-400"><a href="#">State Portal of Jharkhand</a></li>
   <li className="hover:text-yellow-400"><a href="#">CM of Jharkhand</a></li>
   <li className="hover:text-yellow-400"><a href="#">Jharkhand Police</a></li>
   <li className="hover:text-yellow-400"><a href="#"> Mukhyamantri Jansamvad</a></li>
   <li className="hover:text-yellow-400"><a href="#">IPRD</a></li>
   <li className="hover:text-yellow-400"><a href="#">JUIDCO Ltd.</a></li>

     </ul>
    
  </div>



  <div className="  h-auto md:grid-cols-6 text-left pl-5 pr-5 text-white text-sm">
    <div className="border-b-4 border-b-yellow-400 text-white h-10 mt-auto mb-auto text-sm p-2 text-center "> Useful Links</div>

   <ul className="pt-5 pl-8 font-semibold text-xs/[10px] space-y-2 list-disc" >
   <li className="hover:text-yellow-400" ><a href="#">Ministry of Urban Development</a></li>
   <li className="hover:text-yellow-400"><a href="#">Ministry of Housing and Urban Poverty Alleviation</a></li>
      <li className="hover:text-yellow-400"><a href="#">Smart City</a></li>
   <li className="hover:text-yellow-400"><a href="#"> AMRUT</a></li>
   <li className="hover:text-yellow-400"><a href="#">NULM</a></li>
   <li className="hover:text-yellow-400"><a href="#">Swachh Bharat Mission - URBAN</a></li>

     </ul>
    
  </div>

  <div className="  h-auto md:grid-cols-6 text-left pl-5 pr-5 text-white text-sm">
    <div className="border-b-4 border-b-yellow-400 text-white h-10 mt-auto mb-auto text-sm p-2 text-center "> Department</div>

   <ul className="pt-5 pl-8 font-semibold text-xs/[10px] space-y-2 list-disc" >
   <li className="hover:text-yellow-400" ><a href="#">About Us</a></li>
   <li className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate('/ulbinformation')} >ULB Contacts</li>
   <li className="hover:text-yellow-400 cursor-pointer " onClick={() => navigate('/terms')} > Terms & Conditions </li>
   <li className="hover:text-yellow-400 cursor-pointer " onClick={() => navigate('/eservice')} >   Services </li>
   <li className="hover:text-yellow-400"><a href="#">Schemes</a></li>
   <li className="hover:text-yellow-400 cursor-pointer " onClick={() => navigate('/videos')}> Videos </li>

     </ul>
    
  </div>

  <div className="  h-auto md:grid-cols-6 text-left pl-5 pr-5 text-white text-sm">
    <div className="border-b-4 border-b-yellow-400 text-white h-10 mt-auto mb-auto text-sm p-2 text-center "> Contact</div>

   <ul className="pt-5 pl-8 font-semibold text-xs/[10px] space-y-2 text-center" >
   <li className="hover:text-yellow-400" ><a href="#"> Urban Development & Housing Department</a></li>
   <li className="hover:text-yellow-400"><a href="#">4th Floor Project Building,</a></li>
   <li className="hover:text-yellow-400"><a href="#">Dhurwa Ranchi</a></li>
   <li className="hover:text-yellow-400"><a href="#">Phone No.: 0651-2400962</a></li>
   <li className="hover:text-yellow-400"><a href="#">Fax No.: 0651-2400962</a></li>
   <li className="hover:text-yellow-400"><a href="#">eMail ID: ud.secy@gmail.com </a></li>
 
   
     </ul>
    
  </div>
   
  </div>
    </div>
  )
}

export default Footer