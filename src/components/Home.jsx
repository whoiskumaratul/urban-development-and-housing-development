import React from 'react'
import Slider from './Slider'
import MarqueeSlider from './MarqueeSlider'
import Municipalcorporation from './Municipalcorporation'
import Schemesandprograms from './Schemesandprograms'
import Notificationandtender from './Notificationandtender'
import Profilecard from './Profilecard'
import Urbanlocalbodiesinformation from './Urbanlocalbodiesinformation'
import Footer from './Footer'
import Copyright from './Copyright'

 
import image1 from './images/sliding.jpg';
import image2 from './images/sliding2.png';
import image3 from './images/sliding3.png';
import image4 from './images/sliding4.png';
import image5 from './images/sliding5.png';
 


function Home() {

  const images = [image1, image2, image3, image4, image5];
  return (
    <div>
    {/* <h1>This is our homepage</h1> */}
      
    

    {/* <Slider /> */}
    <div className="container mx-auto">
    <Slider images={images} />
    </div>
    
   <MarqueeSlider />
   <Municipalcorporation />
   <Schemesandprograms />
   <Notificationandtender />
   <Profilecard />
   <Urbanlocalbodiesinformation />
  
   <Footer />
   <Copyright />
    
    
    </div>
  )
}

export default Home