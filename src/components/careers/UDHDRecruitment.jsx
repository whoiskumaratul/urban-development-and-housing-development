import React from "react";
 
import Footer from "../Footer";
import Copyright from "../Copyright";
import Title from "../react-helmet/Title";

function UDHDRecruitment() {
  return (
    <div>
  

  <Title title="UDHD Requirement" />


      <div className=" grid lg:grid-cols-1 ml-5 mr-5 mt-5 ">
        <div className=" bg-[#38C11C] p-4  flex text-white text-xl font-thin drop-shadow-lg shadow-black">
          <h1 className="lg:text-xl sm:text-lg ">Recruitments</h1>
           
          <button className="flex-1 text-end lg:text-sm sm:text-sm ">Apply Online Application for AMRUT/SWM (SUDA)</button>
        </div>
      </div>

      <div className="grid lg:grid-rows-3"> 

        <div className="flex border-2 p-5 ml-8 mr-8 mt-5  hover:shadow-xl  ">
            <div className="grid grid-rows-3 space-y-1 ">
            <div>
          <h1 className=" " >Recruitment through Walk-in-interview for the position of "City Mission Manager" on Contractual Basis</h1>
          </div>
          <div className="grid lg:grid-cols-2">
          <div className="flex">
          <div>
          <p>Dept. / ULB: &nbsp; &nbsp;Directorate of Municipal Administration &nbsp; &nbsp;  | </p>
          </div>
          
          <div className="">
            <p className="">&nbsp; &nbsp; &nbsp;  Last Date &nbsp; &nbsp; &nbsp; 	18/02/2022 </p>
          </div>
          </div>
          </div>
          <div className="space-x-5">
           <button className="bg-blue-500 hover:bg-blue-600 pt-2 pb-2 pl-3 pr-3 text-white text-xs rounded-md">Recruitment Notification</button>
           <button className="bg-blue-500 hover:bg-blue-600 pt-2 pb-2 pl-3 pr-3 text-white text-xs rounded-md">ToR</button>
           <button className="bg-blue-500 hover:bg-blue-600 pt-2 pb-2 pl-3 pr-3 text-white text-xs rounded-md">Result</button>
          </div>
        </div>
        </div>

  

        <div className="flex border-2 p-5 ml-8 mr-8 mt-5  hover:shadow-xl ">
            <div className="grid grid-rows-3 space-y-1 sm:space-y-0">
            <div>
          <h1 className=" " >Terms of Reference (ToR) for City Mission Manager- Skills & Livelihood und</h1>
          </div>
          <div className="grid lg:grid-cols-2">
          <div className="flex">
          <div>
          <p>Dept. / ULB: &nbsp; &nbsp;Directorate of Municipal Administration &nbsp; &nbsp;  | </p>
          </div>
          
          <div className="">
            <p className="">&nbsp; &nbsp; &nbsp;  Last Date &nbsp; &nbsp; &nbsp;  	04/01/2022 </p>
          </div>
          </div>
          </div>
          <div className="space-x-5 sm:space-y-2">
           <button className="bg-blue-500 hover:bg-blue-600 pt-2 pb-2 pl-3 pr-3 text-white text-xs rounded-md uppercase">walk-in-interview to fill the position on contractual basis in the city maission management unit (CCMU)</button>
           <button className="bg-blue-500 hover:bg-blue-600 pt-2 pb-2 pl-3 pr-3 text-white text-xs rounded-md">Notification</button>
           <button className="bg-blue-500 hover:bg-blue-600 pt-2 pb-2 pl-3 pr-3 text-white text-xs rounded-md">Addendum</button>
           <button className="bg-blue-500 hover:bg-blue-600 pt-2 pb-2 pl-3 pr-3 text-white text-xs rounded-md">Result</button>
          </div>
        </div>
        </div>

        <div className="flex border-2 p-5 ml-8 mr-8 mt-5 mb-5 hover:shadow-xl   ">
            <div className="grid grid-rows-3 space-y-1 ">
            <div>
          <h1 className=" " >vacancy in ranchi kshetriye vikash pradhikar Ranchi</h1>
          </div>
          <div className="grid lg:grid-cols-2">
          <div className="flex">
          <div>
          <p>Dept. / ULB: &nbsp; &nbsp;Urban Development & Housing Dept. | </p>
          </div>
          
          <div className="">
            <p className="">&nbsp; &nbsp;  Last Date &nbsp; &nbsp; &nbsp; 	18/02/2022 </p>
          </div>
          </div>
          </div>
          <div className="space-x-5">
           <button className="bg-blue-500 hover:bg-blue-600 pt-2 pb-2 pl-3 pr-3 text-white text-xs rounded-md uppercase">Notice</button>
           </div>
        </div>
        </div>

      </div>

  <Footer />
  <Copyright />

    </div>
  );
}

export default UDHDRecruitment;
