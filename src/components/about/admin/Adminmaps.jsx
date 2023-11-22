import React from 'react'
import Schemesandprogramscommon from '../../../schemesandprograms/Schemesandprogramscommon'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Footer'
import Copyright from '../../Copyright'
import './admin.js';
import Title from '../../react-helmet/Title'


function Adminmaps() {

    const navigate = useNavigate()
  return (
    <div>

    <Title title="Admin Maps | UDHD" />
    
   <Schemesandprogramscommon header="Admin Panel Of Urban Local Bodies Maps Page" />

   <div className='flex grid lg:grid-cols-1 ml-5 mr-5 mt-3 '>
        <div className=' bg-[#38C11C] p-4  text-white text-md font-thin drop-shadow-lg shadow-black'>
            <button className='bg-blue-600 pl-2 pr-2 pt-1 pb-1 rounded-lg ' onClick={() => navigate('/maps')}>Back to Maps Page</button>
          </div>
           
          </div>
      

      <div className='lg:grid-cols-1 '>
        <form action='' id="contactForm"  method='POST' className='bg-white border border-b-4 border-indigo-500 text-center w-2/4 ml-auto mr-auto mt-5 mb-5 shadow-2xl ' >
    
    
        <div className='pt-40 pb-40  pl-40 pr-40 '>
      
    <div>
      <input type="text" name="UrbanLocalbodies" id="UrbanLocalbodies" className='pb-4  mb-12 border-b-4 w-full ' placeholder='Type Urban Local bodies' />
    </div>

    <div>
      <input type="text" name="linkofpdf" id="linkofpdf" className='pb-4 mb-12 border-b-4 w-full' placeholder='Link of pdf' />
    </div>

    <input type="submit" id="btn-default"    className='bg-blue-700 p-2 pl-10 pr-10 text-sm/[18px] text-white border-none cursor-pointer ' value="Submit" />

    </div>

        </form>

         

        
      </div>


      {/* <form id="contactForm" action="admin.js" method="POST">
  <div class="field">
    <label for="name">Name</label>
    <input type="text" name="name" id="name"/>
  </div>
  <div class="field">
    <label for="email">Email</label>
    <input type="email" name="email" id="email"/>
  </div>
  <div class="field">
    <label for="message">Message</label>
    <textarea name="message" id="message"></textarea>
  </div>
  <div class="field">
    <input type="submit" value="send" />
  </div>
</form> */}


      <Footer />
      <Copyright />
      

    
    </div>
  )
}

export default Adminmaps