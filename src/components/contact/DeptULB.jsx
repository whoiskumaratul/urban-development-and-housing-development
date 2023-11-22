import React from 'react'
import Title from '../react-helmet/Title';

function DeptULB() {


    
    const options1 = ['Urban Development & Housing Dept', 'Directorate of Municipal Administration', 'State Urban Development Agency', 'Jharkhand State Housing Board', 'JUIDCO', 'JUTCOL', 'Ranchi Smart City of Corporation Limited', 'Adityapur Municipal Corporation', 'Bachra Nagar Panchayat', 'Barharwa Nagar Panchayat', 'Basukinath Nagar Panchayat', 'Bishrampur Nagar Parishad', 'Bundu Nagar Panchayat', 'Chaibasa Nagar Parishad', 'Chakradhapur  Nagar Parishad', 'Chakulia Nagar Panchayat' ];

    const onOptionChangeHandler = (event) => {
        console.log("user Selected Value - ", event.target.value)
    }

    


  return (
    <div>
    

    <Title title="DeptULB | UDHD" />
    
 <div className="flex grid lg:grid-cols-2 gap-2 m-5 mt-5  bg-slate-300 ">


<div className=" h-auto md:grid-cols-6 text-left bg-white mt-3 ml-5 mr-5 mb-3 text-sm shadow-lg shadow-indigo-900/40 "> <h1 className="p-2">Select Dept. / ULB for contact info & send e-Mail</h1>


<div className="border-t-2 border-orange-400 m-0 p-0">
  <select onChange={onOptionChangeHandler} className="dropdown-button w-full bg-white p-2 border-2 mt-2 border-slate-400 text-xs/[12px]   ">

  <option> Please Select </option>
					{options1.map((option, index) => {
						return <option key={index}  >
                       
							{option}
						</option>
					})}
                    
				</select>
  
  </div>

  <table className='m-5'>
   
  <tr className='border border-2 ' >
    <td className='p-1  font-semibold'  >Address </td>
    <td className='p-1'></td>
     <td className='p-1 font-semibold' >Project Building, 4th Floor, Dhurwa</td>
  </tr>
  <tr className='border border-2 '>
    <td className='p-1 font-semibold'>eMail ID </td>
    <td className='p-1'></td>
    <td className='p-1 font-semibold'>ud.secy@gmail.com</td>
    
  </tr>

  <tr className='border border-2 '>
    <td className='p-1  font-semibold'>Phone No.  </td>
    <td className='p-1'></td>
    <td className='p-1 font-semibold'>0651-2400962</td>
    
  </tr>

  <tr className='border border-2 '>
    <td className='p-1 font-semibold'>Fax No. 	 </td>
    <td className='p-1'></td>
    <td className='p-1 font-semibold'>0651-2400962</td>
    
  </tr>

  <tr className='border border-2 '>
    <td className='p-1 font-semibold'>Executive Officer </td>
    <td className='p-1'></td>
    <td className='p-1 font-semibold'>0651-2400962</td>
  </tr>

  <tr className='border border-2 '>

    <td className='p-1 font-semibold'>EO's Mobile No.</td>
  </tr>
</table>

</div>
   <div>
    </div>
</div> 




<div className='flex lg:grid-cols-1 m-5 h-auto  bg-slate-300 '>
  <div className='w-[100%]'>
  <iframe className='w-full max-h-96 p-5  ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.353419260962!2d85.3081750755732!3d23.375428578927966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0e3ac9571fb%3A0xbfd684943698a996!2sPahari%20Mandir%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1681554981832!5m2!1sen!2sin" ></iframe>
  </div>
</div>







</div>
  )
}

export default DeptULB