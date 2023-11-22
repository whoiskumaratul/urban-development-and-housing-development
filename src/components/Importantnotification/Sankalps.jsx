import IMAGES from '../../image/Image';
import Schemesandprogramscommon from '../../schemesandprograms/Schemesandprogramscommon';
import Footer from '../Footer';
import Copyright from '../Copyright';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import config from '../../config.json';

import { Helmet } from 'react-helmet';
import Title from '../react-helmet/Title';

function Sankalps() {

    const navigate = useNavigate()

    const [posts, setPost] = useState([]);
    const [sliceInd, setsliceInd] = useState(0);

    useEffect(() => {
      const fetchPost = async() => {
        const {data} = await axios.get(config.apiUrl1);
        setPost(data.slice(0, sliceInd));
      };
  
      fetchPost();
    }, [sliceInd]);
     
     
    let s = " Show ";
    let e = " entries ";
 
    const options1 = [10,25,50, 100];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected " , event.target.value);
        setsliceInd(event.target.value)
    }

  return (
    <div>

 <Title title="Sankalps | UDHD" /> 

    
   
    <Schemesandprogramscommon header= 'Resolution (Sankalp)' />
    
    <div className='flex grid lg:grid-cols-1 ml-5 mr-5 mt-3 '>
        <div className=' bg-[#38C11C] p-4  text-white text-md font-thin drop-shadow-lg shadow-black'>
            <button className='bg-blue-600 pl-2 pr-2 pt-1 pb-1 rounded-lg ' onClick={() => navigate('/sankalpsnew/new')}>New post</button>
          </div>
           
          </div>
   
    <div className='flex grid lg:grid-cols-2 ml-5 mr-5  pt-3 pl-6 bg-white shadow-lg  '>
    
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
   
   
<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pr-5 pt-3 pl-6 bg-white shadow-lg pb-5 mb-10'>

<div className=' '>
 <table className=' border-2    text-sm'>
   <tr className=' text-white bg-blue-500'>
     <th className='p-5' >#</th>
     <th className='w-72'>Res. No.</th>
     <th className='w-32'>Date</th>
    
     <th className=' '>Subject</th>
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
    <button onClick={() => navigate(`/sankalpsnew/${post.id}`)}
    className=''>Update</button>
  </td>
    </tr>
   ))}



   {/* <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >1</td>
     <td  className='text-center  border border-collapse'>2572</td>
     <td className='text-center  border border-collapse'>	26/07/2022</td>
     <td className='text-center  border border-collapse'>	राजधानी रांची अवस्थित अल्बर्ट एक्का चौक पर Foot Over Bridge with provision of escalator निर्माण हेतु कुल 16,99,24,400/-रु. मात्र के लागत की योजना पर प्रशासनिक स्वीकृति के सम्बन्ध में.</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
      

   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3  pb-5 pt-3' >2</td>
     <td  className='text-center  border border-collapse'>1599</td>
     <td className='text-center  border border-collapse'>	11/05/2022 </td>
     <td className='text-center  border border-collapse'>रामगढ़ नगर परिषद् क्षेत्रान्तर्गत Annuity Model के आधार पर LED पथ प्रकाश व्यवस्था के अधिष्ठापन हेतु कुल 3,32,01,047/- रु ० की योजना की प्रशासनिक स्वीकृति के सम्बन्ध में .</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     
   </tr>

   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >3</td>
     <td  className='text-center  border border-collapse'>1599</td>
     <td className='text-center  border border-collapse'>11/05/2022</td>
     <td className='text-center  border border-collapse'>रामगढ़ नगर परिषद् क्षेत्रान्तर्गत Annuity Model के आधार पर LED पथ प्रकाश व्यवस्था के अधिष्ठापन हेतु कुल 3,32,01,047/- रु ० की योजना की प्रशासनिक स्वीकृति के सम्बन्ध में .</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>


   <tr className=" border border-collapse">
     <td className='pl-3 pb-5 pt-3' >4</td>

     <td className='text-center  border border-collapse'>1600 </td>
     <td className='text-center  border border-collapse'>11/05/2022 </td>
     <td className='text-center  border border-collapse'>छत्तरपुर गर पंचायत क्षेत्रान्तर्गत Annuity Model के आधार पर LED पथ प्रकाश व्यवस्था के अधिष्ठापन हेतु कुल 2,48,44,893/- रु ० की योजना की प्रशासनिक स्वीकृति के सम्बन्ध में . </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
      

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >5</td>
     <td className='text-center  border border-collapse'>1600</td>
     <td className='text-center  border border-collapse'>	11/05/2022</td>
     <td className='text-center  border border-collapse'>	छत्तरपुर गर पंचायत क्षेत्रान्तर्गत Annuity Model के आधार पर LED पथ प्रकाश व्यवस्था के अधिष्ठापन हेतु कुल 2,48,44,893/- रु ० की योजना की प्रशासनिक स्वीकृति के सम्बन्ध में .</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >6</td>
     <td  className='text-center  border border-collapse'>1600</td>
     <td className='text-center  border border-collapse'>	11/05/2022 </td>
     <td className='text-center  border border-collapse'>	छत्तरपुर गर पंचायत क्षेत्रान्तर्गत Annuity Model के आधार पर LED पथ प्रकाश व्यवस्था के अधिष्ठापन हेतु कुल 2,48,44,893/- रु ० की योजना की प्रशासनिक स्वीकृति के सम्बन्ध में .</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>

   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >7</td>
     <td  className='text-center  border border-collapse'>3100</td>
     <td className='text-center  border border-collapse'>30/09/2021 </td>
     <td className='text-center  border border-collapse'>राँची शहर हेतु पूर्व स्वीकृत काँटाटोली फ्लाईओवर के निर्माण परियोजना के समापन की स्वीकृति एवं योगदा सत्संग आश्रम, बहुबजार से शांति नगर, कोकर तक (वाया काँटाटोली चौक) 2240 मी० लंबे फ्लाईओवर के निर्माण हेतु कुल रू० 224,94,54,000/- रूपये (भू-अर्जन सहित) लागत की परियोजना पर प्रशासनिक स्वीकृति के संबंध में। </td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >8</td>
     <td  className='text-center  border border-collapse'>3101</td>
     <td className='text-center  border border-collapse'>	30/09/2021 </td>
     <td className='text-center  border border-collapse'>	रराजधानी राँची में EPC Model पर ट्रांसपोर्ट नगर निर्माण योजना के फेज-प् हेतु कुल 113,24,22,642/-रू० मात्र की योजना की प्रशासनिक स्वीकृति के संबंध में।</td>
      
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

   </tr>



   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >9</td>
     <td  className='text-center  border border-collapse'>3102</td>
       
     <td className='text-center  border border-collapse'>	30/09/2021</td>
     <td className='text-center  border border-collapse'>एशियन डेवेलपमेंट बैंक संपोषित झारखण्ड अर्बन वाटर सप्लाई उम्प्रुवमेंट प्रोजेक्ट (JUWSIP) के अंतर्गत झुमरीतिलैया नगर परिषद हेतु 15092.63 लाख रू० की लागत पर तकनीकी स्वीकृति प्राप्त झुमरीतिलैया शहरी जलापूर्ति योजना की प्रशासनिक स्वीकृति के संबंध में।  </td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr>


   <tr className=" border border-collapse">
     <td  className='pl-3 pb-5 pt-3' >10</td>
     <td  className='text-center  border border-collapse'>3103</td>
       
     <td className='text-center  border border-collapse'>	30/09/2021</td>
     <td className='text-center  border border-collapse'>	देवघर जिलान्तर्गत अंचल-मोहनपुर के मौजा-दुम्मा में आवासीय कॉलोनी विकसित करने हेतु नगर विकास एवं आवास विभाग के पक्ष में हस्तांतरित 58.00 एकड़ परती कदीम भूमि को झारखण्ड राज्य आवास बोर्ड, राँची को निःशुल्क हस्तांतरण किये जाने के संबंध में।</td>
     <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>
     

   </tr> */}



 </table>
 </div>



<div className='flex grid lg:grid-cols-1 ml-5 mr-5 pt-3 pl-6     '>

<div className='float-right ' >
<span className='float-right text-black ' >

previous 
<span className='ml-5' ><button type="button" className=' bg-gray-300 pl-4 pr-4 pt-2 pb-2 border border-black ' > 1</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' onClick={() => navigate('/sankalpstwo')} > 2</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' > 3</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800 pl-4 pr-4 pt-2 pb-2 hover:text-white ' > 4</button></span>

<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2  hover:text-white' > 5</button></span>

<span className='ml-1' ><button type="button" className=' pl-1 pr-1   ' > ...</button></span>


<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' > 22</button></span>
<span className='ml-1' ><button type="button" className=' bg-transparent hover:bg-gray-800  pl-4 pr-4 pt-2 pb-2 hover:text-white ' >Next</button></span>


</span>




</div>
</div> 

 

</div>

<Footer />
<Copyright />

    </div>
  )
}

export default Sankalps