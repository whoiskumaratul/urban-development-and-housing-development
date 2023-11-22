import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineTask } from 'react-icons/md';
import { AiFillForward } from 'react-icons/ai';
import Title from './react-helmet/Title';

function Notificationandtender() {

  const navigate = useNavigate()

  return (
    <div>

  <Title title="Notification Tender" />

    <div className="m-5 flex grid gap-5 lg:grid-cols-2">
  <div className="h-auto shadow-lg bg-white shadow-indigo-500/40 md:grid-cols-6 ">
    <div className="mb-auto mt-auto h-10  p-2 pl-5 text-black  border-b-4 border-orange-700 "><MdOutlineTask className='float-left mt-0.5 ml-1  pb-[3px] text-2xl text-[#FFAD04] ' />&nbsp;Important Notices</div>

    <marquee className="text-gray-600 ml-5 text-xs space-y-4 " direction="up" Scrollamount="3">
    &#61;&gt; <a href="#" className="hover:underline hover:text-orange-600 ">Deoghar Municipal Corporation: Bandobasti of Community Toilet cum Koushal Vikas Kendra</a>
      <br />
     &#61;&gt;  <a href="#" className="hover:underline hover:text-orange-600 ">  Sahibganj Nagar Parishad: NIT NOTICE NO. 1450 DATED 01.08.2022</a>
      <br />
      &#61;&gt;  <a href="#" className="hover:underline hover:text-orange-600 ">  Sahibganj Nagar Parishad: NIT Notice No.01/2022-23(RE), Letter no. 1452 dt.01.8.2022 </a><br />
      &#61;&gt;   <a href="#" className="hover:underline hover:text-orange-600 "> Sahibganj Nagar Parishad: NIT-02/2022-23(RE)</a> <br />
      &#61;&gt;  <a href="#" className="hover:underline hover:text-orange-600 ">  Sahibganj Nagar Parishad: NIT-03/2022-23(RE)</a> <br />
    
      &#61;&gt;  <a href="#" className="hover:underline hover:text-orange-600 ">  Sahibganj Nagar Parishad: पत्र संख्या- 1396 दिनांक-20.07.2022 (विनोद मराण्डी और खुशबू हेम्ब्रम के विवहा हेतु नोटिस निर्गत किया गया है )
 </a><br />
      &#61;&gt;   <a href="#" className="hover:underline hover:text-orange-600 "> Giridih Municipal Corporation: LED Tender with Terms & Conditions
</a> <br />
      &#61;&gt;  <a href="#" className="hover:underline hover:text-orange-600 "> Sahibganj Nagar Parishad: NPS NIT 06/2022-23 (Schemes) Letter no. 1392 dated- 20.7.22
</a> <br />
    
    
    </marquee>

    <div className='' >
      <p className='text-xs/[2px] pl-3 p-5 border-t-2 text-blue-600 cursor-pointer '  onClick={() => navigate('/morenotices')}>   More Notices ...</p>
    </div>
  </div>
  <div className="h-auto bg-white shadow-lg shadow-indigo-500/40 md:grid-cols-6 pb-5 border-t-4 border-orange-400 ">
    
    <ul className="mt-5 pr-5 pl-5 text-white text-xs  ">
      <li className="mb-2 bg-green-600 pl-1 rounded p-2 cursor-pointer " onClick={() => navigate('/tenders')}><AiFillForward className='float-left  ml-1  pb-2 text-2xl text-white ' />Tender</li>
      <li className="mb-2 bg-orange-600 pl-1 rounded p-2 cursor-pointer " onClick={() => navigate('/notification')}><AiFillForward className='float-left  ml-1  pb-2 text-2xl text-white ' />Notification</li>
      <li className="mb-2 bg-pink-700 pl-1 rounded p-2 cursor-pointer" onClick={() => navigate('/sanctionorders')}><AiFillForward className='float-left  ml-1  pb-2 text-2xl text-white ' />Sanction Orders</li>
      <li className="mb-2 bg-blue-600 pl-1 rounded p-2 cursor-pointer " onClick={()=> navigate('/sankalps')}><AiFillForward className='float-left  ml-1  pb-2 text-2xl text-white ' />Sankalps</li>
      <li className="bg-fuchsia-900 pl-1 rounded p-2"><AiFillForward className='float-left  ml-1  pb-2 text-2xl text-white ' />e-Newsletter</li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Notificationandtender