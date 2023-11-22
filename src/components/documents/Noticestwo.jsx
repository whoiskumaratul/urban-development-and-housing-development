import React from 'react'
import Copyright from '../Copyright';
import IMAGES from '../../image/Image';
import { useNavigate } from 'react-router-dom';
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon';
import Footer from '../Footer';
import Title from '../react-helmet/Title';

function Noticestwo() {
 
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
     <td className='pl-3 pb-5 pt-3' >11</td>
     <td  className='text-center  border border-collapse'>19/11/2022</td>
     <td className='text-center  border border-collapse'>	4012</td>
     <td className='text-center  border border-collapse'> Urban Development & Housing Dept. Scheme for regularization of unauthorized construction, 2022  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >12</td>
     <td  className='text-center  border border-collapse'>19/11/2022</td>
     <td className='text-center  border border-collapse'>	19/11/2022</td>
     <td className='text-center  border border-collapse'>  Urban Development & Housing Dept. Notification for regularization of unauthorized construction, 2022 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >13</td>
     <td  className='text-center  border border-collapse'>18/11/2022</td>
     <td className='text-center  border border-collapse'>2873</td>
     <td className='text-center  border border-collapse'> Medininagar Municipal Corporation NIT (ROAD AND DRAIN MEDMO NO. 2873 DT. 18/11/2022) </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >14</td>

     <td className='text-center  border border-collapse'>16/11/2022 </td>
     <td className='text-center  border border-collapse'>1831 </td>
     <td className='text-center  border border-collapse'> Jhumritilaiya Nagar Parishad JHUMRI TELAIYA AHP 4TH ROUND 7 FLATS ALLOTMENT DATE 18-11-2022 NOTIFICATION  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >15</td>
     <td className='text-center  border border-collapse'>07/11/2022</td>
     <td className='text-center  border border-collapse'>	10</td>
     <td className='text-center  border border-collapse'> Lohardaga Nagar Parishad नौका विहार बड़ा तालाब (विक्टोरिया तालाब) का नियम एवं सर्त </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >16</td>
     <td  className='text-center  border border-collapse'>04/11/2022</td>
     <td className='text-center  border border-collapse'>9 </td>
     <td className='text-center  border border-collapse'>	 Lohardaga Nagar Parishad विवाह भवन (खाद्गढा) बंदोबस्ती हेतु नियम एवं शर्त </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >17</td>
     <td  className='text-center  border border-collapse'>21/10/2022</td>
     <td className='text-center  border border-collapse'>1830 </td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad E-Tender Notice No. NIT-09/2022-23, letter no.1830 dt. 21.10.22 (with suddhi patra letter no. 1839 dt- 22.10.2022 and term and condition ) </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >18</td>
     <td  className='text-center  border border-collapse'>21/10/2022</td>
     <td className='text-center  border border-collapse'>3710 </td>
     <td className='text-center  border border-collapse'>	 Urban Development & Housing Dept. झारखण्ड भू सम्पदा नियामक प्राधिकार के अध्यक्ष के पद पर नियुक्ति हेतु आवेदन पत्र आमंत्रण सूचना |  </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >19</td>
     <td  className='text-center  border border-collapse'>21/10/2022</td>
       
     <td className='text-center  border border-collapse'>	3711</td>
     <td className='text-center  border border-collapse'>  Urban Development & Housing Dept. झारखण्ड भू-सम्पदा अपीलीय न्यायाधिकरण के एक सदस्य (तकनीकी) के पद पर नियुक्ति हेतु आवेदन पत्र आमंत्रण सूचना |   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >20</td>
     <td  className='text-center  border border-collapse'>21/10/2022</td>
       
     <td className='text-center  border border-collapse'>	1830</td>
     <td className='text-center  border border-collapse'>	  Sahibganj Nagar Parishad E-Tender Notice No. NIT-09 letter no.1830 dt. 21.10.22 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



 </table>
 </div>



 <div className='flex grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-transparent pl-4 pr-4 pt-2 pb-2  hover:text-white hover:bg-gray-800  ' onClick={() => navigate('/notices')} > 1</button></span>

<span className='ml-1' ><button type="button" className=' bg-gray-300  border  border-black pl-4 pr-4 pt-2 pb-2 '  > 2</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white   ' onClick={() => navigate('/noticesthree')} > 3</button></span>

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

export default Noticestwo