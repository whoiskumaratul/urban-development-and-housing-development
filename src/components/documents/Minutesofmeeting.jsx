import React from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import Footer from '../Footer';
import Copyright from '../Copyright';
import IMAGES from '../../image/Image';
import { Helmet } from 'react-helmet';
import Title from '../react-helmet/Title';

function Minutesofmeeting() {
    let a = ' Dept. / ULB Name  ';

    const options1 = ['Urban Development %  Housing Dept.', 'Directorate of Municipal Administration', 'State Urban Development Agency', 'Jharkhand State Housing Board', 'JUIDCO', 'JUTCOL', 'Ranchi Smart City Corporation Limited', 'Adityapur Municipal Corporation', 'Bachra Nagar Panchayat', 'Badaki Saralya Nagar Panchayat', 'Barharwa Nagar Panchayat', 'Basukinath Nagar Panchayat', 'Bishrampur Nagar Parishad', 'Bundu Nagar Panchayat', 'Chakradharpur Nagar Parishad', 'Chakulia Nagar Pachayat', 'Chas Municipal Corporation', 'Chatra Nagar Panchayat', 'Chhatarpur Nagar Parishad', 'Deoghar Municipal Corporation', 'Dhanbad Municipal Corporation', 'Dhanvar Nagar Panchayat', 'Domchanch Nagar Panchayat', 'Dumka Nagar Parishad', 'Garhwa Nagar Parishad', 'Giridih Municipal Corporation', 'Gumla Nagar Parishad', 'Hariharganj Nagar Panchayat', 'Hazaribagh Municicpal Corporation'];

    const onOptionChangeHandler = (event) => 
    {
        console.log("User Selected", event.target.value);
    }

  return (
    <div>

    <Title title="Minutes of Meeting | UDHD" />
    
   

    
    <Schemesandprogramscommon header="Minues of Meeting"  />
     
     
   
    <div className="bg-white ml-5 mr-5 mb-5">
      <div className=" p-5 flex grid gap-5 lg:grid-cols-2 ">
        <div>
          <span className="font-bold uppercase mr-10">{a}</span>
          <select
            onChange={onOptionChangeHandler}
            className="bg-white pl-3 pt-2 pb-2    border border-blue-500  text-sm]    "
          >
            <option>All</option>
            {options1.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>


        <div className=''>Publication Date From 
     <input type="date"
     name="text"
     className='border border-black pr-12 pt-1.5 pb-1.5 pl-2 ml-5' 
     />
     </div> 
    
      

        <div>
          <input
            type="submit"
            value="Filter"
            className="bg-green-600 hover:bg-green-500 text-white pt-1 pb-1 pl-24 pr-24 ml-20"
          />
        </div>
      </div> 
   
<div className='flex grid lg:grid-cols-1  p-5'>

<div className=' '>
 <table className='border border-2 shadow-sm ml-5 bg-white text-xs  '>
   <tr className=' text-white bg-blue-500'>
     <th className='p-3' >#</th>
     <th className='w-36'>MoM Date</th>
     <th className='w-auto '>Description</th>
     <th className='w-36'>Download</th>
    
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >1</td>
     <td  className='text-center  border border-collapse'>25/08/2022</td>
     <td className='text-center  border border-collapse'> Sahibganj Nagar Parishad MoM 25.08.2022 letter no. 1554 dt- 25.08.2022 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >2</td>
 
     <td className='text-center  border border-collapse'>	25/06/2022 </td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad Minutes of Board Meeting 25.06.2022 Letter no-1363 dated- 09.07.2022   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >3</td>
 
     <td className='text-center  border border-collapse'>26/02/2022 </td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad सामान्य बोर्ड मीटिंग प्रोसीडिंग दिनांक-23.02.2022 letter no-532 dt-26.02.2022 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >4</td>

 
     <td className='text-center  border border-collapse'>23/02/2022 </td>
     <td className='text-center  border border-collapse'> Sahibganj Nagar Parishad साहिबगंज नगर परिशद् बोर्ड की सामान्य बैठक दिनांक - 23.02.2022 की कार्यवाही। (letter no-532 dt-26.02.2022) </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >5</td>
 
     <td className='text-center  border border-collapse'>	19/02/2022</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad दिनांक - 19.02.2022 को आहूत नगर परिषद् साहिबगंज की स्थायी समिति की बैठक की कार्यवाही। </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >6</td> 
     <td className='text-center  border border-collapse'>	10/02/2022 </td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad दिनांक-10.02.2022 को आहूत साहिबगंज नगर परिषद् की सफाई समिति की बैठक की कार्यवाही   </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >7</td> 
     <td className='text-center  border border-collapse'>	21/12/2021 </td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad साहिबगंज नगर परिशद् बोर्ड की सामान्य बैठक दिनांक - 21.12.2021 की कार्यवाही। (letter no-2637 dt-21.12.2021)  </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >8</td> 
     <td className='text-center  border border-collapse'>	28/10/2021 </td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad साहिबगंज नगर परिशद् बोर्ड की सामान्य बैठक दिनांक - 28.10.2021 की कार्यवाही। (letter no-2188 dt-28.10.2021  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    
      
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >9</td> 
       
     <td className='text-center  border border-collapse'>	28/10/2021</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad साहिबगंज नगर परिशद् बोर्ड की सामान्य बैठक दिनांक - 28.10.2021 की कार्यवाही। (letter no-2188 dt-28.10.2021)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >10</td> 
       
     <td className='text-center  border border-collapse'>20/09/2021</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad Revenue review meeting Letter no-1727 dated- 20.09.21 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >11</td> 
       
     <td className='text-center  border border-collapse'>27/07/2021</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad साहिबगंज नगर परिशद् बोर्ड की सामान्य बैठक दिनांक - 27.07.2021 की कार्यवाही।  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >12</td> 
       
     <td className='text-center  border border-collapse'>	06/07/2021</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad साहिबगंज नगर परिषद् बोर्ड एवं निविदा समिति की आपातकालीन बैठक दिनांक - 06.07.2021 की कार्यवाही।  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >13</td> 
       
     <td className='text-center  border border-collapse'>08/06/2021</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad साहिबगंज नगर परिशद् बोर्ड की सामान्य बैठक दिनांक - 08.06.2021 की कार्यवाही।  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >14</td> 
       
     <td className='text-center  border border-collapse'>	08/06/2021</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad साहिबगंज नगर परिशद् बोर्ड की सामान्य बैठक दिनांक - 08.06.2021 की कार्यवाही।  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >15</td> 
     <td className='text-center  border border-collapse'>19/03/2021</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad Minutes of Board meeting 19.03.2021 (Letter No- 607 dt- 19.03.21)   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >16</td> 
       
     <td className='text-center  border border-collapse'>	21/01/2021</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad Minutes of Board meeting 21.01.2021 (Letter No- 160 dt- 21.01.21)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >17</td> 
       
     <td className='text-center  border border-collapse'>28/11/2020</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad board meeting proceeding dated 28.11.2020 and letter no-1893 dated-28.11.2020  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >18</td> 
     <td className='text-center  border border-collapse'>	28/11/2020</td>
     <td className='text-center  border border-collapse'>	 Sahibganj Nagar Parishad board meeting proceeding dated 28.11.2020 and letter no-1893 dated-28.11.2020  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >19</td> 
     <td className='text-center  border border-collapse'>13/11/2020</td>
     <td className='text-center  border border-collapse'>	 Directorate of Muncipal Administration 20th SLSMC Meeting proceeding under PMAY-U   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >20</td> 
     <td className='text-center  border border-collapse'>09/10/2020</td>
     <td className='text-center  border border-collapse'>	 Rajmahal Nagar Panchayat Emergency Board Meeting Proceeding Dated 09-10-2020  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >21</td> 
       
     <td className='text-center  border border-collapse'>26/09/2020 </td>
     <td className='text-center  border border-collapse'>	 Rajmahal Nagar Panchayat Board Meeting Proceeding Dated 26-09-2020  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >22</td> 
       
     <td className='text-center  border border-collapse'>	14/09/2020 </td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad lettern o-1491 dated-18.09.2020 (minutes standing committee dated-14.09.2020)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >23</td> 
       
     <td className='text-center  border border-collapse'>09/09/2020</td>
     <td className='text-center  border border-collapse'>	 Rajmahal Nagar Panchayat 'SWM Proceeding_19.09.2020 ULB Meeting_NP Rajmahal ULB  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >24</td> 
       
     <td className='text-center  border border-collapse'>	03/09/2020 </td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad letter no-1410 dated-04.09.2020 (minutes of meeting tax committee dated -03.09.2020  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>





   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >25</td> 
       
     <td className='text-center  border border-collapse'>	19/08/2020 </td>
     <td className='text-center  border border-collapse'>   Sahibganj Nagar Parishad board meeting proceeding dated-19.08.2020  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >26</td> 
       
     <td className='text-center  border border-collapse'>15/06/2020 </td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad Letter No.-1168, Dt.-08.07.2020 (MINUTES OF BOARD MEETING DATED-15.06.2020)   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >27</td> 
       
     <td className='text-center  border border-collapse'>	06/05/2020 </td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad Letter no 969 Dated 06.05.2020 (Standing Committee)   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >28</td> 
       
     <td className='text-center  border border-collapse'>	04/05/2020</td>
     <td className='text-center  border border-collapse'>   Sahibganj Nagar Parishad STANDING COMMITTEE MEETING HELD ON 4.5.2020 Letter No. 969 dated- 06.5.20 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >29</td> 
       
     <td className='text-center  border border-collapse'>	07/03/2020</td>
     <td className='text-center  border border-collapse'>   Sahibganj Nagar Parishad Minutes of Meeting with Aakanksha waste management pvt. ltd.   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >30</td> 
       
     <td className='text-center  border border-collapse'>	07/03/2020</td>
     <td className='text-center  border border-collapse'>  Sahibganj Nagar Parishad Letter No.-613, Dt.-07-03-2020 (Minutes of meeting (aakansha)   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >31</td> 
       
     <td className='text-center  border border-collapse'>29/02/2020 </td>
     <td className='text-center  border border-collapse'> Sahibganj Nagar Parishad minutes of board general meeting 29.02.2020 letter no- 544 dated-03.03.2020  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >32</td> 
       
     <td className='text-center  border border-collapse'>	03/02/2020 </td>
     <td className='text-center  border border-collapse'>   Sahibganj Nagar Parishad Minutes of tax committee meeting 03.02.2020 (Letter No- 287 dated- 03.02-2020)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>





   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >33</td> 
       
     <td className='text-center  border border-collapse'>29/01/2020 </td>
     <td className='text-center  border border-collapse'>   Sahibganj Nagar Parishad Minutes of Board meeting 29.01.2020 (Letter No- 264 dated- 29-01-2020)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >34</td> 
       
     <td className='text-center  border border-collapse'>24/01/2020</td>
     <td className='text-center  border border-collapse'>    Sahibganj Nagar Parishad Minutes of revenue review meeting dated 24.01.2020, letter no 199, dated 24.01.2020 </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >35</td> 
       
     <td className='text-center  border border-collapse'>18/10/2019 </td>
     <td className='text-center  border border-collapse'>   Sahibganj Nagar Parishad Minutes of Board meeting 18.10.2019 (Letter No- 3708 dated- 01.11.2019)   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >36</td> 
       
     <td className='text-center  border border-collapse'>	27/09/2019 </td>
     <td className='text-center  border border-collapse'>   State Urban Development Agency आदित्यपुर cluster अंतर्गत SWM प्रबंधन हेतु concessionaire के चयन के लिए निकाली गई निविदा का निकाय द्वारा की गई वितीय समीक्षा एवं निविदा समिति द्वारा दिनांक 16-08-2019 में लिए गए निर्णय के अलोक में निगम से प्राप्त मंतव्य पर अनुमोदन देने के सम्बन्ध में निदेशक suda की अध्यक्षता में दिनांक 27-09-2019 को अप्रहण 5 बजे संपन समिति की बैठक की कार्यवाही  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >37</td> 
       
     <td className='text-center  border border-collapse'>	26/09/2019 </td>
     <td className='text-center  border border-collapse'>   Sahibganj Nagar Parishad Minutes of Board meeting 26.09.2019 (Letter No- 3321 dated- 26.09.2019)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >38</td> 
       
     <td className='text-center  border border-collapse'>	25/09/2019 </td>
     <td className='text-center  border border-collapse'>   Directorate of Muncipal Administration 47th CSMC Minutes dated 25-09-2019 under PMAY-U  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >39</td> 
       
     <td className='text-center  border border-collapse'>23/09/2019</td>
     <td className='text-center  border border-collapse'>   Directorate of Muncipal Administration MINUTES OF 17TH SLSMC MEETING DATED 23-09-2019  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >40</td> 
       
     <td className='text-center  border border-collapse'>	18/09/2019 </td>
     <td className='text-center  border border-collapse'>   Basukinath Nagar Panchayat DPR list of PMAY FY - 2019-20 PHASE 1   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >41</td> 
       
     <td className='text-center  border border-collapse'>	30/08/2019 </td>
     <td className='text-center  border border-collapse'>   Sahibganj Nagar Parishad Minutes of Board meeting 30.08.2019 (letter No- 3079 dated- 03.09.2019)  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>




   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >42</td> 
       
     <td className='text-center  border border-collapse'>	01/08/2019</td>
     <td className='text-center  border border-collapse'>    Directorate of Muncipal Administration Chief Minister Meeting of Urban Development Department held on 01-08-2019 Proceeding _No-1983_Dated 19.08.2019   </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>







 </table>
 </div>
 </div>
 </div>


<Footer />
<Copyright />



    </div>
  )
}


export default Minutesofmeeting