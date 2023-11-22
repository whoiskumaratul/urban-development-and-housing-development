import React from 'react'
import {BrowserRouter as Router, Route, useNavigate } from 'react-router-dom'
import { MdSettingsSuggest, MdChevronRight } from 'react-icons/md';
import { AiOutlineWifi } from 'react-icons/ai';
import Title from './react-helmet/Title';
 

function Schemesandprograms() {

  const navigate = useNavigate()

  return (
    <div>

    <Title title="Schemes and Programs | UDHD" />
    <div className=" grid lg:grid-cols-3 gap-5 m-5  ">

<div className= "h-60 md:grid-cols-6 shadow-lg bg-white shadow-indigo-500/40"><div className=" border-b-4 border-blue-700  text-black h-10 mt-auto mb-auto  p-2 pl-5 text-sm "><MdSettingsSuggest className='float-left mt-0.5 ml-1  pb-[3px] text-xl text-blue-500 ' />&nbsp;Schemes & Programs </div>

  <ul className="text-gray-600 mt-5 text-xs  space-y-2 pl-3">
<li className="hover:underline hover:text-orange-600 cursor-pointer"  onClick={() => navigate('/smartcity')}> <MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Smart City </li>
<li className="hover:underline hover:text-orange-600 cursor-pointer" onClick={() => navigate('/swachhbharatmission')}><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Swachh Bhart Mission</li>
<li className="hover:underline hover:text-orange-600 cursor-pointer " onClick={() => navigate('/nationalurbanlivelihoodmission')}><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>National Urban Livelihood Mission</li>

<li className="hover:underline hover:text-orange-600 cursor-pointer " onClick={() => navigate('/pradhanmantriawasyojna')}><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Pradhan Mantri Awas Yojna</li>
<li className="hover:underline hover:text-orange-600 cursor-pointer " onClick={() => navigate('/amrut')}><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>AMRUT</li>
<li className="hover:underline hover:text-orange-600 cursor-pointer " onClick={() => navigate('/namamigange')}><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Namami Gange</li>

    </ul>   

</div>
 <div className= "h-60 md:grid-cols-6 shadow-lg bg-white shadow-indigo-500/40"><div className="  border-b-4 border-blue-700 bg-white text-black h-10 mt-auto mb-auto pl-5  p-2 text-sm"><MdSettingsSuggest className='float-left mt-0.5 ml-1  pb-[3px] text-xl text-blue-500 ' />&nbsp;Schemes & Programs </div>

  <ul className="text-gray-600 mt-5 pl-3 text-xs  space-y-2">
<li  className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Urban Water Supply </li>
<li className="hover:underline hover:text-orange-600 cursor-pointer" onClick={() => navigate('/urbantransport')} ><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Urban Transport </li>
<li  className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Sewerage and Drainage</li>
<li className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Rajiv Awas Yojna</li>
<li className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>AMRUT</li>
<li className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Solid Waste Management</li>

    </ul>   

</div>
  

   <div className= "h-60 md:grid-cols-6 shadow-lg bg-white shadow-indigo-500/40"><div className="  border-b-4 border-blue-700 bg-white text-black h-10 mt-auto mb-auto  p-2 pl-5 text-sm"><AiOutlineWifi className='float-left mt-0.5 ml-1  pb-[3px] text-xl text-blue-500 ' />&nbsp; e - Services  </div>

  <ul className="text-gray-600 mt-5 pl-3 text-xs  space-y-2">
<li className="hover:underline hover:text-orange-600 cursor-pointer " onClick={() => navigate('/Buildingplanapprovalmanagementsystem')} ><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Building Plan Approval Management System</li>
<li><a href="#" className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Municipal License Management System</a></li>
<li><a href="#" className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Property Tax Management System</a></li>
<li><a href="#" className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/> Water Connection Management System</a></li>
<li><a href="#" className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Birth & Death Registration System</a></li>
<li><a href="#" className="hover:underline hover:text-orange-600"><MdChevronRight className='float-left   ml-1  pb-[3px] text-xl text-gray-500 '/>Public Grievances Management System</a></li>

    </ul>   

</div>
 
</div>



    
    
   
    
    



</div>
  )
}

export default Schemesandprograms