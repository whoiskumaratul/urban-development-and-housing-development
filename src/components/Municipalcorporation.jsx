import React from 'react'
import { AiFillBank } from 'react-icons/ai';
import { useState } from 'react';
import Title from './react-helmet/Title';

function Municipalcorporation() {

 

    const options1 = ['Adityapur Municipal Corporation', 'Chas Municipal Corporation', 'Dhanbad Municipal Corporation', 'Deoghar Municipal Corporation', 'Hazaribagh Municipal Corporation', 'Ranchi Municipal Corporation', 'Giridih Municipal Corporation', 'Medininagar Municipal Corporation', 'Mango Municipal Corporation'];


    const options2 = ['Bishrampur Nagar Parishad', 'Chakradharpur Nagar Parishad', 'Chaibasa Nagar Parishad', 'Dumka Nagar Parishad Nagar Parishad', 'arhwa  Nagar Parishad', 'humritilaiya  Nagar Parishad', 'Ramgarh  Nagar Parishad','Simdega Nagar Parishad',  'Sahibganj Nagar Parishad', 'akur Nagar Parishad',  'husro Nagar Parishad', 'husro Nagar Parishad',  'Mihijham Nagar Parishad', 'Madhupur Nagar Parishad',  'Lohardaga Nagar Parishad'];


    const options3 =['Barukinath Nagar Panchayat', 'Bachra Nagar Panchayat', 'Badaikisarai Nagar Panchayat', 'Barharwa Nagar Panchayat', 'Bundu Nagar Panchayat', 'Chhattarpur Nagar Panchayat', 'Chakuliya Nagar Panchayat', 'Domchach Nagar Panchayat', 'Hariharganj Nagar Panchayat', 'Hussainabad Panchayat', 'Jamtara Nagar Panchayat',  ];


    const options4 = ['Jamshedpur NAC'];

    const URLoptions1 = [" http://www.hackingtruth.in",  " https://www.hackingtruth.org", " https://www.kumaratuljaiswal.in"];
     
     
   

    const [selectedIndex, setSelectedIndex] = useState(0);

  const index = options1.indexOf(URLoptions1);

	const onOptionChangeHandler = (event) => {
  const selectedValue = event.target.value;
  setSelectedIndex(event.target.selectedIndex);
  
	console.log("User Selected Value - ", event.target.value)
  alert(selectedValue +  URLoptions1[1]);
  console.log(selectedValue)

  
  // console.log(selectedValue, index);



  // if (selectedValue === URLoptions1)
  // {
  //      alert(URLoptions1);
  // }
 
// const element = 'Adityapur Municipal Corporation';
// const index = options1.indexOf(element);

// console.log(index); // Output: 1


    }

  return (
    <div>

    <Title title="Municipal Corporation | UDHD" />

    
    
 <div className=" grid lg:grid-cols-4 gap-5 m-5">
  <div className=" h-auto bg-white  md:grid-cols-6 text-center border  ">
  <div className="shadow-lg shadow-indigo-900/40  border-b-2 border-orange-600 bg-white text-black h-10 mt-auto mb-auto p-2 text-sm text-left "> <AiFillBank className='float-left mt-0.5 ml-1  pb-[3px] text-xl text-yellow-500' />&nbsp;Municipal Corporations </div>
        
      <select onChange={onOptionChangeHandler} className="dropdown-button  w-full bg-white p-2 border text-xs/[12px]  ">
            
      <option> ----Select Municipal Corporations---</option>
					{options1.map((option, index) => {
						return <option key={index}>
                      {/* index is : {index}*/}
                      {/* {console.log(index)}*/}
							{option}
              {/* {console.log(option)} */}
						</option>

           
					})}

          {/* <option> ----Select Municipal Corporations---</option>
          {URLoptions1.map((option1, index) => {
            return <option1 key={index}>
            {console.log(option1)}
            {alert(option1)}
              {option1}
          
             </option1>
           })}
         */}
                    
				</select>
        <div className='p-3' >
       <small className="align-bottom"><a href="#" className=" text-blue-500 ">9 Municipal Corporations</a></small>
     </div>
  </div>





  
  <div className=" h-auto bg-white  md:grid-cols-6 text-center border "><div className="shadow-lg shadow-indigo-900/40  border-b-2 border-orange-600 bg-white text-black h-10 mt-auto mb-auto p-2 text-sm text-left"><AiFillBank className='float-left mt-0.5 ml-1  pb-[3px] text-xl text-yellow-500' />&nbsp;Nagar Parishads </div>

      <select onChange={onOptionChangeHandler} className="dropdown-button text-xs/[12px] w-full bg-white p-2 border ">
            
            <option> ----Select Nagar Parishads----</option>
            {options2.map((option, index) => {
                return <option key={index} >
                    {option}
                </option>
            })}

            </select>

            <div className='p-3' >
       <small className="align-bottom  "><a href="#" className=" text-blue-500  ">18 Nagar Parishad </a></small>
     </div>
     
  </div>

   <div className=" h-auto bg-white  md:grid-cols-6 text-center border "><div className="shadow-lg shadow-indigo-900/40  border-b-2 border-orange-600 bg-white text-black h-10 mt-auto mb-auto p-2 text-sm text-left"><AiFillBank className='float-left mt-0.5 ml-1  pb-[3px] text-xl text-yellow-500' />&nbsp;Nagar Panchayat </div>

      <select onChange={onOptionChangeHandler} className="dropdown-button text-xs/[12px] w-full bg-white p-2 border ">
            
            <option>----Select Nagar Panchayat----</option>
            {options3.map((option, index) =>  {
             return <option key={index} >
                {option}
             </option>
            })}

        
        </select>

        <div className='p-3' >
       <small className="align-bottom"><a href="#" className=" text-blue-500 ">22 Nagar Panchayat </a></small>
     </div>
     
  </div>

   <div className=" h-auto bg-white  md:grid-cols-6 text-center border "><div className="shadow-lg shadow-indigo-900/40  border-b-2 border-orange-600 bg-white text-black h-10 mt-auto mb-auto p-2 text-sm text-left"><AiFillBank className='float-left mt-0.5 ml-1  pb-[3px] text-xl text-yellow-500' />&nbsp;NAC / Municipality </div>

      {/* <select id="status" className="dropdown-button text-sm w-full bg-white p-2 border">
            
            <div className="pl-2">
            <option value="all"> ----Select NAC/Municipality--- </option>
            <option value="incomplete">Jamshedpur NAC</option>
             </div>

        
        </select> */}
        

        <select onChange={onOptionChangeHandler} className="dropdown-button text-xs/[12px] w-full bg-white p-2 border">
            
            

        
           <option> ----Select NAC/Municipality---</option>
					{options4.map((option, index) => {
						return <option key={index} >
							{option}
						</option>
					})}
                    
				</select>


         <div className='p-3' >
       <small className="align-bottom"><a href="#" className=" text-blue-500 ">1 NAC</a></small>
     </div>
     
  </div>
 
  </div>
    
    </div>
  )
}

export default Municipalcorporation