import React from 'react'
import Schemesandprogramscommon from '../../../schemesandprograms/Schemesandprogramscommon'
import IMAGES from '../../../image/Image'
import Footer from '../../Footer'
import Copyright from '../../Copyright'
import Title from '../../react-helmet/Title'

function CreditRatings() {
  return (
    <div>

    <Title title="Credit Ratings" />
  
  <Schemesandprogramscommon header="Credit Ratings" />

  <div className='  grid lg:grid-cols-1 ml-8 mr-8 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=' '>
 <table className='  border-2 w-full   text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >#</th> 
     <th className='w-auto'>Financial Year</th>
     <th className='w-auto'>Urban Local Bodies</th>
     <th className='w-auto'>Credit Ratings</th>
     <th className='w-32'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >1</td>
    
     <td className='text-center  border border-collapse'>	2016-2017</td>
     <td className='text-center  border border-collapse'>Adityapur Municipal Corporation</td>
     <td className='text-center  border border-collapse'>BB-</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >2</td>
    
     <td className='text-center  border border-collapse'>	2016-2017</td>
     <td className='text-center  border border-collapse'>Chas Municipal Corporation</td>
     <td className='text-center  border border-collapse'>BB-</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >3</td>
    
     <td className='text-center  border border-collapse'>	2016-2017</td>
     <td className='text-center  border border-collapse'>Deoghar Municipal Corporation</td>
     <td className='text-center  border border-collapse'>BB-</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >4</td>
    
     <td className='text-center  border border-collapse'>	2016-2017</td>
     <td className='text-center  border border-collapse'>Dhanbad Municipal Corporation</td>
     <td className='text-center  border border-collapse'>BB</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >5</td>
    
     <td className='text-center  border border-collapse'>	2016-2017</td>
     <td className='text-center  border border-collapse'>Giridih Nagar Parishad</td>
     <td className='text-center  border border-collapse'>BB-</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >6</td>
    
     <td className='text-center  border border-collapse'>	2016-2017</td>
     <td className='text-center  border border-collapse'>Hazaribagh Municipal Corporation</td>
     <td className='text-center  border border-collapse'>BB-</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >7</td>
    
     <td className='text-center  border border-collapse'>	2016-2017</td>
     <td className='text-center  border border-collapse'>Ranchi Municipal Corporation</td>
     <td className='text-center  border border-collapse'>BBB-</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>


 </table>
 </div>

 

</div>

<Footer />
<Copyright />


    </div>
  )
}

export default CreditRatings