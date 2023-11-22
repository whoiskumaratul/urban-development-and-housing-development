import React from 'react'
import Footer from '../Footer'
import Copyright from '../Copyright'
import Title from '../react-helmet/Title'

function Media() {
  return (
    <div>

    <Title title="Media | UDHD" />
    
    <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16 mt-5  pl-5  pt-5'>
      
      <h1 className=' border-b-2 border-b-rose-600 w-full ' >Video Gallery </h1>
          </div>

          <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16  mb-5 pb-5 pt-5'>

    <div className='grid lg:grid-cols-3 ml-16 mr-16 sm:space-y-5 lg:space-y-0 border-2 p-52'>
        
    </div>

    

    

   
    </div>
    
    <Footer />
    <Copyright />
    </div>
  )
}

export default Media