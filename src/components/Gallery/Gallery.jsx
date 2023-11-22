import React from 'react'
import IMAGES from '../../image/Image'
import Footer from '../Footer'
import Copyright from '../Copyright'
import Title from '../react-helmet/Title'

function Gallery() {
  return (
    <div>

   <Title title="Gallery" />

     <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16 mt-5  pl-5  pt-5 pb-2 border'>
      
  <h1>Kambal Vitran ...</h1>
      </div>
   
    <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16  mb-5 pb-5 pt-5 border'>
    <div className=' border pt-4 pb-4 ml-5 mr-5  '>

    <div className='grid lg:grid-cols-3 ml-16 mr-16 sm:space-y-5 lg:space-y-0  '>
       <div>
        <img src={IMAGES.image26} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image27} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image28} alt="gallery1" />
       </div>
    </div>

    <div className='grid lg:grid-cols-3 ml-16 mr-16 mt-5 sm:space-y-5 lg:space-y-0'>
       <div>
        <img src={IMAGES.image29} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image30} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image31} alt="gallery1" />
       </div>
    </div>

    <div className='grid lg:grid-cols-3 ml-16 mr-16 mt-5 sm:space-y-5 lg:space-y-0'>
       <div>
        <img src={IMAGES.image32} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image33} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image34} alt="gallery1" />
       </div>
    </div>

    <div className='grid lg:grid-cols-3 ml-16 mr-16 mt-5 sm:space-y-5 lg:space-y-0'>
       <div>
        <img src={IMAGES.image35} alt="gallery1" />
       </div>

       </div>
    </div>
    </div>
    

    <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16 mt-5  pl-5  pt-5 pb-2 border '>
      
      <h1>Constitution Day ...</h1>
          </div>
       
          <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16  mb-5 pb-5 pt-5 border'>
    <div className=' border pt-4 pb-4 ml-5 mr-5  '>
        <div className='grid lg:grid-cols-3 ml-16 mr-16 sm:space-y-5 lg:space-y-0'>
           <div>
            <img src={IMAGES.image36} alt="gallery1" />
           </div>
    
           <div>
            <img src={IMAGES.image37} alt="gallery1" />
           </div>
    
           <div>
            <img src={IMAGES.image38} alt="gallery1" />
           </div>
        </div>
    
        <div className='grid lg:grid-cols-3 ml-16 mr-16 mt-5 sm:space-y-5 lg:space-y-0'>
           <div>
            <img src={IMAGES.image39} alt="gallery1" />
           </div>
    
           <div>
            <img src={IMAGES.image40} alt="gallery1" />
           </div>
    
           <div>
            <img src={IMAGES.image41} alt="gallery1" />
           </div>
        </div>
    
        </div>
        </div>
        

      <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16 mt-5  pl-5  pt-5 pb-2 border '>
      
      <h1>National Workshop on Urban Transformation ...</h1>
          </div>

          <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16  mb-5 pb-5 pt-5 border'>
    <div className=' border pt-4 pb-4 ml-5 mr-5  '>
    
    <div className='grid lg:grid-cols-3 ml-16 mr-16 sm:space-y-5 lg:space-y-0'>
       <div>
        <img src={IMAGES.image42} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image43} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image44} alt="gallery1" />
       </div>
    </div>

    <div className='grid lg:grid-cols-3 ml-16 mr-16 mt-5 sm:space-y-5 lg:space-y-0'>
       <div>
        <img src={IMAGES.image45} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image46} alt="gallery1" />
       </div>

       <div>
        <img src={IMAGES.image47} alt="gallery1" />
       </div>
    </div>
</div>
    
    </div>


    <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16 mt-5  pl-5  pt-5 pb-2 border'>
      
  <h1>AMRUT Parks, Jharkhand ...</h1>
      </div>

      <div className='grid lg:grid-cols-1 bg-white ml-16 mr-16  mb-5 pb-5 pt-5 border'>
    <div className=' border pt-4 pb-4 ml-5 mr-5  '>

<div className='grid lg:grid-cols-3 ml-16 mr-16 sm:space-y-5 lg:space-y-0'>
   <div>
    <img src={IMAGES.image48} alt="gallery1" />
   </div>

   <div>
    <img src={IMAGES.image49} alt="gallery1" />
   </div>

   <div>
    <img src={IMAGES.image50} alt="gallery1" />
   </div>
</div>

<div className='grid lg:grid-cols-3 ml-16 mr-16 mt-5 sm:space-y-5 lg:space-y-0'>
   <div>
    <img src={IMAGES.image51} alt="gallery1" />
   </div>

   <div>
    <img src={IMAGES.image52} alt="gallery1" />
   </div>

   <div>
    <img src={IMAGES.image53} alt="gallery1" />
   </div>
</div>

<div className='grid lg:grid-cols-3 ml-16 mr-16 mt-5 sm:space-y-5 lg:space-y-0'>
   <div>
    <img src={IMAGES.image54} alt="gallery1" />
   </div>

  
</div>
</div>

</div>

 <Footer />
 <Copyright />


    </div>
  )
}

export default Gallery