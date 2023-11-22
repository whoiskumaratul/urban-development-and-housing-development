import React from 'react'
import IMAGES from '../../../image/Image';
import Footer from '../../Footer';
import Copyright from '../../Copyright';
import Title from '../../react-helmet/Title';

function Budget() {
    let a = ' Dept. / ULB Name  ';
    let b = 'Financial Year';

const options1 = ['Adityapur Municipal Corporation', 'Bachra Nagar Panchayat', 'Badaki Saraiya Naagr Pachayat', 'Barharwa Nagar Panchayat', 'Basukinath Nagar Panchayat', 'Bishrampur Nagar Parishad', 'Bundu Nagar Panchayat', 'Chaibasa Nagar Parishad', 'Chakradharpur Nagar Parishad', 'Chakulia Nagar Panchayat', 'Chas Municipal Corporation', 'Chatra Nagar Parishad', 'Chirkunda Nagar Parishad', 'Deoghar Municipal Corporation', 'Dhanbad Municipal Corporation', 'Dhanvar Nagar Panchayat', 'Chas Municipal Corporation', 'Domchanch Nagar Panchayat', 'Dumka Nagar Parishad', 'Giridih Municipal Corportaion', 'Godda Nagar Parishad', 'Gumla Nagar Parishad', 'Hariharganj Nagar Panchayat'];

const options2 = ['2011-2012','2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2022-2021', '2021-2022', '2022-2023', '2023-2024'];

const onOptionChangeHandler = (event) => 
{
    console.log("User Selected", event.target.value);
}


const onOptionChangeHandler2 = (event) => {
    console.log("User Selected", event.targe.value);
}

return (
<div>
   

  <Title title=" Budget | UDHD " />


<div className='grid lg:grid-cols-1 bg-white ml-8 mr-8 mt-5  pl-5  pt-5'>
      
      <h1 className=' border-b-2 border-b-rose-600 w-full'>Budget </h1>
          </div>
 

<div className="bg-white ml-8 mr-8 mb-5">
  <div className=" p-5   grid gap-5 lg:grid-cols-3 ">
    <div>
      <span className="font-bold uppercase mr-10">{a}</span>
      <select
        onChange={onOptionChangeHandler}
        className="bg-white pl-3 pt-2 pb-2    border border-blue-500  text-sm  "
      >
        <option>Please Select</option>
        {options1.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>

 
  

  <div className='  grid   '>
    <div>
    <span className='font-bold uppercase mr-10'>{b}</span>
    <select onChange={onOptionChangeHandler2}
    className='bg-white pl-3 pr-6 pt-2 pb-2 border border-blue-500 text-sm'
    >
     <option>Please Select</option>
        {options2.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}

    </select>
  </div>
  </div>

  <div>
      <input
        type="submit"
        value="Filter"
        className="bg-green-600 hover:bg-green-500 text-white pt-1 pb-1 pl-24 pr-24 ml-20"
      />
    </div>
  </div> 



<div className=' grid lg:grid-cols-1  p-5'>

<div className=' '>
<table className='w-full border-2 shadow-sm  bg-white text-xs  '>
<tr className=' text-white bg-blue-500'>
 <th className='p-3' >#</th>
 <th className='w-auto'>ULB</th>
 <th className='w-36 '>Financial Year</th>
 <th className='auto'>Subject</th>
 <th className='w-24'>Amount</th>
 <th className='w-24'>Download</th>

</tr>

<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >1</td>
 <td  className='text-center  border border-collapse'>Basukinath Nagar Panchayat</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 271000000.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >2</td>
 <td  className='text-center  border border-collapse'>Jhumritilaiya Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24</td>
 <td className='text-center  border border-collapse'> 501034742.00</td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >3</td>
 <td  className='text-center  border border-collapse'>Simdega Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'>447159765.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >4</td>
 <td  className='text-center  border border-collapse'>Gumla Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'>769846340.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >5</td>
 <td  className='text-center  border border-collapse'>Nagar Uttari Nagar Panchayat</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 7474400.00</td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >6</td>
 <td  className='text-center  border border-collapse'>Khunti Nagar Panchayat</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 312390815.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >7</td>
 <td  className='text-center  border border-collapse'>Godda Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 714023747.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >8</td>
 <td  className='text-center  border border-collapse'>Dumka Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 331944838.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >9</td>
 <td  className='text-center  border border-collapse'>Dhanvar Nagar Panchayat</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 40425000.00</td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >11</td>
 <td  className='text-center  border border-collapse'>Lohardaga Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Summary of Budget for the Period FY 2023-24 (Nagar Parishad, Lohardaga) </td>
 <td className='text-center  border border-collapse'> 789541000.00</td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >12</td>
 <td  className='text-center  border border-collapse'>Chatra Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 172636588.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >13</td>
 <td  className='text-center  border border-collapse'>Badaki Saraiya Nagar Panchayat</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 66303665.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >14</td>
 <td  className='text-center  border border-collapse'>Chakradharpur Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 201180000.00</td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >15</td>
 <td  className='text-center  border border-collapse'>Hariharganj Nagar Panchayat</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 23020363.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >16</td>
 <td  className='text-center  border border-collapse'>Sahibganj Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 1220537500.00</td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >17</td>
 <td  className='text-center  border border-collapse'>Barharwa Nagar Panchayat</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for the FY 2023-24 </td>
 <td className='text-center  border border-collapse'> 372082591.00</td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >18</td>
 <td  className='text-center  border border-collapse'>Rajmahal Nagar Panchayat</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'>225960606.00 </td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >19</td>
 <td  className='text-center  border border-collapse'>Jamshedpur NAC</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 1030000000.00</td>
 <td><img className='w-4 ml-auto mr-auto  ' src={ IMAGES.image12 } alt="downloader" /></td>

</tr>



<tr className=" border border-collapse">
 <td className=' pb-3 pt-3 text-center' >20</td>
 <td  className='text-center  border border-collapse'>Garhwa Nagar Parishad</td>
 <td className='text-center  border border-collapse'> 2023-2024 </td>
 <td className='text-center  border border-collapse'>Budget for Financial Year 2023-24 </td>
 <td className='text-center  border border-collapse'> 444048703.00 </td>
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



export default Budget