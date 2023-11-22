import React from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import IMAGES from '../../image/Image';
import Footer from '../Footer';
import Copyright from '../Copyright';
import { Helmet } from 'react-helmet';
import Title from '../react-helmet/Title';

function Notification() {

    let a = 'ULB ';

    const options1 = ['Urban Development %  Housing Dept.', 'Directorate of Municipal Administration', 'State Urban Development Agency', 'Jharkhand State Housing Board', 'JUIDCO', 'JUTCOL', 'Ranchi Smart City Corporation Limited', 'Adityapur Municipal Corporation', 'Bachra Nagar Panchayat', 'Badaki Saralya Nagar Panchayat', 'Barharwa Nagar Panchayat', 'Basukinath Nagar Panchayat', 'Bishrampur Nagar Parishad', 'Bundu Nagar Panchayat', 'Chakradharpur Nagar Parishad', 'Chakulia Nagar Pachayat', 'Chas Municipal Corporation', 'Chatra Nagar Panchayat', 'Chhatarpur Nagar Parishad', 'Deoghar Municipal Corporation', 'Dhanbad Municipal Corporation', 'Dhanvar Nagar Panchayat', 'Domchanch Nagar Panchayat', 'Dumka Nagar Parishad', 'Garhwa Nagar Parishad', 'Giridih Municipal Corporation', 'Gumla Nagar Parishad', 'Hariharganj Nagar Panchayat', 'Hazaribagh Municicpal Corporation'];

    const onOptionChangeHandler = (event) => 
    {
        console.log("User Selected", event.target.value);
    }

  return (
    <div>
      
      <Title title="Notification | UDHD " />

    
    <Schemesandprogramscommon header="Notifications"  />
    

    <div className='flex grid lg:grid-cols-1 ml-5 mr-5 mt-5'>
    

    <div className='bg-[#F2DEDE] pt-3 pb-3 pl-3 ml-5 mr-5 text-[#A94442]  rounded-t-lg' >
        <h1>Filter</h1>
    </div>
  

     
<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6 bg-white  border border-collapse border-[#F2DEDE] pb-5 '>

<div className='  h-auto  '>
 <table className='  text-sm'>
   <tr className=' text-black  bg-white '>
     <th className='p-5  ' > 
     
   <span className='pr-5 ' > {a}</span>
    
    <select onChange={onOptionChangeHandler} className="   bg-white  pt-1.5 pb-1.5 pl-2  pr-28 text-black border border-black  text-sm]">
            
      <option> All </option> 
                          {options1.map((option, index) => {
                              return <option key={index}  >
                             
                                  {option}
                              </option>
                          })}
                          
                      </select>
                       
     
     
     </th>







     <th className=' '>Notification No 
     
     <input type="text" name="text" className='border border-black pr-28 pt-1.5 pb-1.5 pl-2 ml-5' />
     
     </th> 
     <th className='w-96'>Date
     
     <input type="date" name="date" className='border border-black pr-28 pt-1.5 pb-1.5 pl-2 ml-5 bg-transparent ' />
     
     </th>




{/*     
     <th className=' '>Description</th>
     <th className='w-36'>Download</th> */}
   </tr>


   <tr>
    <th className='' >Subject
    <input type="text" name="text" className='border border-black pr-60 pt-1 pb-1 pl-2 ml-5' />
     
     </th> 


     
     <th className='w-32  '>
     <input type='submit' className=' ml-auto mr-auto pt-2 pb-2 pr-3 pl-3 hover:bg-blue-500 cursor-pointer  float-right bg-blue-600 text-white ' value='Filter' />
     
     
     </th>


   </tr>
  
   
 </table>
 

 
 </div>
 </div>
</div>


<div className='flex grid lg:grid-cols-1     p-5'>

<div className=' '>
 <table className='border border-2 shadow-sm ml-5 bg-white text-xs  '>
   <tr className=' text-white bg-blue-500'>
     <th className='p-3' >#</th>
     <th className='w-36'>Notification No.</th>
     <th className='w-36'>Date</th>
     <th className='w-auto '>Description</th>
     <th className='w-36'>Download</th>
    
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >1</td>
     <td  className='text-center  border border-collapse'>3</td>
     <td className='text-center  border border-collapse'>24/11/2022</td>
     <td className='text-center  border border-collapse'>Chakulia Nagar panchayat INVITATTION OF E.O.I FOR OPERATION AND MAINTENANCE OF AND UPKEEP NETAJI SUBHASH CHANDRA BOSE PARK AT WARD NO 10 UNDER CHAKULIA NAGAR PANCHAYAT, CHAKULIA .</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >2</td>
     <td  className='text-center  border border-collapse'>3872</td>
     <td className='text-center  border border-collapse'>	11/11/2022 </td>
     <td className='text-center  border border-collapse'> Urban Development & Housing Dept. लेखा पदाधिकारी के दस्तावेजों के सत्यापन के लिए अधिसूचना (06/2019)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >3</td>
     <td  className='text-center  border border-collapse'>3782</td>
     <td className='text-center  border border-collapse'>03/11/2022 </td>
     <td className='text-center  border border-collapse'> Urban Development & Housing Dept. नक्शा स्वीकृति के संबंध में  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >4</td>

     <td className='text-center  border border-collapse'>	2682 </td>
     <td className='text-center  border border-collapse'>31/07/2022  </td>
     <td className='text-center  border border-collapse'>	 Urban Development & Housing Dept. स्थानांतरण एवं पदस्थापन के संबंध में </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >5</td>
     <td className='text-center  border border-collapse'>673</td>
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 673 2020-21 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >6</td>
     <td  className='text-center  border border-collapse'>664</td>
     <td className='text-center  border border-collapse'>	21/07/2022  </td>
     <td className='text-center  border border-collapse'>	 Saraikela Nagar Panchayat PMAY V 4- All Beneficiary List of Seraikella Nagar Panchayat  </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >7</td>
     <td  className='text-center  border border-collapse'>455</td>
     <td className='text-center  border border-collapse'>	21/07/2022  </td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 455 </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >8</td>
     <td  className='text-center  border border-collapse'>450</td>
     <td className='text-center  border border-collapse'>	21/07/2022  </td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 450  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >9</td>
     <td  className='text-center  border border-collapse'>219</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 219  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >10</td>
     <td  className='text-center  border border-collapse'>189</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 189  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >11</td>
     <td  className='text-center  border border-collapse'>185</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 185  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >12</td>
     <td  className='text-center  border border-collapse'>146</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 146  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >13</td>
     <td  className='text-center  border border-collapse'>112</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 112  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >14</td>
     <td  className='text-center  border border-collapse'>32</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 32 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >15</td>
     <td  className='text-center  border border-collapse'>12</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Dumka Nagar Parishad Beneficiary Led Construction (BLC) Nagar Parishad Dumka (12 Projects Beneficiary List)   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >16</td>
     <td  className='text-center  border border-collapse'>10</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	 Latehar Nagar Panchayat PMAY (U)- V-4 List DPR 10 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >17</td>
     <td  className='text-center  border border-collapse'>1</td>
       
     <td className='text-center  border border-collapse'>	21/07/2022</td>
     <td className='text-center  border border-collapse'>	  Jhumritilaiya Nagar Parishad PMAY(U) BLC ALL DPR from Jhumri Telaiya Municipal Council </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >18</td>
     <td  className='text-center  border border-collapse'>1</td>
       
     <td className='text-center  border border-collapse'>	19/04/2022</td>
     <td className='text-center  border border-collapse'>	 Jhumritilaiya Nagar Parishad PMAY(U) BLC ALL DPR from Jhumri Telaiya Municipal Council </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >19</td>
     <td  className='text-center  border border-collapse'>4</td>
       
     <td className='text-center  border border-collapse'>	10/03/2022</td>
     <td className='text-center  border border-collapse'>	  Chakulia Nagar panchayat INVITATTION OF E.O.I FOR OPERATION AND MAINTENANCE OF AND UP KEEPING PURNAPANI PARK ALONG WITH MARRIAGE HALL AND COMMUNITY TOILET At Ward no 04  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >20</td>
     <td  className='text-center  border border-collapse'>76</td>
       
     <td className='text-center  border border-collapse'>	05/03/2022</td>
     <td className='text-center  border border-collapse'>	 Badaki Saraiya Nagar Panchayat FY 2021-22 132 beneficiary PMAYU Vertical-4  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >21</td>
     <td  className='text-center  border border-collapse'>76</td>
       
     <td className='text-center  border border-collapse'>	04/03/2022</td>
     <td className='text-center  border border-collapse'>	 Urban Development & Housing Dept. Applications are invited for Summer Internship 2022 Urban Development and Housing Department, Govt. of Jharkhand.   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>






 </table>
 </div>

</div> 
 

<Footer />
<Copyright />



    </div>
  )
}

export default Notification