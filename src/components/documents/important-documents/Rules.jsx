import React from 'react'
import Footer from '../../Footer';
import Copyright from '../../Copyright';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../image/Image';
import Schemesandprogramscommon from '../../../schemesandprograms/Schemesandprogramscommon';
import Title from '../../react-helmet/Title';

function Rules() {

    const navigate = useNavigate();
 
    
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
    }

  return (
    <div>

    <Title title="Rules | UDHD" />
    
   
    <Schemesandprogramscommon header="Rules" />


   
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
     <td className=' pb-5 pt-3 text-center' >15</td>
    
     <td className='text-center  border border-collapse'>	Jharkhand Municipal Property Tax (Assessment, Collection and Recovery) Amendment Rules 2023</td>
     <td className='text-center  border border-collapse'> 22/03/2023 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >13</td>
     
     <td className='text-center  border border-collapse'>	Jharkhand Municipal Property Tax (Assessment, Collection and Recovery) Amendment Rules 2022</td>
     <td className='text-center  border border-collapse'> 29/04/2022</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >13</td>
   
     <td className='text-center  border border-collapse'>झारखण्ड नगरपालिका जल कार्य जल अधिभार एवं जल संयोजन नियमावली 2020</td>
     <td className='text-center  border border-collapse'> 31/12/2020</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className=' pb-5 pt-3 text-center' >11</td>

 
     <td className='text-center  border border-collapse'>5th Amendment in JBBL, 2019 </td>
     <td className='text-center  border border-collapse'> 06/06/2019 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >5</td> 
     <td className='text-center  border border-collapse'>Jharkhand Transferable Development Rights Rules, 2017</td>
     <td className='text-center  border border-collapse'> 07/09/2017</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >10</td> 
     <td className='text-center  border border-collapse'>Jharkhand Transit Oriented Development Policy 2016-2026 </td>
     <td className='text-center  border border-collapse'>	19/05/2017 </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >4</td> 
     <td className='text-center  border border-collapse'>Jharkhand Real Estate (Regulation and Development) Rules, 2017(Central Act of 2016) </td>
     <td className='text-center  border border-collapse'> 18/05/2017 </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >12</td> 
     <td className='text-center  border border-collapse'>Jharkhand local bodies Advertisement regulation,2017 </td>
     <td className='text-center  border border-collapse'>	18/04/2017</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className=' pb-5 pt-3 text-center' >3</td> 
       
     <td className='text-center  border border-collapse'>	User Charges Policy for Solid Waste Management</td>
     <td className='text-center  border border-collapse'>15/03/2016</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td  className='  pb-5 pt-3 text-center' >2</td> 
       
     <td className='text-center  border border-collapse'>	Jharkhand Municipal (Documention & Presentation of Accounts for Election Expenditure) Rules 2015 (Hindi)</td>
     <td className='text-center  border border-collapse'>	19/05/2015</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



 </table>
 </div>



<div className='  grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-gray-300 pl-4 pr-4 pt-2 pb-2 border border-black ' > 1</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' onClick={() => navigate('/rulestwo')} > 2</button></span>
 
  
 
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


export default Rules