import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import config from '../../../config.json';
import axios from 'axios';
import Title from '../../react-helmet/Title';

function Sankalpsnew() {
    const navigate = useNavigate();
    const {id} = useParams();
    // console.log(id);

    const [post, setPost] = useState({
        resno : '',
        date : '',
        subject: '',
    });


    useEffect(() => {
        if(id === 'new') return;
        const fetchPost = async() => {
         const {data} = await axios.get(`${config.apiUrl1}/${id}`);
         setPost(data);
        };
       
        fetchPost();
       
       }, []);
       
       const handleChange = (e) => {
       const postClone = {...post};
       postClone[e.target.name] = e.target.value;
       setPost(postClone) 
         
       };
       
       // console.log(post);
       const handleSubmit =  async (e) =>
       {
         e.preventDefault();
       
         try {
           if(id ===  'new'){
             axios.post(config.apiUrl1, post);
             return navigate("/sankalps");
         
           }  else {
             axios.put(config.apiUrl1 + "/" + id, post);
             return navigate("/sankalps");
           } 
         }  catch (error) {
           console.log(error);
         }
       
         };


  return (
    <div>

    <Title title="Sankalps | UDHD" />
    
    <div className="grid lg:grid-cols-1">
      <form className='bg-white border border-b-4 border-indigo-500 text-center w-2/4 ml-auto mr-auto mt-5 mb-5 shadow-2xl ' >
       
      <div className='pt-40 pb-40  pl-40 pr-40 '>

      <div>
        <input
          type="number"
          placeholder='Res. no...' 
          value={post.resno}
          name="resno"
          onChange={handleChange}
          className='pb-4  mb-12 border-b-4 w-full ' 

          />
           </div>
       

           <div>
        <input
          type="date"
          placeholder='date...'
          value={post.date}
          name="date"
          onChange={handleChange}
          className='pb-4 mb-12 border-b-4 w-full' 
        />
         </div>

         <div>
        <input
          type="text"
          placeholder='subject...'
          value={post.subject}
          name="subject"
          onChange={handleChange}
          className='pb-4 mb-12 border-b-4 w-full' 
        />
         </div>
 

        <button onClick={handleSubmit} className="bg-blue-600 text-white p-2">
          {id === "new" ? "Mapping" : "Update"}
        </button>

        </div>
      </form>
      </div>

    
    
    
    </div>
  )
}

export default Sankalpsnew