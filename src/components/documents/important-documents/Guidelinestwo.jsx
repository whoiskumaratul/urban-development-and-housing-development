import React from 'react'
import Footer from '../../Footer';
import Copyright from '../../Copyright';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../image/Image';
import Schemesandprogramscommon from '../../../schemesandprograms/Schemesandprogramscommon';
import Title from '../../react-helmet/Title';

function Guidelinestwo() {

    const navigate = useNavigate();
 
    
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
    }

  return (
    <div>
      

      <Title title="Guidelines | UDHD" />
   
    <Schemesandprogramscommon header="Guidelines" />


   
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
     <td className=' pb-5 pt-3 text-center' >14</td>
    
     <td className='text-center  border border-collapse'>9,10- Letter to DCs and ULBs for Approved Survey Forms and UCS</td>
     <td className='text-center  border border-collapse'>06/03/2017</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >15</td>
     
     <td className='text-center  border border-collapse'>11- MS Status District wise Received Status</td>
     <td className='text-center  border border-collapse'> 06/03/2017</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >22</td>
   
     <td className='text-center  border border-collapse'>Citizen Charter</td>
     <td className='text-center  border border-collapse'> 03/06/2016 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >2</td>

 
     <td className='text-center  border border-collapse'>Smart City Mission Statement & Guidelines </td>
     <td className='text-center  border border-collapse'>01/06/2015</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >3</td> 
     <td className='text-center  border border-collapse'>Pradhan Mantri Awas Yojna Housing for All Urban Scheme Guidelines 2015</td>
     <td className='text-center  border border-collapse'> </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >4</td> 
     <td className='text-center  border border-collapse'>Nulm ESTP Guidelines </td>
     <td className='text-center  border border-collapse'>	 </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >5</td> 
     <td className='text-center  border border-collapse'>NULM SMID Guidelines</td>
     <td className='text-center  border border-collapse'>   </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >6</td> 
     <td className='text-center  border border-collapse'>NULM SUH Guidelines </td>
     <td className='text-center  border border-collapse'>	 </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >7</td> 
       
     <td className='text-center  border border-collapse'>NULM SUSV Guidelines</td>
     <td className='text-center  border border-collapse'>  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td  className='  pb-5 pt-3 text-center' >8</td> 
       
     <td className='text-center  border border-collapse'>	SBM Guidelines</td>
     <td className='text-center  border border-collapse'>	 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>
 </table>
 </div>



<div className='  grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6 '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-transparent hover:bg-gray-800 pl-4 pr-4 pt-2 pb-2 hover:text-white'  onClick={() => navigate('/guidelines')} > 1</button></span>

<span className='ml-1' ><button type="button" className='bg-gray-300    pl-4 pr-4 pt-2 pb-2  border border-black ' onClick={() => navigate('/guidelinestwo')} > 2</button></span>
 
  
<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' onClick={() => navigate('/guidelinesthree')} > 3</button></span>
 

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


export default Guidelinestwo