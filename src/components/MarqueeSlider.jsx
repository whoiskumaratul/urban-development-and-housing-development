import React from 'react'
import IMAGES from '../image/Image'

function MarqueeSlider() {
  return (
    <div>
    
    <div class="flex">
     <div className='flex-none mt-2 ml-4  '>
        <h1 className='bg-yellow-700 p-2 font-bold text-white' >Whats New</h1>
     </div>  
    <marquee className="mt-2 text-sm cursor bg-white p-2 mr-5 " Scrollamount="3" ><a href="#"><img src={ IMAGES.image22 } alt="blinking gif notice" className='float-left ' />
   &nbsp;Notification for regularization of unauthorized construction, 2020. Schemes for regularization of unauthorized construction, 2022. Your Document Verification for appoinment in the post of AMC/EO/SO under Jharkhand Municipal Service/Cadre is scheduled on 20.06.2022 from 10 am onwards at 4th Floor, Jupmi Building, Dhurwa, Ranchi-834004. Please visit our website (https://udhd.jharkhand.gov.in/).
</a>
    </marquee>
    
    </div>
    
    </div>
  )
}
 
 

export default MarqueeSlider