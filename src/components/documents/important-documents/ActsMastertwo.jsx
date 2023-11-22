import React from 'react'
import Footer from '../../Footer';
import Copyright from '../../Copyright';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../image/Image';
import Schemesandprogramscommon from '../../../schemesandprograms/Schemesandprogramscommon';
import Title from '../../react-helmet/Title';

function ActsMastertwo() {

    const navigate = useNavigate();
 
    
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
    }

  return (
    <div>

    <Title title="ActsMaster | UDHD" />
    
   
    <Schemesandprogramscommon header="Acts" />


   
    <div className='  grid lg:grid-cols-2 ml-5 mr-5 pt-3 pl-6 bg-white shadow-lg  '>

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
   
   
<div className='  grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=' '>
 <table className='  border-2 w-full   text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >#</th> 
     <th className=' '>Subejct</th>
     <th className='w-36'>Date</th>
     <th className='w-32'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >7</td>
    
     <td className='text-center  border border-collapse'>	Jharkhand Municipal Act 2011</td>
     <td className='text-center  border border-collapse'> 09/02/2012 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >1</td>
     
     <td className='text-center  border border-collapse'>	Jharkhand Building (Lease, Rent & Eviction) Control Act, 2011 (English)</td>
     <td className='text-center  border border-collapse'> 09/02/2012</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >2</td>
   
     <td className='text-center  border border-collapse'>Jharkhand Building (Lease, Rent & Eviction) Control Act, 2011 (Hindi)</td>
     <td className='text-center  border border-collapse'> 09/02/2012</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >4</td>

 
     <td className='text-center  border border-collapse'>Jharkhand Municipal Act 2011 (English) </td>
     <td className='text-center  border border-collapse'> 09/02/2012</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >5</td> 
     <td className='text-center  border border-collapse'>	Jharkhand Municipal Act 2011 (Hindi)</td>
     <td className='text-center  border border-collapse'> 09/02/2012</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >3</td> 
     <td className='text-center  border border-collapse'>Jharkhand Apartment (Flat) Ownership Act 2011 Hindi & English </td>
     <td className='text-center  border border-collapse'>	30/01/2012</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>
  
 </table>
 </div>



<div className='  grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className='  bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' onClick={() => navigate('/actsmaster')}> 1</button></span>

<span className='ml-1' ><button type="button" className=' bg-gray-300  pl-4 pr-4 pt-2 pb-2  border border-black'  > 2</button></span>
 
  
 
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


export default ActsMastertwo