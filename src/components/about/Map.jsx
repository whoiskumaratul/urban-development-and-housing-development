import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import config from "../../../src/config.json";

import { toast } from "react-toastify";
//import { Helmet } from "react-helmet";
import Title from "../react-helmet/Title";

function Map() {
  const navigate = useNavigate();
  const {id} = useParams();
  //  console.log(id);
//const param = useParams();
//console.log(param);

const [post, setPost] = useState({
urbanlocalbodies : '',
viewmaps : '',

});


useEffect(() => {
 if(id === 'new') return;
 const fetchPost = async() => {
  const {data} = await axios.get(`${config.apiUrl}/${id}`);
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
      axios.post(config.apiUrl, post);
      return navigate("/maps");
  
    }  else {
      axios.put(config.apiUrl + "/" + id, post);
      // return navigate("/maps");
      navigate("/maps");
      toast("Data Updated");
    } 
  }  catch (error) {
    console.log(error);
  }

  };

  return (
    <div>

{/*
<div>
    <Helmet>
    <title>Maps | UDHD</title>
   </Helmet>
    </div> */}


    <Title title="Map | UDHD" />


    <div className="grid lg:grid-cols-1">
      <form className='bg-white border border-b-4 border-indigo-500 text-center w-2/4 ml-auto mr-auto mt-5 mb-5 shadow-2xl ' >
       
      <div className='pt-40 pb-40  pl-40 pr-40 '>

      <div>
        <input
          type="text"
          placeholder='Urban Local bodies...' 
          value={post.urbanlocalbodies}
          name="urbanlocalbodies"
          onChange={handleChange}
          className='pb-4  mb-12 border-b-4 w-full ' 

          />
           </div>
       

           <div>
        <input
          type="text"
          placeholder='Link of pdf...'
          value={post.viewmaps}
          name="viewmaps"
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
  );
}

export default Map;
