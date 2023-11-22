import React, { useEffect, useState } from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import Footer from '../Footer'
import Copyright from '../Copyright'
import { useNavigate } from 'react-router-dom'
import config from '../../../src/config.json';
import axios from 'axios'
import { toast } from "react-toastify";
import "./Maps.css";
import Modal from "react-modal";
import { Helmet } from 'react-helmet'
import Title from '../react-helmet/Title'


function Maps() {
  const modalStyles = {
    content: {
      color: "black",
    },
  };


  const navigate = useNavigate()
   
  // for displaying the data

  const [posts, setPostt] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchPost = async() => {
      const {data} = await axios.get(config.apiUrl);
      setPostt(data);
    };
    
    fetchPost();
  }, []);

const [profileId, setprofileId] = useState(null);

const [showModal, setShowModal] = useState(false);
  const MyModal = () => {
    return (
      <>

{/* <div>
   <Helmet>
    <title>Functions | UDHD</title>
   </Helmet>
    </div> */}

    <Title title="Maps | UDHD" />



        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <h1 className="uppercase ">Confirmation for Deletion</h1>

          {/* <button className='  pt-1 pb-1 pr-3 pl-3' onClick={() => setShowModal(true)} > */}
          {/* Accept it */}
          <button
            className="  pt-1 pb-1 pr-3 pl-3 model-btn"
            onClick={closeModal}
          ></button>

          <div className="space-x-5">
            <button
              className="bg-green-500 pl-2 pr-2 pt-1 pb-2 text-white  rounded-2xl"
              onClick={handlSubmit}
              // onClick={() => {
              //  handlSubmit();
              //  handleYes );
              // }}
            >
              Yes
            </button>

            <button
              className="bg-red-500 pl-2 pr-2 pt-1 pb-2 text-white  rounded-2xl"
              onClick={() => setShowModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </>
    );
  };


const handleDelete = async (post) => {
    // alert("Do you want to delete")
    if (profileId == null) {
      return true;
    }

    // try {
      // setPostt(posts.filter(p=> p.id !== post.id))
      // await axios.delete(`${config.apiUrl}/${post.id}`);
      axios
      .delete(`${config.apiUrl}/${profileId}`)
      .then((res) => {
        toast.success("Deleted Successfull");
        console.log("deleted success => ", res);

        closeModal();
      })
      .catch((err) => console.log(err));
  };
      
  //   }
  //   catch (error){
  //  console.log(error);
  //   }
  //   }

  

   const handlSubmit = async () => {
    handleDelete();
    //  alert("Profile Deleted")

    setShowModal(false);
  };

  return (
    <>
    <div>
    
     <Schemesandprogramscommon header='Urban Local Bodies Maps' />




     <div className='flex grid lg:grid-cols-1 ml-5 mr-5 mt-3 '>
        <div className=' bg-[#38C11C] p-4  text-white text-md font-thin drop-shadow-lg shadow-black'>
            <button className='bg-blue-600 pl-2 pr-2 pt-1 pb-1 rounded-lg ' onClick={() => navigate('/map/new')}>New post</button>
          </div>
           
          </div>


    <div class="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white    ml-5 mr-5   ">

     

<div class="  w-auto  h-auto md:grid-cols-6 pl-10 pt-5  ">
{/* pb-40 */}

 
 <table className=' border-2 shadow-sm ml-5 bg-white text-sm  '>
   <tr className=' text-white bg-blue-500 '>
     <th className='w-12 p-3 ' >#</th>
     <th className='w-[415px] '>Urban Local Bodes</th> 
     <th className='w-48'>View Maps</th>
     <th className='w-12 p-3'>Update</th>
     <th className='=w-12 p-3'>Delete</th>
     
   </tr>
{/*  for displaying the data */}

   {posts.map((post) => (
    <tr  className=" border border-collapse" key={post.id}>
  <td  className='text-center p-3' >{post.id}</td>
  <td  className='pl-2  border border-collapse '>{post.urbanlocalbodies}</td>
  <td className='text-center  border border-collapse'>{post.viewmaps}</td>
  <td className='text-center'>
    <button onClick={() => navigate(`/map/${post.id}`)}
    className=''>Update</button>
  </td>

  <td className='text-center'>
    {/* <button onClick={() => handleDelete(post)}  */}
    <button onClick={() => {
      setprofileId(post?.id);
      setIsOpen(true);
    }}
    className=''
    >
    {" "}
    Delete
    </button>
    {showModal && <MyModal closeModal={closeModal} />}
  </td>
  </tr>
 // for displaying the data


   ))}

   {/* <tr className=" border border-collapse">
     <td className='text-center p-3' >1</td>
     <td  className='pl-2  border border-collapse '>All Urban Local Bodies, Jharkhand</td>
     <td className='text-center  border border-collapse'>View</td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >2</td>
     <td  className='pl-2  border border-collapse'> 	Bundu Nagar Panchayat</td>
     <td className='text-center  border border-collapse'>	View </td>
     

   </tr>

   


   {/* <tr className=" border border-collapse">
     <td  className='text-center p-3' >{localStorage.getItem("serial No")}</td>
     <td  className='pl-2  border border-collapse'>{localStorage.getItem("urban local bodies")}</td>
       
     <td className='text-center  border border-collapse'>	{localStorage.getItem("viewmaps")}</td>
     

   </tr> */}



 </table>
 

</div>



<div class="  w-auto  h-auto md:grid-cols-6 pl-10 pt-5 pb-6 ">
<table className='border border-2 shadow-sm ml-5 bg-white text-sm  '>
   <tr className=' text-white bg-blue-500'>
     <th className='w-12 p-3' >#</th>
     <th className='w-[415px]'>Urban Local bodies</th>
     <th className='w-48'>View Maps</th>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >13</td>
     <td  className='pl-2  border border-collapse'>Hazaribag Municipal Corporation</td>
     <td className='text-center  border border-collapse'>View</td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >14</td>
     <td  className='pl-2  border border-collapse'>Hussainabad Nagar Panchayat</td>
     <td className='text-center  border border-collapse'>	View </td>
    
      

   </tr>

   <tr className=" border border-collapse">
     <td className='text-center p-3' >15</td>
     <td  className='pl-2  border border-collapse'>Jhumritilaiya Nagar Parishad</td>
     <td className='text-center  border border-collapse'>View </td>
    
      

   </tr>


   <tr className=" border border-collapse">
     <td className='text-center p-3' >16</td>

     <td className='pl-2  border border-collapse'>	Khunti Nagar Panchayat </td>
     <td className='text-center  border border-collapse'>View  </td>
     
      
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >17</td>
     <td className='pl-2  border border-collapse'>Koderma Nagar Panchayat</td>
     <td className='text-center  border border-collapse'>	View</td>
     
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >18</td>
     <td  className='pl-2  border border-collapse'>Lohardaga Nagar Parishad</td>
     <td className='text-center  border border-collapse'>	View  </td>
      
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='text-center p-3' >19</td>
     <td  className='pl-2  border border-collapse'>Madhupur Nagar Parishad</td>
     <td className='text-center  border border-collapse'>	View  </td>
     

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >20</td>
     <td  className='pl-2  border border-collapse'>Manjhiaon Nagar Panchayat</td>
     <td className='text-center  border border-collapse'>	View  </td>
     
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >21</td>
     <td  className='pl-2  border border-collapse'>Medininagar Nagar Parishad</td>
       
     <td className='text-center  border border-collapse'>	View</td>
     

   </tr>




   <tr className=" border border-collapse">
     <td  className='text-center p-3' >22</td>
     <td  className='pl-2  border border-collapse'>Pakur Nagar Parishad</td>
       
     <td className='text-center  border border-collapse'>	View</td>
      

   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >23</td>
     <td  className='pl-2  border border-collapse'>Rajmahal Nagar Panchayat</td>
       
     <td className='text-center  border border-collapse'>	View</td>
    
   </tr>



   <tr className=" border border-collapse">
     <td  className='text-center p-3' >24</td>
     <td  className='pl-2  border border-collapse'>Saraikela Nagar Panchayat</td>
       
     <td className='text-center  border border-collapse'>	View</td>
     

   </tr>

  
 </table>
 


</div>

</div>


<Footer />
<Copyright />

<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="justify-center flex  w-96 h-56 mt-48 ml-auto mr-auto   bg-gray-200  pb-auto pt-16  "
        contentLabel="Example Modal"
        // closeTimeoutMS={500}
        style={modalStyles}
      >
        <div className="">
          <div
            className="font-bold absolute top-2 right-2 p-t-1 pb-1 pl-2 pr-2 rounded-2xl hover:bg-red-500 hover:text-white "
            onClick={closeModal}
          >
            &times;
          </div>

          <div>
            <div className="text-xl">Are you sure want to delete ?</div>

            <div className="space-x-10 text-center mt-10 text-white">
              <button
                className="bg-red-600 pt-1 pb-1 pl-6 pr-6 "
                onClick={() => handleDelete()}
              >
                Yes
              </button>
              <button
                className="bg-green-600 pt-1 pb-1 pl-6 pr-6 "
                onClick={closeModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>

    
    </div>
    </>
  )
}

export default Maps