import React from 'react'
import Footer from '../../Footer';
import Copyright from '../../Copyright';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../image/Image';
import Title from '../../react-helmet/Title';
 

function OperationManuals() {

    const navigate = useNavigate();
 
    
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
    }

  return (
    <div>
    

    <Title title="OM | UDHD" />
   
    <div className='  grid lg:grid-cols-1 ml-5 mr-5 mt-5 border-blue-600 border border-b-0'>
        <div className=' bg-transparent p-4 bg-white text-blue-600  text-xl font-thin  '>
            <h1 className='' >Operation Manual</h1>
          </div>
           
          </div>


   
    <div className='  grid lg:grid-cols-2 ml-5 mr-5 pt-3 pl-6 bg-white shadow-md border border-blue-600  border-b-0 '>

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
  
  <form action="" method="POST">

    <label className='font-bold' >Search: </label>
    <input className='border-black border ' type="text" name="search" />
  </form>
  
  </div>

    </div>
   
   
<div className='  grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10 border border-blue-600 border-t-0   '>

<div className=' '>
 <table className='  border-2 w-full   text-sm'>
   <tr className=' text-white bg-blue-500 w-full'>
     <th className='p-5' >#</th> 
     <th className=' '>Subejct</th>
    
     <th className='w-32'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >1</td>
    
     <td className='text-center  border border-collapse'>Plinth level inspection Checklist</td>
     
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >2</td>
     
     <td className='text-center  border border-collapse'>Standard Operating Procedure & List of Documents (for Building Plan Approval: Pre-construction and Post-construction- prior to plinth and pre-occupancy) (from the approving authority under Jharkhand Unified Building Bye Law 2016 - JBBL)</td>
    
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >3</td>
     
     <td className='text-center  border border-collapse'>Inspection Procedure and checklist for obtating construction permit</td>
    
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >4</td>
     
     <td className='text-center  border border-collapse'>Inspection Procedure and list of checklists for obtaining occupancy certificate</td>
    
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >5</td>
     
     <td className='text-center  border border-collapse'>Water Connection Approval System (Process Manual) for all ULBs</td>
    
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >6</td>
     
     <td className='text-center  border border-collapse'>Building Plan Approval System (Process Manual) for Notified Area Committe</td>
    
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >7</td>
     
     <td className='text-center  border border-collapse'>Building Plan Approval System (Process Manual) for all Municial Corporation and RRDA</td>
    
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >8</td>
     
     <td className='text-center  border border-collapse'>Building Plan Approval System (Process Manual) for MADA</td>
    
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >9</td>
     
     <td className='text-center  border border-collapse'>Building Plan Approval System (Process Manual) for Municipal Councils and Nagar Panchayats and Municipality</td>
    
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>
 
    
 </table>
 </div>



<div className='  grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6 '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
 
  
<span className='ml-2' ><button type="button" className=' bg-gray-300    pl-4 pr-4 pt-2 pb-2  border border-black ' onClick={() => navigate('/guidelinesthree')} >1</button></span>
 

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


export default OperationManuals