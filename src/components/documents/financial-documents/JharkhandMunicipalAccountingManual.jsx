import React from 'react'
import Schemesandprogramscommon from '../../../schemesandprograms/Schemesandprogramscommon'
import IMAGES from '../../../image/Image'
import Footer from '../../Footer'
import Copyright from '../../Copyright'
import Title from '../../react-helmet/Title'

function JharkhandMunicipalAccountingManual() {
  return (
    <div>

    <Title title="JMAM | UDHD" />

   <Schemesandprogramscommon header='JharkhandMunicipalAccountingManual' />

   <div className='  grid lg:grid-cols-1 ml-8 mr-8 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=' '>
 <table className='  border-2 w-full   text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >S.No</th> 
     <th className='w-auto'>Documents Details Year</th> 
     <th className='w-32'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >1</td>
    
     <td className='text-center  border border-collapse'>	Final_Jharkhand Municipal Account </td> 
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >2</td>
    
     <td className='text-center  border border-collapse'>JMAM PART-I-001-098</td> 
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >3</td>
    
     <td className='text-center  border border-collapse'>	JMAM PART-II-099-214</td> 
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >4</td>
    
     <td className='text-center  border border-collapse'>	JMAM PART-III-215-371</td> 
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >5</td>
    
     <td className='text-center  border border-collapse'>JMAM PART-IV-372-579</td> 
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

export default JharkhandMunicipalAccountingManual