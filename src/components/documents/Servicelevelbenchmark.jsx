import React from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../image/Image';
import Footer from '../Footer';
import Copyright from '../Copyright';
 
import Title from '../react-helmet/Title';


function Servicelevelbenchmark() {
  const navigate = useNavigate()
 
    
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
    }

  return (
    <div>
    

     <Title title="SBM | UDHD" />

   
    <Schemesandprogramscommon header= 'SLB(Service Level Benchmark)' />


   
    <div className='flex grid lg:grid-cols-2 ml-5 mr-5  pt-3 pl-6 bg-white shadow-lg  '>

    <div> 

   <span className='font-bold ' > {s}</span>
    
    <select onChange={onOptionChangeHandler} className="font-bold   bg-gray-300  pl-1 pr-1 pt-0.5 pb-0.5 text-black border border-black  text-sm]">
            
      <option> 10</option> 
                          {options1.map((option, index) => {
                              return <option key={index}  >
                             
                                  {option}
                              </option>
                          })}
                          
                      </select>
                      
                      <span className='font-bold' >{e}</span>
     </div>
 
  <div className='mr-auto ml-auto ' >
  
  <form action=""  method="POST">

    <label className='font-bold floar' >Search: </label>
    <input className='border-black border ' type="text" name="search" />
  </form>
  
  </div>

    </div>
   
   
<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=' '>
 <table className='border border-2    text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >#</th>
     <th className='w-36'>Date</th>
    
     <th className=' w-36'>SLB No</th>
     <th className=' '>Description</th>
     <th className='w-36'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >1</td>
     <td  className='text-center  border border-collapse'>12/10/2017</td>
     <td className='text-center  border border-collapse'>	6442</td>
     <td className='text-center  border border-collapse'>	 Urban Development & Housing Dept. Notification for Service level Benchmarking (SLB) for the FY – 2017-18 under the 14th Finance Commission </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >2</td>
     <td  className='text-center  border border-collapse'>26/10/2018</td>
     <td className='text-center  border border-collapse'>	5166 </td>
     <td className='text-center  border border-collapse'> State Urban Development Agency Notification for Service level Benchmarking (SLB) for the FY – 2018-19 under the 14th Finance Commission. </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >3</td>
     <td  className='text-center  border border-collapse'>07/03/2017</td>
     <td className='text-center  border border-collapse'>1561</td>
     <td className='text-center  border border-collapse'> Urban Development & Housing Dept. Notification for Service level Benchmarking (SLB) for the FY – 2015-16 under the 14th Finance Commission </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >4</td>

     <td className='text-center  border border-collapse'>23/09/2019 </td>
     <td className='text-center  border border-collapse'>3865 </td>
     <td className='text-center  border border-collapse'> Ranchi Municipal Corporation Notification for Service level Benchmarking (SLB) for the FY – 2019-20 under the 14th Finance Commission.  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >5</td>
     <td className='text-center  border border-collapse'>2903</td>
     <td className='text-center  border border-collapse'>20/09/2021</td>
     <td className='text-center  border border-collapse'>	 State Urban Development Agency Notification for Service level Benchmarking (SLB) for the FY – 2020-21 under the 15th Finance Commission </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >6</td>
     <td  className='text-center  border border-collapse'>11/10/2021</td>
     <td className='text-center  border border-collapse'>	3258 </td>
     <td className='text-center  border border-collapse'> State Urban Development Agency Notification for Service level Benchmarks (SLB) for the FY – 2020-21 under the 15th Finance Commission </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >7</td>
     <td  className='text-center  border border-collapse'>28/12/2022</td>
     <td className='text-center  border border-collapse'>4556 </td>
     <td className='text-center  border border-collapse'> State Urban Development Agency Notification for Service level Benchmarks (SLB) for the FY – 2021-22 under the 15th Finance Commission  </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>




 </table>
 </div>



<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

<div className='float-right ' >

 
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-gray-300 pl-4 pr-4 pt-2 pb-2 border border-black ' > 1</button></span>

  
<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' >Next</button></span>


</span>




</div>
</div> 

 

</div>
<Footer />
<Copyright />

    </div>
  )
}

export default Servicelevelbenchmark