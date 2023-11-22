import React from 'react'
import Schemesandprogramscommon from './Schemesandprogramscommon'
import IMAGES from '../image/Image'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Title from '../components/react-helmet/Title'
 

function Swachhbharatmission() {
  return (
    <div>
   
     <Title title="SBD | UDHD" />

    <div>
        <Schemesandprogramscommon header="Swachh Bharat Mission" />
    </div>
       

    <div className='flex grid lg:grid-cols-2 gap-2 bg-white ml-5 mr-5 mt-0 p-2'>
        <div>
            <p className='text-xs ' >Swachh Bharat Mission is a major initiative of Hon’ble Prime Minister. The mission seeks to attain Mahatma Gandhi vision of a ‘Clean India’ by his 150th birthday in 2019.
<br />
<br />

In FY 2015-15, target of 1,20,000 individual household toilets has been taken under Swachh Bharat Mission. 81,527 application of individual toilets has been received against the target. After scrutiny of applications 43,272 applications has been sanctioned and remaining are in process and 60,062 applications have been uploaded to online portal.
<br />
<br />
At present, 23.80 Cr. has been allotted to ULBs as 1st installment.
Concessionaire has been selected for Ranchi Municipal Corporation for Waste to energy under Solid Waste Management. Prepration of DPR for 36 ULBs are under progress.
<br />
<br />
Preparation of user charges rule in under progress and it will be implemented soon. Various IEC activities are being conducted at state and ULB level for awareness about the mission.
</p>
        </div>


        <div>
      <img className='w-5/6 float-right mr-10' src={ IMAGES.image9 } alt="Clean India" />
        </div>
    </div>

 
 
    <Footer />
    <Copyright />


    </div>
  )
}

export default Swachhbharatmission