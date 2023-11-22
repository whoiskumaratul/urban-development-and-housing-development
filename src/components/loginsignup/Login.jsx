import Footer from '../Footer'
import Copyright from '../Copyright'
import { FaRegistered } from 'react-icons/fa';
import Title from '../react-helmet/Title';

function Login() {

    const options1 = ['Employee', 'Organisation', 'Consultant'];
    const onOptionChangeHandler = (event) => {
        console.log("Use Selected Value", event.target.value);
    }

  return (
    <div>
   
   <Title title="Login | UDHD " />

       <div className="flex grid  grid-cols-1 lg:w-[450px] m-5 bg-yellow-400  p-2 shadow-lg shadow-indigo-900/40 ">
  <div className=" text-white text-center p-2"> 
      Login Panel</div>

 <div className="bg-white h-auto md:grid-cols-6 text-center">

 <div className="grid grid-rows-3 grid-flow-col ">

   <div className='pl-5 pr-5 pt-5' > <select onChange={onOptionChangeHandler} className="dropdown-button  w-full bg-white p-2 border text-xs/[12px]">
            
            <option> Please Select User Type</option>
                          {options1?.map((option, index) => {
                              return <option key={index}  >
                             
                                  {option}
                              </option>
                          })}
                          
                      </select></div>


   <div>
     
     
    <div className='pl-5 pr-5  '>
      <input type="text" className='w-full p-2 border-2 text-xs/[16px]  font-semibold ' placeholder='Enter User ID' />
    </div>

    <div className='pl-5 pr-5  pt-1'>
      <input type="password" className='w-full p-2 border-2 text-xs/[16px] font-semibold ' placeholder='Enter Password' />
    </div>

    <div className='pl-5 pr-5  pt-2'>
      <button type="button" className=' float-right pl-5 pr-5 pt-1 pb-1 text-center text-white text-sm bg-blue-600 font-semibold hover:bg-blue-500 '> <FaRegistered className='float-left mt-0.5 ' />&nbsp; Login</button>
    </div> 
   </div>
  
   <div className=' border-2 mt-20 bg-gray-100'>
  <small className='float-left  pl-2 pt-1 text-blue-700 ' ><a href="#">Forgot Password</a></small>
   </div>
   </div>   
  </div>
  </div>

  <Footer />
  <Copyright />


    </div>
  )
}

export default Login