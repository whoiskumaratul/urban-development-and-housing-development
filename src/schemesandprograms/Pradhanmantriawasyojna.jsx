import React from 'react'
import Schemesandprogramscommon from './Schemesandprogramscommon'
import IMAGES from '../image/Image'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Title from '../components/react-helmet/Title'

function Pradhanmantriawasyojna() {
  return (
    <div>
    
<Title title="PMAY | UDHD" /> 

    <div>
        <Schemesandprogramscommon header="Housing Schemes" />
    </div>


    

    <div className='flex grid lg:grid-cols-1 gap-2 ml-5 mr-5 bg-white'>

    <h1 className='ml-5 text-yellow-500 text-lg pt-5 ' >Pradhan Mantri Awas Yojana (PMAY) -2015-22 </h1>
   
   <p className='ml-10 text-sm hover:text-blue-500'>Hon’ble Prime Minister envisioned Housing for All by 2022 when the Nation completes 75 years of its Independence. In order to achieve this objective, Central Government has launched a compre¬hensive mission “Housing for All by 2022” on 25 June 2015.</p>


   
   <p className='text-sm pt-3 pl-10  hover:text-blue-500'>    The Housing For All mission seeks to address the housing requirement of urban poor including slum dwellers through its four verticals:  </p>
    <ul className='hover:text-blue-500 list-disc text-sm pl-20'>
    
      <li className=''>     "In situ" Slum Redevelopment;
</li>
      <li>      Affordable Housing through Credit Linked Subsidy;</li>
      <li>  Affordable Housing in Partnership;</li>
      <li>     Subsidy for beneficiary-led individual house construction.</li>
    </ul>

   <p className='text-sm pt-3 pl-10  hover:text-blue-500'>  For programme implementation in Jharkhand, Urban Development & Housing Department (UD &HD) has selected all the 41 ULBs and made a Memorandum of Agreement (MoA) through the Ministry of Housing and Urban Poverty Alleviation and Jharkhand State.
   
    <br />
 <br />
With the progress in PMAY programme,GoI has already approved Detail Project Report (DPR) of Vertical IV for 14 Cities - Ranchi/ Dhanbad/ Jamshedpur UA (Jamshedpur, Aditiyapur, Mango and Jugsalai)/Chas (Incl. Bokaro)/Giridih/Hazaribagh/Phusro/Ramgarh UA/Gumla/Lohardaga/Deoghar/Dumka/Medininagar and Chirkunda in the month of Dec 2015.
   
<br />
 <br />
For remaining ULBs, the demand survey under Vertical IV has been completed and DPR of 24 ULBs has been submitted to Govt. of India for approval.
   
<br />
 <br />
For FY 2015-16 a total 16,416 Dwelling Units (From demand survey of beneficiaries ) has been finalized with the total construction cost of Rs.584.65 crore has been approved for 14 ULBs. 
   
    </p>
 


    <h1 className='ml-5 text-yellow-500 text-lg pt-5 ' > e-Newsletters  </h1>
    <div>
   
      <img className='pl-10 ' src={ IMAGES.image14 } alt=" e-Newsletters " />
      <p className=' text-blue-500  ml-10'>August 2017</p>
      
    </div>
   

   

    <div className='flex grid text-sm lg:grid-cols-1 mt-3 ml-10 '>
    <h1 className='text-yellow-500 text-lg '>Rajiv Awas Yojana (RAY) </h1>
    <div className=' hover:text-blue-700'>
    <p className='text-sm pt-3 pl-3'>The Mission will focus on the following Thrust Areas: </p>
    <ul className=' list-disc text-sm pl-10'>
  
      <li>RAY has been discontinues by Govt. of India in May 2015.In Jharkhand only in 3 cities the programme is on- going. </li>
      <li>Under the RAY programme, total construction of 3,931 Dwelling Units is under process for slum dwellers (Ranchi- 1,565; Dhanbad - 1,983 & Chas- 383)</li>
      <li>In Dhanbad Municipal Corporation at present the construction of 1,399 Dwelling Units is going on in two phases. Phase I comprise 6,90 DUs and the remaining construction of 709 DUs will be process in Phase II .Out of 1983 DUs,the construction of 255 DUs has been completed till Dec 2015 and remaining work is under process.</li>
      <li>In Chas Municipal Corporation a total 383 DUs has been allotted under RAY and work on 16 DUs is under progress. </li>
      <li>In Ranchi Municipal Corporation, work in progress for 1565 DUs. </li>
    </ul>
    </div>
   </div>



   <div className='flex grid text-sm lg:grid-cols-1 mt-3 ml-10 '>
    <h1 className='text-yellow-500 text-lg '>Rajiv Awas Yojana (RAY) </h1>
    <div className=' hover:text-blue-700'>
    <p className='text-sm pt-3 pl-3'>Basic Services for Urban Poor  </p>
    <ul className=' list-disc text-sm pl-10'>
  
      <li>BSUP programme is a central assistance programme under Ministry of Housing and Poverty Alleviation for construction of Houses and infrastructures.</li>
      <li>BSUP programme is going on in two cities of state i.e.Ranchi and Dhanbad. Total 2,490 DUs has been allotted under BSUP in these cities ,out of that 1825 DUs has been completed till Dec 2015. </li>
    </ul>
    </div>
   </div>



   <div className='flex grid text-sm lg:grid-cols-1 mt-3 ml-10 mb-5 '>
    <h1 className='text-yellow-500 text-lg '>Rajiv Awas Yojana (RAY) </h1>
    <div className=' hover:text-blue-700'>
    <p className='text-sm pt-3 pl-3'>Integrated Housing and Slum Development Programme (IHSDP)  </p>
    <ul className=' list-disc text-sm pl-10'>
  
      <li>IHSDP programme is a central assistance programme under Ministry of Housing and Poverty Alleviation for construction of Houses and infrastructures.</li>
      <li>IHSDP programme is going on in ten cities of state i.e. Chaibasa,Chatra,Medninagar,Giridih, Gumla, Hazaribagh, Lohardaga, Mihijam, Phusro and Sariekhela. A total 7,593 DUs has been allotted under IHSDP in these cities ,out of that 4, 618 DUs has been completed till Dec 2015 and remaining DUs will be constructed soon.</li>
    </ul>
    </div>
   </div>





  
    </div>


    <Footer />
    <Copyright />

   
    </div>
  )
}

export default Pradhanmantriawasyojna