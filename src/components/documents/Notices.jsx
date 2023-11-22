import React from 'react'
import IMAGES from '../../image/Image';
import { useNavigate } from 'react-router-dom';
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon';
import Footer from '../Footer';
import Copyright from '../Copyright';
import { Helmet } from 'react-helmet';
import Title from '../react-helmet/Title';

function Notices() {

    const navigate = useNavigate()
 
    
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
    }

  return (
    <div>

 
<Title title="Notices | UDHD" />
    
   
    <Schemesandprogramscommon header='Notices' />


   
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
     <th className='w-36'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >1</td>
     <td  className='text-center  border border-collapse'>22/03/2023</td>
     <td className='text-center  border border-collapse'>	23</td>
     <td className='text-center  border border-collapse'> Manjhiaon Nagar Panchayat Very short time rate invitation notice no. 23/2022-23 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >2</td>
     <td  className='text-center  border border-collapse'>22/03/2023</td>
     <td className='text-center  border border-collapse'>	23</td>
     <td className='text-center  border border-collapse'> Manjhiaon Nagar Panchayat Very short time rate invitation notice no. 23/2022-23 .</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >3</td>
     <td  className='text-center  border border-collapse'>22/03/2023</td>
     <td className='text-center  border border-collapse'>24</td>
     <td className='text-center  border border-collapse'> Manjhiaon Nagar Panchayat Very short time rate invitation notice no. 24/2022-23 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >4</td>

     <td className='text-center  border border-collapse'>22/03/2023 </td>
     <td className='text-center  border border-collapse'>25 </td>
     <td className='text-center  border border-collapse'> Manjhiaon Nagar Panchayat Very short time rate invitation notice no. 25/2022-23  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >5</td>
     <td className='text-center  border border-collapse'>07/02/2023</td>
     <td className='text-center  border border-collapse'>	204</td>
     <td className='text-center  border border-collapse'> Jhumritilaiya Nagar Parishad झुमरी तिलैया नगर परिषद हेतु आंतरिक ऑडिट के लिए चार्टर्ड अकाउंटेंट फर्मों का चयन संबंधित अतिअल्पकालीन निविदा आमंत्रण सूचना .</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >6</td>
     <td  className='text-center  border border-collapse'>27/01/2023</td>
     <td className='text-center  border border-collapse'>136 </td>
     <td className='text-center  border border-collapse'>	 Jhumritilaiya Nagar Parishad Display Of Advertisements in Territory Of JhumriTelaiya Municipal Council :Registration,License fees and Procedure for application </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >7</td>
     <td  className='text-center  border border-collapse'>15/01/2023</td>
     <td className='text-center  border border-collapse'>312 </td>
     <td className='text-center  border border-collapse'> Jhumritilaiya Nagar Parishad विज्ञापन प्रदर्शन हेतु निबंधन एवं अनुज्ञप्ति शुल्क से संबंधित आम सूचना  </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >8</td>
     <td  className='text-center  border border-collapse'>30/12/2022</td>
     <td className='text-center  border border-collapse'>2250 </td>
     <td className='text-center  border border-collapse'>	 Jhumritilaiya Nagar Parishad झुमरी तिलैया नगर परिषद् क्षेत्र अंतर्गत ब्लॉक रोड के समीप सामुदायिक शौचालय-सह-कौशल विकास केन्द्र (ई-पुस्तकालय-सह- वाचनालय) में अवस्थित दुकान की बन्दोबस्ती निविदा </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >9</td>
     <td  className='text-center  border border-collapse'>24/11/2022</td>
       
     <td className='text-center  border border-collapse'>	2916</td>
     <td className='text-center  border border-collapse'> Medininagar Municipal Corporation RPF (Pink City Bus Memo no. 2916 dt. 24/11/2022)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >10</td>
     <td  className='text-center  border border-collapse'>23/11/2022</td>
       
     <td className='text-center  border border-collapse'>	1974</td>
     <td className='text-center  border border-collapse'>	 Jhumritilaiya Nagar Parishad REVISED JHUMRI TELAIYA AHP 4TH ROUND 7 FLATS ALLOTMENT DATE 26-11-2022 NOTIFICATION </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



 </table>
 </div>



<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-gray-300 pl-4 pr-4 pt-2 pb-2 border border-black ' > 1</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' onClick={() => navigate('/noticestwo')} > 2</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' > 3</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800 pl-4 pr-4 pt-2 pb-2 hover:text-white ' > 4</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2  hover:text-white' > 5</button></span>

<span className='ml-1' ><button type="button" className=' pl-1 pr-1   ' > ...</button></span>


<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' > 22</button></span>
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


export default Notices