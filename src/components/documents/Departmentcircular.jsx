import React from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import IMAGES from '../../image/Image'
import Footer from '../Footer'
import Copyright from '../Copyright'
import { Helmet } from 'react-helmet'
import Title from '../react-helmet/Title'

function Departmentcircular() {
  return (
    <div>
   <Title title="DC | UDHD" />


    <Schemesandprogramscommon header="Department Circular" />

   
    
<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>


<h1 className=' text-yellow-500 text-lg pt-4 pb-3  ' > Department Circular  </h1>


<div className=' '>
 <table className='border border-2    text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-3' >S.No</th>
   
     <th className=' w-96'>File Name</th>
     <th className=' w-96'>Part/Section</th>
     <th className='w-96'>Link/Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >1</td>
     <td  className='text-center  border border-collapse  '>Department Circular I</td>
     <td className='text-center  border border-collapse'>	I</td>
      <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >2</td>
     <td  className='text-center  border border-collapse'>Department Circular I</td>
     <td className='text-center  border border-collapse'>	II</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >3</td>
     <td  className='text-center  border border-collapse'>Department Circular I</td>
     <td className='text-center  border border-collapse'>III</td>
      <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >4</td>

     <td className='text-center  border border-collapse'>Department Circular I</td>
     <td className='text-center  border border-collapse'>IV </td>
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

export default Departmentcircular