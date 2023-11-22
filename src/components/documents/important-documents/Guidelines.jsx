import React from 'react'
import Footer from '../../Footer';
import Copyright from '../../Copyright';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../image/Image';
import Schemesandprogramscommon from '../../../schemesandprograms/Schemesandprogramscommon';
import Title from '../../react-helmet/Title';

function Guidelines() {

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
     <td className=' pb-5 pt-3 text-center' >20</td>
    
     <td className='text-center  border border-collapse'>	PMAY_Urban Guidelines_revised</td>
     <td className='text-center  border border-collapse'>27/06/2019</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >21</td>
     
     <td className='text-center  border border-collapse'>	PMAY_Urban Capacity Buidling Norms and Guidelines</td>
     <td className='text-center  border border-collapse'> 27/06/2019</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >18</td>
   
     <td className='text-center  border border-collapse'>SOP on PMAY(U) Awards 2019</td>
     <td className='text-center  border border-collapse'> 06/06/2019 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >19</td>

 
     <td className='text-center  border border-collapse'>User_Manual_PMAY(U)_Awards 2019 </td>
     <td className='text-center  border border-collapse'>06/06/2019</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >17</td> 
     <td className='text-center  border border-collapse'>Standard Operating Procedure for House Allotment under PMAY(U)</td>
     <td className='text-center  border border-collapse'>19/03/2019</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >9</td> 
     <td className='text-center  border border-collapse'>1-GOI Guideline for Survey of Mannual Scavangers </td>
     <td className='text-center  border border-collapse'>	06/03/2017</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >10</td> 
     <td className='text-center  border border-collapse'>0- Instructions to DCs & ULBs for Survey of Mannual Scavengers </td>
     <td className='text-center  border border-collapse'> 06/03/2017 </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >11</td> 
     <td className='text-center  border border-collapse'>2- Prohibition of Employment as Mannual Sacavenger Act 2013 </td>
     <td className='text-center  border border-collapse'>	06/03/2017</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >12</td> 
       
     <td className='text-center  border border-collapse'>	3, 4, 5, 6, 7- Survey Forms of Mannual Scavangers</td>
     <td className='text-center  border border-collapse'> 06/03/2017</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td  className='  pb-5 pt-3 text-center' >13</td> 
       
     <td className='text-center  border border-collapse'>	8- MS Allotments 339 dt 27-02-17 and 894 dt 26-02-14</td>
     <td className='text-center  border border-collapse'>	06/03/2017</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>
 </table>
 </div>



<div className='  grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6 '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-gray-300 pl-4 pr-4 pt-2 pb-2 border border-black ' > 1</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' onClick={() => navigate('/guidelinestwo')} > 2</button></span>
 
  
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


export default Guidelines