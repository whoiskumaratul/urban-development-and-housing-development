import React from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import IMAGES from '../../image/Image'
 
import Title from '../react-helmet/Title';


function Finalreports() {
  return (
    <div>
    
    <Title title="Final Reports | UDHD" />

    <Schemesandprogramscommon header='15th Finance Final Reports' />

   
<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=' '>
 <table className='border-2  w-full  text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-3 w-12 ' >Sn. no</th>
     <th className='pl-6 w-32'>Documents Details</th>
     <th className='w-36'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3 text-center' >1</td>
     <td  className='   border border-collapse'>15th Finance Final Reports</td>
    
     
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

      </table>
     </div>
</div>
    

    
    </div>
  )
}

export default Finalreports