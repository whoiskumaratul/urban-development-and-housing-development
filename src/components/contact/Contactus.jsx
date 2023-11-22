import React from 'react'
import IMAGES from '../../image/Image'
import DeptULB from './DeptULB'
import Footer from '../Footer'
import Copyright from '../Copyright'
import Title from '../react-helmet/Title'

function Contactus() {

  
  return (
    <div>
    <Title title="Contact Us | UDHD" />
     
     <div>
        
         <div className='p-3 bg-white m-5 border-t-green-600 border-t-4 rounded-lg'>
          <img className='w-screen  ' src={IMAGES.image7} alt="Contact Banner" />
         </div>


     </div>

     <DeptULB />
     <Footer />
     <Copyright />
     
       </div>
  )
}

export default Contactus