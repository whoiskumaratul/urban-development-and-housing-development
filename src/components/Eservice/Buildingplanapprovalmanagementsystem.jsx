import React from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import IMAGES from '../../image/Image'
import Footer from '../Footer'
import Copyright from '../Copyright'

function Buildingplanapprovalmanagementsystem() {
  return (
    <div>

    <Title title="BPAMS | UDHD " />
    
    <Schemesandprogramscommon header="Building Plan Approval Management System" />
    

    <div className='flex grid lg:grid-cols-1 gap-2 ml-5 mr-5 bg-white shadow-lg'>

<h1 className='ml-5 text-yellow-500 text-lg pt-5 ' >Online Building Plan Approval Management System  </h1>

 <p className='ml-10 text-sm hover:text-blue-500' >As a major initiative, Department of Urban Development and Housing Development, Government of Jharkhand has launched the online Building Plan Approval Management system (BPAMS) to address the prime need of investor community and citizen in this age of e-governance. 
 
 
<img src={IMAGES.image18} className='float-right border-2 w-72 mr-5 mt-5' alt="bpams" />



 The BPAMS system developed allows for online application for Building Plan approval and is a completely online system. All the officer concerned will also give stage wise approval in the portal itself.
<br />

<br />
As a major milestone, BPAMS covers all urban areas, all industrial areas, and regional development authorities which enables it to address the need of online service for availing construction permits, occupancy certificates across the state.

<br />
<br />

Lots of factors have been considered in shaping this application to fulfil the requirement of practitioners like architects, civil engineers, town planner, draftsman and Jharkhand Building Bye-laws 2016 including hassle-free service providing to hands of citizen. The key focus of BPAM system is transparency, time-bound availability of services, audit of construction quality & structural safety, demand supply driven market to practitioners, error free approval and online complaint. </p>


</div>


<div className='flex grid lg:grid-cols-1   ml-5 mr-5 bg-white '>

<div className='bg-blue-600 text-white font-extrabold p-4 text-center mt-5'>
    <button type="button" className='' >Visit Website</button>
</div>

</div>



<div className='flex grid lg:grid-cols-1 gap-2 ml-5 mr-5 bg-white mt-5 mb-10 pb-5 shadow-lg'>


<div>

<h1 className='ml-5 text-yellow-500 text-lg pt-5 ' >Salient features </h1>

</div>


<div className='flex grid lg:grid-cols-2 gap-3  mt-5 '>

<div className='w-auto' >


<ul className='list-disc text-sm ml-20 hover:text-blue-500 space-y-2'>


<li ><p className='font-extrabold '>Make online application, get online approval:</p>
    BPAMS allows for online submission of Application for Building Plan Approval as well as online payment of permit fee. It also provided for tracking the status of application at each stage.</li>


<li> <p className='font-extrabold '>Automated Scrutiny report by AutoDCR</p>
    System allows for computerised evaluation of Building Map through Auto DCR requiring no manual intervention for scrutiny the layout/ plan.
    
    </li>


    <li>

<p className='font-extrabold '>Online Registration of Technical professionals</p>
    Technical professionals like, architect, civil engineer and draftsman may get themselves registered on the system through online application and online payment of registration fees and renewal fees.

    </li>
<li>

<p className='font-extrabold '> Availability of all signed inspection reports and certificate</p>
    Get all signed inspection reports and certificates at pre construction stage, during construction stage and post construction stage of proposal trough citizen search module.

    </li>


<li><p className='font-extrabold '> Accreditation programme for third party inspection</p>
    Qualified and experienced professionals may get themselves registered to become third party inspectors through participating online third party accreditation programme.

    </li>



    <li><p className='font-extrabold '>    Allocation of Third party inspection and certification</p>
    BPAMS system has provision for allocation of accredited third party professional for third party inspection and certification for high & medium risk associated proposal
 </li>
</ul>


</div>


<div className=' '>

<ul className='list-disc text-sm ml-10 pl-10  hover:text-blue-500 space-y-2'>


<li ><p className='font-extrabold '>Make online application, get online approval:</p>
    BPAMS allows for online submission of Application for Building Plan Approval as well as online payment of permit fee. It also provided for tracking the status of application at each stage.</li>


<li> <p className='font-extrabold '>Automated Scrutiny report by AutoDCR</p>
    System allows for computerised evaluation of Building Map through Auto DCR requiring no manual intervention for scrutiny the layout/ plan.
    
    </li>


<li>

<p className='font-extrabold '>Online Registration of Technical professionals</p>
    Technical professionals like, architect, civil engineer and draftsman may get themselves registered on the system through online application and online payment of registration fees and renewal fees.

    </li>
<li>

<p className='font-extrabold '> Availability of all signed inspection reports and certificate</p>
    Get all signed inspection reports and certificates at pre construction stage, during construction stage and post construction stage of proposal trough citizen search module.

    </li>


<li><p className='font-extrabold '> Accreditation programme for third party inspection</p>
    Qualified and experienced professionals may get themselves registered to become third party inspectors through participating online third party accreditation programme.

    </li>



    <li><p className='font-extrabold '>    Allocation of Third party inspection and certification</p>
    BPAMS system has provision for allocation of accredited third party professional for third party inspection and certification for high & medium risk associated proposal
 </li>

</ul>
</div>
</div>


</div>


<Footer />
<Copyright />


</div>



     
  )
}

export default Buildingplanapprovalmanagementsystem