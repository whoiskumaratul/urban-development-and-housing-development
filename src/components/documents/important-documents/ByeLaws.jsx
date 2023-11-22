import React from 'react'
import Footer from '../../Footer';
import Copyright from '../../Copyright';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../image/Image';
import Title from '../../react-helmet/Title';


function ByeLaws() {

    const navigate = useNavigate();
 
    
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
    }

  return (
    <div>

    <Title title="ByeLaws | UDHD" />
    
    <div className='grid lg:grid-cols-1 bg-white ml-8 mr-8 mt-5  pl-5  pt-5'>
      
      <h1 className=' border-b-2 border-b-rose-600 w-full'>Bye Laws </h1>
          </div>

   
    <div className='  grid lg:grid-cols-2 ml-8 mr-8 pt-3 pl-6 bg-white shadow-lg  '>

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
   
   
<div className='  grid lg:grid-cols-1 ml-8 mr-8 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=' '>
 <table className='  border-2 w-full   text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >#</th> 
     <th className=' '>Subejct</th>
     <th className='w-36'>Date</th>
     <th className='w-32'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >6</td>
    
     <td className='text-center  border border-collapse'>Office order regarding para 14.5 of Building Bye Laws 2016, all inspection reports related to commercial and industrial units are to be submitted within 48 hours of Inspection.</td>
     <td className='text-center  border border-collapse'>10/06/2019 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >5</td>
     
     <td className='text-center  border border-collapse'>	5th Amendment in JBBL, 2019</td>
     <td className='text-center  border border-collapse'> 06/06/2019</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >4</td>
   
     <td className='text-center  border border-collapse'>Low risk building amendment in building bylaws</td>
     <td className='text-center  border border-collapse'>26/02/2019 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >3</td>

 
     <td className='text-center  border border-collapse'>2nd Amendment in JBBL, 2016 (17/08/2017) </td>
     <td className='text-center  border border-collapse'> 17/08/2017  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >2</td> 
     <td className='text-center  border border-collapse'>1st Amendment in JBBL, 2016 (15/05/2017)</td>
     <td className='text-center  border border-collapse'> 15/05/2017</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >1</td> 
     <td className='text-center  border border-collapse'>Jharkhand Building Bye Laws, 2016 </td>
     <td className='text-center  border border-collapse'>	05/04/2016</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   
 </table>
 </div>



<div className='  grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

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


export default ByeLaws