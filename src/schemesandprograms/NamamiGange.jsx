import React from 'react'
import Schemesandprogramscommon from './Schemesandprogramscommon'
import IMAGES from '../image/Image'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Title from '../components/react-helmet/Title'
 
 

function NamamiGange() {
  return (
    <div>

  <Title title="Namami Gange | UDHD"  />
    
    <div>
        <Schemesandprogramscommon header="Namami Gange Programme" />
    </div>


  <div className='flex grid lg:grid-cols-1 gap-5 ml-5 mr-5 p-5  bg-white '>

  <div>
  <h1 className=' text-yellow-500 pb-3 '>Introduction</h1>
   <p className='text-sm hover:text-blue-500 '>Union Budget 2014-15 has taken cognizance of the substantial amount of money spent in the conservation and improvement of the Ganga, which has a very special place in a collective consciousness of this country. 
   
   <img src={ IMAGES.image15 } className='float-right w-32 mt-3 ml-3 mb-3 border-4 border-blue-700 ' alt="beautifulindia" />

   However, the efforts are not yielded desired results because of the lack of concerted efforts by all the stakeholders.

   <br />
   <br />

Accordingly, an Integrated Ganga Conservation Mission called “Namami Gange” has been proposed to be set up and a sum of Rs. 2,037 crores has been set aside for this purpose.
 In addition a sum of Rs. 100 crores has been allocated for developments of Ghats and beautification of River Fronts at Kedarnath, Haridwar, Kanpur, Varanasi, Allahabad, Patna and Delhi in the current financial year.

 <br />
 <br />

 Accordingly, Namami Gange approaches Ganga Rejuvenation by consolidating the existing ongoing efforts and planning for a concrete action plan for future. 
 
 <img src={ IMAGES.image16 } className='float-left mr-5 mb-3 w-32 border-4 border-blue-700' alt="ganga" />
 
 The interventions at Ghats and River fronts will facilitate better citizen connect and set the tone for river centric urban planning process.

Recognizing the multi-sectoral, multi-dimensional and multi-stakeholder nature of the Ganga Rejuvenation challenge, the key Ministries comprising of (a) WR, RD&GR, (b) Environment, Forests & Climate Change, (c) Shipping, (d) Tourism, (e) Urban Development, (f) Drinking Water and Sanitation and Rural Development have been working together since June, 2014 to arrive at an action plan. The concerned Ministers have nominated a Group of Secretaries to develop a draft action plan and have held periodical meetings to review the progress and provide guidance. The Group of Secretaries submitted its initial report on 21st July, 2014 and after taking into account the feedback received from the Hon’ble Ministers, the final report has been submitted on 28th August, 2014. 

<br />
<br />

As already identified in the report of the GoS, the long-term vision will emanate from the Ganga River Basin Management Plan being prepared by the Consortium of 7 IITs, first version of which is likely to be available by the end of this year. On a medium term basis, certain interventions both infrastructure and non-infrastructure need to be introduced to set the tone for implementation of long term vision as also take up so called “no regret” activities in the interim. Following are proposed to be taken up under Namami Gange: 
</p>

<br />
<br />

<h1 className=' text-yellow-500 pb-3 '>Nirmal Dhara- ensuring sustainable municipal sewage management </h1>


<ul className='text-sm list-disc hover:text-blue-500'>
  <li className='ml-8  '>Project prioritization in coordination with Ministry of Urban Development.</li>

  
 <img src={IMAGES.image17} className='float-left mr-6 mt-5 w-32 border-4 border-blue-700'  alt="modi ji" />
 
  <li className='ml-8'> Incentive for states to take up projects on Ganga Main-stem by providing an additional share of central grants for sewerage infrastructure.</li>


  <li className='ml-8'>Uniform standards for both MoUD scheme and Namami Gange programme, 10 years mandatory O&M by the same service provider at par with NGRBA programme and PPP, Mandatory reuse of treated water</li>
  <li className='ml-8'>Expanding coverage of sewerage infrastructure in 118 urban habitations on banks of Ganga- estimated cost by MoUD is Rs 51000 Crores</li>
   

</ul>
  </div>

 

 </div>
    

 <Footer />
 <Copyright />




    </div>
  )
}

export default NamamiGange