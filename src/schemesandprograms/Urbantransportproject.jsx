import React from 'react'
import Schemesandprogramscommon from './Schemesandprogramscommon'
import { useNavigate } from 'react-router-dom'
import Urbantransport from './Urbantransport'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

function Urbantransportproject() {

    const navigate = useNavigate()

  return (
    <div>
     
    <Schemesandprogramscommon header="Urban Transport" />
    <div className='flex grid lg:grid-cols-1 ml-5 mr-5 p-5  bg-white shadow-lg pb-5 mb-10'>
   
   <div  className='flex'>
  
   <button className='flex-none text-yellow-500 hover:border hover:bg-gray-100 pr-5 pl-5 border-b-2  text-lg' onClick={() => navigate('/urbantransport')}>Introduction</button>
   
   <h1 className='border-t-2 border-l-2 border-r-2 p-3 border-b-none text-yellow-500 text-lg'>Projects</h1>
   
   </div>


   <div>

   <h1 className='text-yellow-500 mt-5 text-xl font-thin' >Bus Stand Project</h1>

   
   <div className='flex grid lg:grid-cols-1 ml-5 mr-5 p-5'>

   <div className=' '>
    <table className='border border-2 ml-5 hover:text-blue-500  text-sm'>
      <tr className=' text-white bg-blue-500'>
        <th className='pl-4 pb-5 pt-3' >#</th>
        <th className='w-72'>Name of ULB</th>
        <th className='w-96'>Name of Consultant</th>
        <th className='w-96'>#</th>
        <th className='w-96'>Name of ULB</th>
        <th className='w-96'>Name of ULB</th>
      </tr>

      <tr className=" border border-collapse">
        <td className='pl-3 pb-5 pt-3' >1</td>
        <td  className='text-center  border border-collapse'>Giridih Nagar Parishad</td>
        <td className='text-center  border border-collapse'>	Aqua Pumps Infra Ventures Ltd.</td>
        <td className='text-center  border border-collapse'>10</td>
        <td className='text-center  border border-collapse'>	Deoghar Municipal Corporation</td>
        <td className='text-center  border border-collapse'>	DIMTS</td>
     
         

      </tr>

      <tr className=" border border-collapse">
        <td className='pl-3  pb-5 pt-3' >2</td>
        <td  className='text-center  border border-collapse'>Jhumritilaiya Nagar Parishad</td>
        <td className='text-center  border border-collapse'>	Aqua Pumps Infra Ventures Ltd. </td>
        <td className='text-center  border border-collapse'>11 </td>
        <td className='text-center  border border-collapse'>Simdega NP</td>
        <td className='text-center  border border-collapse'>DIMTS</td>
         

      </tr>

      <tr className=" border border-collapse">
        <td className='pl-3 pb-5 pt-3' >3</td>
        <td  className='text-center  border border-collapse'>Medininagar Nagar Parishad</td>
        <td className='text-center  border border-collapse'>Aqua Pumps Infra Ventures Ltd. </td>
        <td className='text-center  border border-collapse'>12 </td>
        <td className='text-center  border border-collapse'>Jamtara NP </td>
        <td className='text-center  border border-collapse'>IIDC Ltd. </td>
         

      </tr>


      <tr className=" border border-collapse">
        <td className='pl-3 pb-5 pt-3' >4</td>

        <td className='text-center  border border-collapse'>	Dumka Nagar Parishad </td>
        <td className='text-center  border border-collapse'>DIMTS  </td>
        <td className='text-center  border border-collapse'>	13</td>
        <td className='text-center  border border-collapse'>	Chaibasa Nagar Parishad</td>
        <td className='text-center  border border-collapse'>	Mass N Voids Design Consultant </td>

         

      </tr>

      <tr className=" border border-collapse">
        <td  className='pl-3 pb-5 pt-3' >5</td>
        <td className='text-center  border border-collapse'>Godda Nagar Panchayat</td>
        <td className='text-center  border border-collapse'>	DIMTS</td>
        <td className='text-center  border border-collapse'>	14</td>
         
        <td className='text-center  border border-collapse'>	Ranchi Municipal Corporation</td>
         
        <td className='text-center  border border-collapse'>	iDeCk</td>
         

      </tr>

      <tr className=" border border-collapse">
        <td  className='pl-3 pb-5 pt-3' >6</td>
        <td  className='text-center  border border-collapse'>Gumla Nagar Parishad</td>
        <td className='text-center  border border-collapse'>	DIMTS  </td>
        <td className='text-center  border border-collapse'>	15  </td>
         
        <td className='text-center  border border-collapse'>	Hazaribagh Municipal Corporation   </td>
         
        <td className='text-center  border border-collapse'>	iDeCk </td>
       

      </tr>

      <tr className=" border border-collapse">
        <td  className='pl-3 pb-5 pt-3' >7</td>
        <td  className='text-center  border border-collapse'>Jamshedpur NAC</td>
        <td className='text-center  border border-collapse'>	DIMTS  </td>
        <td className='text-center  border border-collapse'>	16 </td>
         
        <td className='text-center  border border-collapse'>	Dhanbad Municipal Corporation </td>
         
        <td className='text-center  border border-collapse'>	iDeCK </td>
       

      </tr>



      <tr className=" border border-collapse">
        <td  className='pl-3 pb-5 pt-3' >8</td>
        <td  className='text-center  border border-collapse'>Mango NAC</td>
        <td className='text-center  border border-collapse'>	DIMTS  </td>
        <td className='text-center  border border-collapse'>	17 </td>
         
        <td className='text-center  border border-collapse'>	Ranchi Municipal Corporation  </td>
         
        <td className='text-center  border border-collapse'>	Darashaw & CO. PVT. LTD. </td>
       

      </tr>



      <tr className=" border border-collapse">
        <td  className='pl-3 pb-5 pt-3' >9</td>
        <td  className='text-center  border border-collapse'>Phusro Nagar Parishad</td>
          
        <td className='text-center  border border-collapse'>	DIMTS</td>
        <td className='text-center  border border-collapse'>	18  </td>
        <td className='text-center  border border-collapse'>	Khunti Nagar Panchayat</td>
         
        <td className='text-center  border border-collapse'>Marsh Planning (agreement has to be executed)</td>
       
       

      </tr>



    </table>
    </div>
 
   </div> 
   </div>




   <div>

   <h1 className='text-yellow-500 mt-5 text-xl font-thin' >ISBT Project </h1>

   
   <div className='flex grid lg:grid-cols-1 ml-5 mr-5 p-5'>

   <div className=' '>
    <table className='border border-2 ml-5 hover:text-blue-500 text-sm'>
      <tr className=' text-white bg-blue-500'>
        <th className='pl-4 pb-5 pt-3' >#</th>
        <th className='w-72'>Name of ULB</th>
        <th className='w-96'>Name of Consultant</th>
        <th className='w-96'>#</th>
        <th className='w-96'>Name of ULB</th>
        <th className='w-96'>Name of ULB</th>
      </tr>

      <tr className=" border border-collapse">
        <td className='pl-3 pb-5 pt-3' >1</td>
        <td  className='text-center  border border-collapse'>Ranchi Municipal Corporation</td>
        <td className='text-center  border border-collapse'>	iDeCK</td>
        <td className='text-center  border border-collapse'>3</td>
        <td className='text-center  border border-collapse'>	 	Deoghar Municipal Corporation</td>
        <td className='text-center  border border-collapse'>	iDeCK</td>
     
         

      </tr>

      <tr className=" border border-collapse">
        <td className='pl-3  pb-5 pt-3' >2</td>
        <td  className='text-center  border border-collapse'>Dhanbad Municipal Corporation </td>
        <td className='text-center  border border-collapse'> 	iDeCK</td>
        <td className='text-center  border border-collapse'>4 </td>
        <td className='text-center  border border-collapse'>Jamshedpur NAC</td>
        <td className='text-center  border border-collapse'>iDeCK</td>
         

      </tr>



    </table>
    </div>


   </div> 
   </div>



   <div>

   <h1 className='text-yellow-500 mt-5 text-xl font-thin' >Road Project </h1>

   
   <div className='flex grid lg:grid-cols-1 ml-5 mr-5 p-5'>

   <div className=' '>
    <table className='border border-2 ml-5 hover:text-blue-500 text-sm'>
      <tr className=' text-white bg-blue-500'>
        <th className='pl-4 pb-5 pt-3' >#</th>
        <th className='w-72'>Name of ULB</th>
        <th className='w-96'>Name of Consultant</th>
        <th className='w-96'>#</th>
        <th className='w-96'>Name of ULB</th>
        <th className='w-96'>Name of ULB</th>
      </tr>

      <tr className=" border border-collapse">
        <td className='pl-3 pb-5 pt-3' >1</td>
        <td  className='text-center  border border-collapse'> Dhanbad Municipal Corporation </td>
        <td className='text-center  border border-collapse'>	DARASHAW & CO. PVT. LTD.</td>
        <td className='text-center  border border-collapse'>6</td>
        <td className='text-center  border border-collapse'>	 Chas Municipal Corporation</td>
        <td className='text-center  border border-collapse'>	NCPE</td>
     
         

      </tr>

      <tr className=" border border-collapse">
        <td className='pl-3  pb-5 pt-3' >2</td>
        <td  className='text-center  border border-collapse'>Deoghar Municipal Corporation</td>
        <td className='text-center  border border-collapse'> 	DARASHAW & CO. PVT. LTD.</td>
        <td className='text-center  border border-collapse'>7 </td>
        <td className='text-center  border border-collapse'> 	Hazaribag Municipal Corporation</td>
        <td className='text-center  border border-collapse'>NCPE</td>
         

      </tr>

     
     
      <tr className=" border border-collapse">
        <td className='pl-3  pb-5 pt-3' >3</td>
        <td  className='text-center  border border-collapse'>Koderma Nagar Panchayat</td>
        <td className='text-center  border border-collapse'> 	DARASHAW & CO. PVT. LTD.</td>
        <td className='text-center  border border-collapse'>8 </td>
        <td className='text-center  border border-collapse'> 	Chaibasa Nagar Parishad</td>
        <td className='text-center  border border-collapse'>NCPE</td>
         

      </tr>



     
      <tr className=" border border-collapse">
        <td className='pl-3  pb-5 pt-3' >4</td>
        <td  className='text-center  border border-collapse'>Mango NAC</td>
        <td className='text-center  border border-collapse'> 	DIMTS</td>
        <td className='text-center  border border-collapse'>9 </td>
        <td className='text-center  border border-collapse'> Medininagar Nagar Parishad</td>
        <td className='text-center  border border-collapse'> ACPL Global Pvt. Ltd.</td>
         

      </tr>

      
      <tr className=" border border-collapse">
        <td className='pl-3  pb-5 pt-3' >5</td>
        <td  className='text-center  border border-collapse'>Dumka Nagar Parishad</td>
        <td className='text-center  border border-collapse'> 	DIMTS</td>
        
      </tr>
 
    </table>
    </div>


   </div> 
   </div> 
</div>


<Footer />
<Copyright />
    

    
    </div>
  )
}

export default Urbantransportproject