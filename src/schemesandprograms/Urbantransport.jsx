import React from 'react'
import Schemesandprogramscommon from './Schemesandprogramscommon'
import { useNavigate } from 'react-router-dom'
import Urbantransportproject from './Urbantransportproject'
import IMAGES from '../image/Image'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Title from '../components/react-helmet/Title'


function Urbantransport() {
 
  const navigate = useNavigate()

  return (
    <div>

    <Title title="UT | UDHD" />
    

    <Schemesandprogramscommon header="Urban Transport" />

    <div className='flex grid lg:grid-cols-1 ml-5 mr-5 p-5  bg-white shadow-lg mb-10 '>
   
   <div  className='flex'>
   
   <h1 className='border-t-2 border-l-2 border-r-2 p-3 text-yellow-500 text-lg' >Introduction</h1>
   
   <button type="button" className='flex-none pl-5 hover:border text-yellow-500 hover:bg-gray-100 pr-5  text-lg' onClick={() => navigate('/urbantransportproject')}>Projects</button>



   </div>


   <div>

   <p className='mt-10 ml-5 text-sm hover:text-blue-500'>'Urban transport’ (UT) is a broad name for a sector that covers a variety of modes of intra-city transport for people and goods, including walking, 
   
   <img src={ IMAGES.image17 } className='float-right border-4 border-blue-500 m-5 p-0 ' alt="Bus" />
   
   bicycling, non-motorised transport such as rickshaws etc, private personal transport, i.e., cars and motorbikes; public transport which could be rail- or bus-based; 
   
   
   private-public transport such as taxis and para-transit modes among others. Urban transportation enables movement of goods and people of Jharkhand from one location to another within an urban area.
   <br />
   <br />

The cities planned with transport modes as an integrated system are more likely to evolve and prosper as centres of trade, commerce, industry, education, tourism and services. Generally, cities ranking at the top of surveys measuring urban quality of life have high quality urban transport systems that prioritize public transport and non-motorized modes.



 <ul className='list-disc mt-8 mb-10'>
 <span className=' font-bold text-sm mb-3'> Urban Development and Housing Department, Govt. of Jharkhand </span><span className='text-sm mb-3'>is implementing following transport projects in different Urban Local Bodies of the state:-</span>
  <li className='ml-8'>City Bus Services- Ranchi, Dhanbad and Jamshedpur</li>

  <li className='ml-8'>Bus Stand Development & Renovation, Road Development, ISBT and Transport Nagar
 </li>
  <li className='ml-8'>Metro Rail- Ranchi</li>
  <li className='ml-8'>Major Roads development: Airport to Birsa Chowk, Rajbhawan to Birsa Chowk, Kantatoli to Rajbhawan (Via Circular Road), Rajbhawan to Booty More, Rajbhawan to Hinoo Chowk Via Main Road</li>
  <li className='ml-8'>Flyover- In Ratu road chowk and Knatatoli Chowk</li>
  <li className='ml-8'>Multilevel Car Parking- Shivpuri Hinoo</li>
  <li className='ml-8'>Comprehensive Mobility Plan- Ranchi, Dhanbad, Jamshedpur, Chas Fusro, Chaibasa</li>
 </ul>

 </p>


 

   </div>

</div>

<Footer />
<Copyright />
    
    </div>
  )
}

export default Urbantransport