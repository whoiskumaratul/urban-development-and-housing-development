import React from 'react'
import Schemesandprogramscommon from './Schemesandprogramscommon'
import IMAGES from '../image/Image'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Title from '../components/react-helmet/Title'

function Pmay() {
  return (
    <div>

    <Title title="PMAY | UDHD " />
    
    <Schemesandprogramscommon header='
PMAY(U) Progress
' />
    
    <div className='grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5   '>
    <div className=' '>
 <table className='border-2   w-full  text-sm'>
   <tr className=' text-white bg-blue-500 border-collapse'>
     <th className='p-3 w-12 ' >Sn. no</th>
     <th className='pl-6 w-32'>Documents Details</th>
     <th className='w-36'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >1</td>
     <td  className='  border border-collapse pt-2 pb-2 pl-2'>Invitation of Public Comment on Draft Model Tenancy Act</td>
    
     
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

      </table>
     </div>
    </div>


    <div className='grid lg:grid-cols-2 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5   gap-5'>
    <div className=''>
 <table className='border-2  w-full text-sm'>
   <tr className=' text-white bg-blue-500 border-collapse'>
     <th className='p-3 w-96 ' >Components of PMAY-U</th>
     <th className='w-44 '>Houses Sanctioned</th>
     <th className='w-44 '>Houses Grounded</th>
     <th className='w-44 '>Houses Completed</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >Beneficiary Led Construction (BLC)</td>
     <td  className='  border border-collapse text-center'>1,82,541</td>
     <td  className='  border border-collapse text-center'>89,585</td>
     <td  className='  border border-collapse text-center'>92,956</td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >Affordable Housing in Partnership (AHP)</td>
     <td  className='  border border-collapse text-center'>1,32,701</td>
     <td  className='  border border-collapse text-center'>30, 996</td>
     <td  className='  border border-collapse text-center'>1705</td>
     
   </tr>

   
   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center font-bold' >Total</td>
     <td  className='  border border-collapse text-center font-bold'>1,2,15,242</td>
     <td  className='  border border-collapse text-center font-bold'>1,20,581</td>
     <td  className='  border border-collapse text-center font-bold'>94,661</td>
     
   </tr>

      </table>

      <table className='border-2 mt-5 w-full text-sm'>
   <tr className=' text-white bg-blue-500 border-collapse'>
     <th className='p-3 w-32 ' >S.No</th>
     <th className='w-44 uppercase'>Atr reports</th>
     <th className='w-44 '>Downloads</th> 
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >1</td>
     <td  className='  border border-collapse text-center uppercase'>Tpqm_Atr_2021</td> 
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >2</td>
     <td  className='  border border-collapse text-center uppercase'>Tpqm_Atr_2020</td> 
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   
   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >3</td>
     <td  className='  border border-collapse text-center uppercase'>Tpqm_Atr_2019</td> 
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >4</td>
     <td  className='  border border-collapse text-center uppercase'>Tpqm_Atr_2018</td> 
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

      </table>

      
     </div>


     <div className=' '>
 <img src={IMAGES.image25 }   alt='pmay' />
     </div>
 
    </div>
    

    <div className='grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5'>
    <div className=''>
 <table className='border-2 w-full  text-sm'>
   <tr className=' text-white bg-blue-500 border-collapse'>
     <th className='p-3 w-8 ' >#</th>
     <th className='pl-6 w-32 '>Beneficiary Data</th>
     <th className='w-16'>Download</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >1</td>
     <td  className='  border border-collapse pl-6'>MIS_Survey_Data of AHP under PMAY_U</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >2</td>
     <td  className='  border border-collapse pl-6'>BLC Data of MIS_Survey_Data under PMAY_U</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >3</td>
     <td  className='  border border-collapse pl-6'>CLSS Data of MIS_Survey_Data under PMAY_U</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>  <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >4</td>
     <td  className='  border border-collapse pl-6'>MIS_Survey_Data of ISSR under PMAY_U</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>  <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >5</td>
     <td  className='  border border-collapse pl-6'>Third Party Quality Monitoring Report of BLC Projects under PMAY</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

      </table>
     </div>
    </div>

     
<div className='bg-white ml-5 mr-5 mt-6 pt-4'>
  
<Schemesandprogramscommon header='
ULB wise TPQMA REPORT
' />
  

  <div class="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white   mb-5 pb-5    ">

     

<div class="  w-auto  h-auto md:grid-cols-6    ">
{/* pb-40 */}

 
 <table className=' border-2 shadow-sm ml-5 bg-white text-sm  '>
   <tr className=' text-white bg-blue-500 '>
     <th className='w-12 p-3 ' >#</th>
     <th className='w-[415px] '>BLC Data</th> 
     <th className='w-48'>Download</th>
   
     
   </tr>
  

    <tr className=" border border-collapse">
     <td className='text-center p-3' >1</td>
     <td  className='pl-2  border border-collapse '>TPQMA REPORT Adityapur 142,143 3rd visit</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >3</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Basukinath 25,454, 2nd visit</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >5</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Basukinath 200,149 2nd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >7</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Bundu 129 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >9</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Chaibasa 117,381, 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >11</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Chakradharpur 116,148,224 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >13</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Chakulia 146,230, 2nd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >15</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Chas 390,168 2nd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >17</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Chirkunda 129,50 2nd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >19</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Dumka 277,207 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >21</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Hussainabad 89,91 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >23</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Jhumritilaiya 264,109,43 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >25</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Khunti 358,65 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >27</td>
     <td  className='pl-2  border border-collapse'>  	TPQMA REPORT Kodarma 287,207 2nd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >29</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Latehar 185,10,189 2nd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td className='text-center p-3' >31</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Mango 81,74,1646,51,65 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >33</td>
     <td  className='pl-2  border border-collapse'> 	TPQMA REPORT Medningar 150,165 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >35</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Mijijam 80,45 2nd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >37</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Pakur 331,200 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >39</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Rajmahal 269,53,137,48,20 2nd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >41</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Ramgarh 190,162 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >43</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Sahibganj 321,58,104 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >45</td>
     <td  className='pl-2  border border-collapse'> TPQMA REPORT Simdega 94,177 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
   </tr>
   
  
 </table>
 

</div>

<div class="  w-auto  h-auto md:grid-cols-6 pl-10  pb-6 ">
<table className='  border-2 shadow-sm ml-5 bg-white text-sm  '>
   <tr className=' text-white bg-blue-500'>
     <th className='w-12 p-3' >#</th>
     <th className='w-[415px]'>BLC Data</th>
     <th className='w-48'>Download</th>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >2</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Adityapur 353,130 3rd visit</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >4</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Basukinath 158,309 3rd visit</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >6</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Basukinath 441,19, 2nd visit</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>


   <tr className=" border border-collapse">
     <td className='text-center p-3' >8</td>

     <td className='pl-2  border border-collapse'>TPQMA REPORT Bunndu 293,4,35.60 3rd visit </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >10</td>
     <td className='pl-2  border border-collapse'>TPQMA REPORT Chaibasa 122,134,71 2nd visit</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >12</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Chakradharpur 147,277 2nd visit</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >14</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Chakulia 397,196 2nd visit</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >16</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Chatra 116,109 3rd visit</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >18</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Dumka 33,113,56,163,153,51 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>




   <tr className=" border border-collapse">
     <td  className='text-center p-3' >20</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Garhwa 380,149 2nd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >22</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Jamtara 6,448 2nd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >24</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Khunti 329 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >26</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Kodarma 217,94 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td  className='text-center p-3' >28</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Latehar 146,219,41 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td  className='text-center p-3' >30</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Madhupur 167,81,115 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td  className='text-center p-3' >32</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Medninagar 257,223 2nd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td  className='text-center p-3' >34</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Mihijam 24,32,42,30 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   
   <tr className=" border border-collapse">
     <td  className='text-center p-3' >36</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Nagaruntari 50,16,391 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >38</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Rajmahal 15,142,377 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   <tr className=" border border-collapse">
     <td  className='text-center p-3' >40</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Ramgarh 10,269,223, 2nd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   <tr className=" border border-collapse">
     <td  className='text-center p-3' >42</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Sahibganj 215,211 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   <tr className=" border border-collapse">
     <td  className='text-center p-3' >44</td>
     <td  className='pl-2  border border-collapse'>TPQMA REPORT Saraikela 21,111,43,20,56,81 3rd visit</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   <tr className=" border border-collapse">
     <td  className='text-center p-5' ></td>
     <td  className='pl-2  border border-collapse'> </td>
       
     <td> </td>
     

   </tr>

  
 </table>
 


</div>

</div>
  
</div>

   
<div className='bg-white ml-5 mr-5 mt-6 pt-4'>
  
<Schemesandprogramscommon header='

ULB wise BLC Data

' />
  

  <div class="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white   mb-5 pb-5   ">

     

<div class="  w-auto  h-auto md:grid-cols-6    ">
{/* pb-40 */}

 
 <table className=' border-2 shadow-sm ml-5 bg-white text-sm  '>
   <tr className=' text-white bg-blue-500 '>
     <th className='w-12 p-3 ' >#</th>
     <th className='w-[415px] '>BLC Data</th> 
     <th className='w-48'>Download</th>
   
     
   </tr>
  

    <tr className=" border border-collapse">
     <td className='text-center p-3' >1</td>
     <td  className='pl-2  border border-collapse '>Adityapur</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >3</td>
     <td  className='pl-2  border border-collapse'> CHAS</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >5</td>
     <td  className='pl-2  border border-collapse'>CHIRKUNDA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >7</td>
     <td  className='pl-2  border border-collapse'> DOMCHANCH</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >9</td>
     <td  className='pl-2  border border-collapse'>GARHWA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >11</td>
     <td  className='pl-2  border border-collapse'>JUMRITILAIYA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >13</td>
     <td  className='pl-2  border border-collapse'>KODERMA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >15</td>
     <td  className='pl-2  border border-collapse'>LOHARDAGA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >17</td>
     <td  className='pl-2  border border-collapse'>MAJHIAON</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >19</td>
     <td  className='pl-2  border border-collapse'>RAMGARH</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >21</td>
     <td  className='pl-2  border border-collapse'>SIMDEGA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >23</td>
     <td  className='pl-2  border border-collapse'> BASUKINATH</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >25</td>
     <td  className='pl-2  border border-collapse'>CHAIBASA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >27</td>
     <td  className='pl-2  border border-collapse'> CHAKULIYA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >29</td>
     <td  className='pl-2  border border-collapse'>DHANBAD</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td className='text-center p-3' >31</td>
     <td  className='pl-2  border border-collapse'>GODDA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >33</td>
     <td  className='pl-2  border border-collapse'> JAMTARA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >35</td>
     <td  className='pl-2  border border-collapse'> JUGSALAI</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >37</td>
     <td  className='pl-2  border border-collapse'> RAJMAHAL</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td className='text-center p-3' >39</td>
     <td  className='pl-2  border border-collapse'>NAGARUNTARI</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   
  
    
   
  
 </table>
 

</div>

<div class="  w-auto  h-auto md:grid-cols-6 pl-10  pb-6 ">
<table className='  border-2 shadow-sm ml-5 bg-white text-sm  '>
   <tr className=' text-white bg-blue-500'>
     <th className='w-12 p-3' >#</th>
     <th className='w-[415px]'>BLC Data</th>
     <th className='w-48'>Download</th>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >2</td>
     <td  className='pl-2  border border-collapse'>BUNDU</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >4</td>
     <td  className='pl-2  border border-collapse'>CHATRA</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >6</td>
     <td  className='pl-2  border border-collapse'>DEOGHAR</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>


   <tr className=" border border-collapse">
     <td className='text-center p-3' >8</td>

     <td className='pl-2  border border-collapse'>DUMKA </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >10</td>
     <td className='pl-2  border border-collapse'>HUSSAINABAD</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >12</td>
     <td  className='pl-2  border border-collapse'>KHUNTI</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >14</td>
     <td  className='pl-2  border border-collapse'>LATEHAR</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >16</td>
     <td  className='pl-2  border border-collapse'>MADHUPUR</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >18</td>
     <td  className='pl-2  border border-collapse'>MEDININAGAR</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>




   <tr className=" border border-collapse">
     <td  className='text-center p-3' >20</td>
     <td  className='pl-2  border border-collapse'>SARAIKELA</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >22</td>
     <td  className='pl-2  border border-collapse'>BARHARWA</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >24</td>
     <td  className='pl-2  border border-collapse'>BISHRAMPUR</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >26</td>
     <td  className='pl-2  border border-collapse'>CHAKRADHARPUR</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td  className='text-center p-3' >28</td>
     <td  className='pl-2  border border-collapse'>CHIRKUNDA</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td  className='text-center p-3' >30</td>
     <td  className='pl-2  border border-collapse'>GIRIDIH</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td  className='text-center p-3' >32</td>
     <td  className='pl-2  border border-collapse'>JAMSHEDPUR</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr><tr className=" border border-collapse">
     <td  className='text-center p-3' >34</td>
     <td  className='pl-2  border border-collapse'>JHUMRITELAIYA</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   
   <tr className=" border border-collapse">
     <td  className='text-center p-3' >36</td>
     <td  className='pl-2  border border-collapse'>PHUSRO</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >38</td>
     <td  className='pl-2  border border-collapse'>SAHEBGANJ</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   <tr className=" border border-collapse">
     <td  className='text-center p-3' >40</td>
     <td  className='pl-2  border border-collapse'>RANCHI</td>
       
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>
   


  
 </table>
 


</div>

</div>
  
</div>


<div className='bg-white ml-5  mr-5 mt-6 pt-4 mb-5 pb-5'>
  
<Schemesandprogramscommon header='
Important links under PMAY-U
' />
     
     <div className='pl-5 pr-5'>
 <table className='border-2 w-full  text-sm'>
   <tr className=' text-white bg-blue-500 border-collapse'>
     <th className='p-3 w-8 ' >#</th>
     <th className='pl-6 w-32 '>Important links Of PMAY-U</th>
     <th className='w-16'>Click Here</th>
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >1</td>
     <td  className='  border border-collapse pl-6'>Search Beneficiary by Name</td>
     <td className='text-center'><button className='bg-blue-400 pt-1 pb-1 pr-3 pl-3 text-white hover:bg-blue-500 leading-tight '>Click Here</button></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >2</td>
     <td  className='  border border-collapse pl-6'>Apply online in In-situ Slum Rehabilitation </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >3</td>
     <td  className='  border border-collapse pl-6'>Apply online in Credit Linked Subsidy </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>  <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >4</td>
     <td  className='  border border-collapse pl-6'>Apply online in Affordable Housing in Partnership</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>  
   
   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >5</td>
     <td  className='  border border-collapse pl-6'>Apply online in Beneficiary_Led Construction</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >6</td>
     <td  className='  border border-collapse pl-6'>Edit Assessment Form</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >7</td>
     <td  className='  border border-collapse pl-6'>Print Assessment Form</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >8</td>
     <td  className='  border border-collapse pl-6'>Track Your Assessment Status</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >9</td>
     <td  className='  border border-collapse pl-6'>Download Beneficiary Consent letter for Vertical III </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >10</td>
     <td  className='  border border-collapse pl-6'>Download Beneficiary Consent Lettetr for Vertical I</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-3 pt-3 text-center' >11</td>
     <td  className='  border border-collapse pl-6'>Final Brochure of Bagunhatu Jamshedpur</td>
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

export default Pmay