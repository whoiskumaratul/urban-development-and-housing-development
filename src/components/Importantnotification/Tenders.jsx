import React, { useEffect, useState } from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import Footer from '../Footer';
import Copyright from '../Copyright';
import axios from 'axios';
// import db from '../../../db.json';
 import config from '../../config.json';
 import db from '../../db.json';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import Title from '../react-helmet/Title';

function Tenders() {

 

  const [posts, setPostt] = useState([]);
  const [sliceIndex, setsliceIndex] = useState(0)

  useEffect(() => {
    const fetchPost = async() => {
      const {data} = await axios.get("http://localhost:8000/ulbudhd");
      setPostt(data.slice(0, sliceIndex));
    };

    fetchPost();
  }, [sliceIndex]);



    let a = 'ULB ';

    const options1 = ['Urban Development %  Housing Dept.', 'Directorate of Municipal Administration', 'State Urban Development Agency', 'Jharkhand State Housing Board', 'JUIDCO', 'JUTCOL', 'Ranchi Smart City Corporation Limited', 'Adityapur Municipal Corporation', 'Bachra Nagar Panchayat', 'Badaki Saralya Nagar Panchayat', 'Barharwa Nagar Panchayat', 'Basukinath Nagar Panchayat', 'Bishrampur Nagar Parishad', 'Bundu Nagar Panchayat', 'Chakradharpur Nagar Parishad', 'Chakulia Nagar Pachayat', 'Chas Municipal Corporation', 'Chatra Nagar Panchayat', 'Chhatarpur Nagar Parishad', 'Deoghar Municipal Corporation', 'Dhanbad Municipal Corporation', 'Dhanvar Nagar Panchayat', 'Domchanch Nagar Panchayat', 'Dumka Nagar Parishad', 'Garhwa Nagar Parishad', 'Giridih Municipal Corporation', 'Gumla Nagar Parishad', 'Hariharganj Nagar Panchayat', 'Hazaribagh Municicpal Corporation'];
    // console.log(options1[1]);

    const {id} = useParams();

    const onOptionChangeHandler = (event) => 
    {
        console.log("User Selected", event.target.value);
        
        setsliceIndex(event.target.value)
       
        console.log(setsliceIndex)
    }

    
  return (
    <div>

{/* <div>
   <Helmet>
    <title>Tender | UDHD</title>
   </Helmet>
    </div> */}

    <Title title="Tenders" />

    
    <Schemesandprogramscommon header="Tenders" />

 
   
<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=''>
 <table className='text-sm'>
   <tr className=' text-black  bg-white'>
     <th className='p-5'> 
     
   <span className='font-bold pr-5 ' > {a}</span>
    
    <select onChange={onOptionChangeHandler} className="   bg-white  pt-2 pb-2 pl-2   text-black border border-black  text-sm]">
            
      <option> All </option> 
                          {options1?.map((option, index) => {
                              return <option key={index}>
                               
                                {option}
                              </option>
                          })}
                          

                          {/* {
                options1?.map((elem, index) => <>
                    <option value={elem}>{elem}</option>
                    console.log(elem)

                </>)
              } */}


                      </select>
            
     </th>
 

     <th className='w-96 '>Start Date
     
     <input type="date" name="date" className='border border-black pr-10 pt-2 pb-2 pl-2 ml-5' />
     
     </th>


     <th className='w-32 '>End Date
     
     <input type="date" name="date" className='border border-black pr-10 pt-2 pb-2 pl-2 ml-5 ' />
     
     </th>

     <th className='w-32  '>
     <input type='submit' className=' ml-auto mr-auto pt-2 pb-2 pr-3 pl-3 hover:bg-green-500 cursor-pointer  bg-green-600 text-white ' value='Submit' />
     
     
     </th>


 
   </tr>
  
 </table>
 </div>
 </div>

 <div className=' grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6 pr-6 bg-white shadow-lg pb-5 mb-10'>
<div className=' '>
 <table className=' border-2   text-xs'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >ID</th>
     <th className='w-72'>Name of Work</th>
     <th className='w-32'>Tender Notice No.</th>
    
     <th className='w-auto'>Dept. / ULB</th>
     <th className='w-36'>Start Date</th>
     <th className='w-12 p-3'>End Date</th>
   </tr>

   {posts.map((post) => (
    <tr  className=" border border-collapse" key={post.id}>
    <td  className='text-center p-3' >{post.id}</td>
    <td  className='text-center p-3' >{post.nameofwork}</td>
  <td  className='pl-2  border border-collapse '>{post.tendernoticeno}</td>
  <td className='text-center  border border-collapse'>{post.deptulb}</td>
  <td className='text-center  border border-collapse'>{post.startdate}</td>
  <td className='text-center  border border-collapse'>{post.enddate}</td>

    </tr>
   ))}


</table>
</div>
 
</div>








<Footer />
<Copyright />
    
    </div>
  )
}

export default Tenders