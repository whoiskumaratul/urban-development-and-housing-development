import React, { useEffect, useState } from 'react'
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon'
import IMAGES from '../../image/Image';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config.json';
import Footer from '../Footer';
import Copyright from '../Copyright';
import Title from '../react-helmet/Title';


function Sankalpstwo() {

  const  navigate = useNavigate()

  const [posts, setPost] = useState([]);
  const [sliceInd, setsliceInd] = useState(0)

  useEffect(() => {
    const fetchPost = async() => {
      const {data} = await axios.get(config.apiUrl1);
      setPost(data.slice(0, sliceInd));
    };

    fetchPost();

  }, [sliceInd]);



    let s = " Show ";
    let e = " entries ";
 
    const options1 = [10, 25, 50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
        setsliceInd(event.target.value)

        
    }

  return (
    <div>
    
    <Title title="Sankalps | UDHD " />
   
   <Schemesandprogramscommon header="Resolution (Sankalp)" />

   <div className='flex grid lg:grid-cols-1 ml-5 mr-5 mt-3 '>
        <div className=' bg-[#38C11C] p-4  text-white text-md font-thin drop-shadow-lg shadow-black'>
            <button className='bg-blue-600 pl-2 pr-2 pt-1 pb-1 rounded-lg ' onClick={() => navigate('/sankalpsnewtwo/new')}>New post</button>
          </div>
           
          </div>
   
    <div className='flex grid lg:grid-cols-2 ml-5 mr-5 pt-3 pl-6 bg-white shadow-lg  '>

    <div> 

   <span className='font-bold ' > {s}</span>
    
    <select onChange={onOptionChangeHandler} className="font-bold   bg-gray-300  pl-1 pr-1 pt-0.5 pb-0.5 text-black border border-black  text-sm]">
            
      <option> 0</option> 
                          {options1.map((option, index) => {
                              return <option key={index}  >
                             
                                  {option}
                              </option>
                          })}
                          
                      </select>
                      
                      <span className='font-bold' >{e}</span>
     </div>
 
  <div className='mr-auto ml-auto ' >
  
  <form action="" method="POST">

    <label className='font-bold' >Search: </label>
    <input className='border-black border ' type="text" name="search" />
  </form>
  
  </div>

    </div>
   
   
<div className=' grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6 pr-6 bg-white shadow-lg pb-5 mb-10'>
<div className=' '>
 <table className=' border-2    text-xs'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >#</th>
     <th className='w-72'>Res. No.</th>
     <th className='w-32'>Date</th>
    
     <th className='w-auto'>Subject</th>
     <th className='w-36'>Download</th>
     <th className='w-12 p-3'>Update</th>
   </tr>

   {posts.map((post) => (
    <tr  className=" border border-collapse" key={post.id}>
    <td className='text-center border border-collapse'>{post.id}</td>
    <td className='text-center border border-collapse'>{post.resno}</td>
    <td className='text-center border border-collapse'>{post.date}</td>
    <td className='text-center border border-collapse'>{post.subject}</td>
    <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
    <td className='text-center'>
    <button onClick={() => navigate(`/sankalpsnewtwo/${post.id}`)}
    className=''>Update</button>
  </td>
    </tr>
   ))}





   {/* <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >11</td>
     <td  className='text-center  border border-collapse'>3087</td>
     <td className='text-center  border border-collapse'>	29/09/2021</td>
     <td className='text-center  border border-collapse'>	वित्तीय वर्ष 2021-22 की अवधि में हजारीबाग नगर निगम के नए म्युनिसिपल बिल्डिंग निर्माण हेतु कुल 24,95,91,400/-रू0 के तकनीकी स्वीकृति प्राप्त प्राक्कलन पर प्रशासनिक स्वीकृति के संबंध में।</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >12</td>
     <td  className='text-center  border border-collapse'>2924</td>
     <td className='text-center  border border-collapse'>	21/09/2021 </td>
     <td className='text-center  border border-collapse'>राजधानी राँची में अवस्थित बिरसा मुण्डा जेल परिसर में निर्माणाधीन बिरसा मुण्डा संग्रहालय में तीन स्वतंत्रता सेनानी (पोटो हो, भागीरथ मांझी एवं गंगा नारायण सिंह) की प्रतिमा निर्माण का कार्य M/s Ram Sutar Art Creations Pvt. Ltd. को मनोनयन के आधार पर आवंटित करने के संबंध में।</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >13</td>
     <td  className='text-center  border border-collapse'>2559</td>
     <td className='text-center  border border-collapse'>27/08/2021</td>
     <td className='text-center  border border-collapse'>जमताड़ा नगर पंचायत क्षेत्रान्तर्गत Annuity Model के आधार पर LED पथ प्रकाश व्यवस्था के अधिष्ठापन हेतु कुल रूपये 1,42,79,489/-की योजना की प्रशासनिक स्वीकृति के संबंध में।</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >14</td>

     <td className='text-center  border border-collapse'>578 </td>
     <td className='text-center  border border-collapse'>17/02/2021 </td>
     <td className='text-center  border border-collapse'>झारखण्ड राज्य के अंतर्गत चास, राँची एवं मानगो नगर निकाय के शहरी क्षेत्र में चिन्हित नालों से बहने वाले Sewage की रोकथाम हेतु " In situ Remediation/Treatment" कार्य के लिए राष्ट्रीय पर्यावरण अभियांत्रिकी अनुसंधान संस्थान (नीरी), (CSIR-NEERI) को मानदेय के आधार पर DPR तैयार करने एवं इस निमित्त परामर्शी शुल्क रूप में कुल राशि 153.25 लाख रू० का व्यय राज्य योजना मद अंतर्गत सुसंगत मद से करने हेतु स्वीकृति के संबंध में। </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >15</td>
     <td className='text-center  border border-collapse'>511</td>
     <td className='text-center  border border-collapse'>	11/02/2021</td>
     <td className='text-center  border border-collapse'>“शहरी स्थानीय निकायों के अंतर्गत अवस्थित तालाबों, सैरात का सुरक्षित जमा निर्धारण एवं सैरात की बन्दोबस्ती हेतु प्रक्रिया” स्वीकृति के संबंध में।</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >16</td>
     <td  className='text-center  border border-collapse'>27328496</td>
     <td className='text-center  border border-collapse'>	11/02/2021</td>
     <td className='text-center  border border-collapse'>	राँची में प्रधानमंत्री आवास योेजनान्तर्गत आवास बनाने एवं अन्य विकासात्मक कार्यों हेतु मेसर्स भारी अभियंत्रण निगम लि०, राँची द्वारा नगर विकास एवं आवास विभाग को हस्तांतरित की जानी वाली 306.86 एकड़ भूमि में से 137.08 एकड़ भूमि का राजस्व एवं भूमि सुधार विभाग, झारखण्ड सरकार (जिस पर GRDA द्वारा राँची को कैपिटल एरिया विकसित करने का कार्य किया जा रहा है) के पक्ष में भूमि हस्तांतरण (अदला बदली) एवं नगर विकास एवं आवास विभाग के द्वारा PMAY (U) के तहत एवं अन्य आवासीय एवं व्यवसायिक योजनाओं के निर्माण हेतु सःशुल्क झारखण्ड राज्य आवास बोर्ड को हस्तांतरण करने के संबंध में।</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >17</td>
     <td  className='text-center  border border-collapse'>2736</td>
     <td className='text-center  border border-collapse'>04/11/2020</td>
     <td className='text-center  border border-collapse'>राँची में प्रधानमंत्री आवास योेजनान्तर्गत आवास बनाने एवं अन्य विकासात्मक कार्यों हेतु मेसर्स भारी अभियंत्रण निगम लि०, राँची द्वारा नगर विकास एवं आवास विभाग को हस्तांतरित की जानी वाली 306.86 एकड़ भूमि में से 137.08 एकड़ भूमि का राजस्व एवं भूमि सुधार विभाग, झारखण्ड सरकार (जिस पर GRDA द्वारा राँची को कैपिटल एरिया विकसित करने का कार्य किया जा रहा है) के पक्ष में भूमि हस्तांतरण (अदला बदली) एवं नगर विकास एवं आवास विभाग के द्वारा PMAY (U) के तहत एवं अन्य आवासीय एवं व्यवसायिक योजनाओं के निर्माण हेतु सःशुल्क झारखण्ड राज्य आवास बोर्ड को हस्तांतरण करने के संबंध में। </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >18</td>
     <td  className='text-center  border border-collapse'>2629</td>
     <td className='text-center  border border-collapse'>	22/10/2020 </td>
     <td className='text-center  border border-collapse'>	जमशेदपुर अधिसूचित क्षेत्र समिति अंतर्गत बिरसानगर-बागूनहातु जलापूर्ति योजना हेतु द्वितीय पुनरीक्षित प्राक्कलन कुल रू० 30,19,39,000/ मात्र की प्रशासनिक स्वीकृति एवं अतिरेक राशि भुगतान की स्वीकृति के संबंध में।</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >19</td>
     <td  className='text-center  border border-collapse'>2630</td>
       
     <td className='text-center  border border-collapse'>	22/10/2020</td>
     <td className='text-center  border border-collapse'>राँची शहर में निर्माणाधीन चार मुख्य पथों के कार्यान्वयन हेतु सर्वश्री जुडको लि० के द्वारा संबंधित संवेदक के साथ किए गए एकरारनामा को समाप्त करने/योजना के कार्यक्षेत्र को सीमित करने तथा इन योजनाओं को बन्द करने की स्वीकृति के संबंध में। </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >20</td>
     <td  className='text-center  border border-collapse'>5383</td>
       
     <td className='text-center  border border-collapse'>	31/10/2019</td>
     <td className='text-center  border border-collapse'>	जिला खनिज फाउंडेशन ट्रस्ट, चाईबासा से वित्त पोषण हेतु JnNURM अंतर्गत स्वीकृत चाईबासा शहरी जलापूर्ति योजना की प्रथम पुनरीक्षित प्राक्कलित राशि 43,96,73,000 रू० की प्रशासनिक स्वीकृति के संबंध में।</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr> */}



 </table>
 </div>



<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-transparent pl-4 pr-4 pt-2 pb-2  hover:text-white hover:bg-gray-800  ' onClick={() => navigate('/sankalps')} > 1</button></span>

<span className='ml-1' ><button type="button" className=' bg-gray-300  border  border-black pl-4 pr-4 pt-2 pb-2 '  > 2</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white   ' onClick={() => navigate('/sankalpsthree')} > 3</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800 pl-4 pr-4 pt-2 pb-2 hover:text-white   ' > 4</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2  hover:text-white  ' > 5</button></span>

<span className='ml-1' ><button type="button" className=' pl-1 pr-1   ' > ...</button></span>


<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' >22</button></span>
<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white    ' >Next</button></span>


</span>




</div>
</div> 

 </div>


<Footer />
<Copyright />

</div>
  )
}

export default Sankalpstwo