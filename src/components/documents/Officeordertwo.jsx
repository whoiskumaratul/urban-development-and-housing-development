import React from 'react'
import Footer from '../Footer';
import Copyright from '../Copyright';
import IMAGES from '../../image/Image';
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Title from '../react-helmet/Title';
function Officeordertwo() {
    const navigate = useNavigate()
 
    
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
    }

  return (
    <div>
     <Title title="Office Order | UDHD " />


   
    <Schemesandprogramscommon header= 'Office Order' />

   
    <div className='flex grid lg:grid-cols-2 ml-5 mr-5 pt-3 pl-6 bg-white shadow-lg  '>

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
   
   
<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=' '>
 <table className='border border-2    text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >#</th>
     <th className='w-32'>Date</th>
     <th className='w-32'>Notice No</th>
    
     <th className=' '>Description</th>
     <th className='w-96'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >1</td>
     <td  className='text-center  border border-collapse'>30/09/2022</td>
     <td className='text-center  border border-collapse'>	32</td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad Roster Duty regarding Durga Puja 2022, Letter No. 1722 dated- 30.09.2022  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >2</td>
     <td  className='text-center  border border-collapse'>31/07/2022</td>
     <td className='text-center  border border-collapse'>	2022</td>
     <td className='text-center  border border-collapse'> Urban Development & Housing Dept. अभियंता के पदस्थापन के संबंध में </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >3</td>
     <td  className='text-center  border border-collapse'>02/07/2022</td>
     <td className='text-center  border border-collapse'>21</td>
     <td className='text-center  border border-collapse'> Sahibganj Nagar Parishad Letter no-1307 Dated-02.07.2022 (सफाई निरीक्षक)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >4</td>

     <td className='text-center  border border-collapse'>18/06/2022 </td>
     <td className='text-center  border border-collapse'>19 </td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad साफ-सफाई, पथ प्रकाश, पेयजल, सड़क व नाली का अतिक्रमण एबं बोरिंग (Letter no-1227 dated-18.06.2022)   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >5</td>
     <td className='text-center  border border-collapse'>15/06/2022</td>
     <td className='text-center  border border-collapse'>	18</td>
     <td className='text-center  border border-collapse'> Sahibganj Nagar Parishad सेफ्टिक टैंक, पानी टैंक, शव वाहन (Letter No-1196 Dated-15.06.2022) .</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >6</td>
     <td  className='text-center  border border-collapse'>28/03/2022</td>
     <td className='text-center  border border-collapse'>15 </td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad letter no-843 dt-28.03.2022 (office order no- 15) बोर्ड कार्यवाही के संबंध में </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >7</td>
     <td  className='text-center  border border-collapse'>23/03/2022</td>
     <td className='text-center  border border-collapse'>2022 </td>
     <td className='text-center  border border-collapse'> Chakulia Nagar panchayat BLC DPR 496 FY 2021-22 PHASE -II of PMAY, Chakulia ULB   </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >8</td>
     <td  className='text-center  border border-collapse'>15/03/2022</td>
     <td className='text-center  border border-collapse'>288 </td>
     <td className='text-center  border border-collapse'>	 Madhupur Nagar Parishad LAW AND ORDERS AGAINST HOLY FESTIVAL </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >9</td>
     <td  className='text-center  border border-collapse'>15/03/2022</td>
       
     <td className='text-center  border border-collapse'>	14</td>
     <td className='text-center  border border-collapse'> Sahibganj Nagar Parishad letter no-711 dt-15.03.2022  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >10</td>
     <td  className='text-center  border border-collapse'>28/02/2022</td>
       
     <td className='text-center  border border-collapse'>	13</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad office order no-13 dt-28.02.2022 (letter no-534)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



 </table>
 </div>



<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-transparent pl-4 pr-4 pt-2 pb-2  hover:text-white hover:bg-gray-800  ' onClick={() => navigate('/officeorder')} > 1</button></span>

<span className='ml-1' ><button type="button" className=' bg-gray-300  border  border-black pl-4 pr-4 pt-2 pb-2 '  > 2</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white   ' onClick={() => navigate('/officeorderthree')} > 3</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800 pl-4 pr-4 pt-2 pb-2 hover:text-white   ' > 4</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2  hover:text-white  ' > 5</button></span>

<span className='ml-1' ><button type="button" className=' pl-1 pr-1   ' > ...</button></span>


<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' >22</button></span>
<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white    ' >Next</button></span>


</span>




</div>
</div> 

 

</div>


<Footer />
<Copyright />
 

    </div>
  )
}
export default Officeordertwo