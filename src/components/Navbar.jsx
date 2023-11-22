import React from 'react'
import { useState } from 'react';
import {
  FaAngleDown,
  FaFilePdf,
  FaHome,
  FaInternetExplorer,
  FaPhotoVideo,
  FaMap,
  FaAngleRight,
} from "react-icons/fa";

import { RxAvatar } from "react-icons/rx";
import {
  MdSettingsSuggest,
  MdOutlineAutoGraph,
  MdOutlinePeopleAlt,
  MdLogin,
  MdContacts,
} from "react-icons/md";

import {AiOutlineClose,AiOutlineMenu, AiOutlineUserAdd} from 'react-icons/ai'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-[#167004] text-white list-none shadow-md  shadow-slate-600 rounded-md ml-4 mr-4 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className=" flex items-baseline space-x-4">
                   <li className="text-white list-none   hover:text-[#FF6A00]  cursor-pointer  py-2 rounded-md text-sm font-bold" onClick={() => navigate("/")}><FaHome className="float-left mt-1 ml-1 pb-0.5  " />&nbsp; Home </li>

                  <span className="dropdown">
                  <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold"><RxAvatar className="float-left mt-1 ml-1 pb-0.5 " />
                &nbsp;About Us
                <FaAngleDown className="float-right mt-1 ml-1" />
                
                </li>
                <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold   ">
                <li
                  className="  anker  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                  onClick={() => navigate("/aboutus")}
                >
                  About
                </li>
                <li
                  className="  anker  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer  "
                  onClick={() => navigate("/functions")}
                >
                  function
                </li>
                <li
                  className="  anker  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                  onClick={() => navigate("/maps")}
                >
                   
                  <FaMap className="float-left  " />
                  &nbsp;Maps
                </li>
              </span>
            </span>


            <span className="dropdown">
                   <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold"><FaFilePdf className="float-left mt-1 ml-1 pb-0.5 " /> &nbsp; Documents
                  <FaAngleDown className="float-right mt-1 ml-1" />
                   </li>
                  <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold ">
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/sankalps")}
                >
                  Resolutions (Sankalp)
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/tenders")}
                >
                  Tenders
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/notices")}
                >
                  Notices
                </li>

                <span className="dropdowntwo">
                  <li className=" anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer  dropbtntwo  ">
                    {" "}
                    Important Documents{" "}
                    <FaAngleRight className="float-right  ml-1" />
                  </li>
                  <span className="dropdown-contenttwo border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold   ">
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/actsmaster")}
                    >
                      Acts
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer  "
                      onClick={() => navigate("/rules")}
                    >
                      Rules
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/policy")}
                    >
                      Policy
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/byelaws")}
                    >
                      Bye Laws
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/guidelines")}
                    >
                      Guidelines
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/operationmanuals")}
                    >
                      Operational Manuals
                    </li>
                  </span>
                </span>

                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/notification")}
                >
                  Notifications
                </li>

                <span className="dropdowntwo">
                  <li className=" anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer  dropbtntwo  ">
                    {" "}
                    Financial Documents
                    <FaAngleRight className="float-right  ml-1" />
                  </li>
                  <span className="dropdown-contenttwo border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold   ">
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/budget")}
                    >
                      Budget
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer  "
                      onClick={() => navigate("/annualfinancialstatements")}
                    >
                      Annual Financial Stmt
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/auditedannualfinancialstatement")}
                    >
                      Audited Annual Financial Stmt
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/internalauditreports")}
                    >
                      Internal Audit Reports
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/creditratings")}
                    >
                      Credit Ratings
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/jharkhandmunicipalaccountingmanual")}
                    >
                      Jharkhand Accounting Manuals
                    </li>
                  </span>
                </span>

                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/sanctionorders")}
                >
                  Sanction Orders
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/minutesofmeeting")}
                >
                  Minutes of Meeting
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/officeorder")}
                >
                  Office Orders
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/citysanitationplan")}
                >
                  City Sanitation Plans
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/masterplan")}
                >
                  Master Plans
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/servicelevelbenchmark")}
                >
                  SLB(Service Level Benchmark)
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/departmentcircular")}
                >
                  Departmental Circulars
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/suo")}
                >
                  Suo Motu Circulars
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/finalreports")}
                >
                  15th FC Final Reports
                </li>
              </span>
            </span>





            <span className="dropdown">
                   <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold"><MdSettingsSuggest className="float-left mt-0.5 ml-1  pb-[3px] text-xl  " /> &nbsp; Schemes & Programs
                  <FaAngleDown className="float-right mt-1 ml-1" />
                   </li>
                  <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold ">
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer"
                  onClick={() => navigate("/ranchismartcity")}
                >
                  Ranchi Smart City
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/amrut")}
                >
                  AMRUT
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/swachhbharatmission")}
                >
                  Swachh Bharat Mission
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/nationalurbanlivelihoodmission")}
                >
                  NULM
                </li>

                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "  onClick={() => navigate("/pmay")} >
                  PMAY
                </li>

                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer" onClick={() => navigate("/pradhanmantriawasyojna")}>
                  Housing Schemes
                </li>

                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer" onClick={() => navigate("/namamigange")}>
                  Namami Gange
                </li>

                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer" onClick={() => navigate("/urbantransport")}>
                  Urban Transport
                </li>
              </span>
            </span>






                   <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold cursor-pointer" onClick={() => navigate("/eservice")}>
                   
                   <FaInternetExplorer className="float-left mt-1 ml-1 pb-0.5 " />
              &nbsp;e-Services </li>


              <span className="dropdown">
                   <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold"><FaPhotoVideo className="float-left mt-1 ml-1 pb-0.5 " />
                &nbsp; Gallery
                <FaAngleDown className="float-right mt-1 ml-1" />
                 </li>
                <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold ">
                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer" onClick={() => navigate("/gallery")}>
                  Gallery
                </li>
                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer" onClick={() => navigate("/media")}>
                  Media
                </li>
              </span>
            </span>


                   <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold cursor-pointer" onClick={() => navigate("/unifiedmis")}><MdOutlineAutoGraph className="float-left mt-1 ml-1 pb-0.5 " />
              &nbsp;UNIFIED MIS </li>


              <span className="dropdown">
                   <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold"><MdOutlinePeopleAlt className="float-left mt-1 ml-1 pb-0.5 " />
                &nbsp; Careers
                <FaAngleDown className="float-right mt-1 ml-1" />

                 </li>
<span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold ">
                <li className=" font-thin  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer" onClick={() => navigate("/UDHDRecruitment")}>
                  Requirements
                </li>
              </span>
            </span>




                   <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold  cursor-pointer" onClick={() => navigate("/login")}><MdLogin className="float-left mt-1 ml-1 pb-0.5 " />
              &nbsp;Login </li>
                   <li className="text-white list-none   hover:text-[#FF6A00]    py-2 rounded-md text-sm font-bold  cursor-pointer" onClick={() => navigate("/contactus")}><MdContacts className="float-left mt-1 ml-1 pb-0.5 " />
              &nbsp;Contact Us </li>
                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#FF6A00]   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:  ">
             <li className="text-white list-none   hover:text-[#FF6A00] block cursor-pointer   py-2 rounded-md text-base font-bold" onClick={() => navigate("/")}><FaHome className="float-left mt-1 ml-1 pb-0.5  " />&nbsp; Home </li>


             <span className="dropdown">
             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold"><RxAvatar className="float-left mt-1 ml-1 pb-0.5 " />
                &nbsp; About Us <FaAngleDown className="float-right mt-1 ml-1" /> </li>

                <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold   ">
                <li
                  className="  anker  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                  onClick={() => navigate("/aboutus")}
                >
                  About
                </li>
                <li
                  className="  anker  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer  "
                  onClick={() => navigate("/functions")}
                >
                  function
                </li>
                <li
                  className="  anker  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                  onClick={() => navigate("/maps")}
                >
                   
                  <FaMap className="float-left  " />
                  &nbsp;Maps
                </li>
              </span>
            </span>





            <span className="dropdown">
             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold"><FaFilePdf className="float-left mt-1 ml-1 pb-0.5 " /> &nbsp;  Documents <FaAngleDown className="float-right mt-1 ml-1" /> </li>
             <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold ">
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/sankalps")}
                >
                  Resolutions (Sankalp)
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/tenders")}
                >
                  Tenders
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/notices")}
                >
                  Notices
                </li>

                <span className="dropdowntwo">
                  <li className=" anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer  dropbtntwo  ">
                    {" "}
                    Important Documents{" "}
                    <FaAngleRight className="float-right  ml-1" />
                  </li>
                  <span className="dropdown-contenttwo border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold   ">
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/actsmaster")}
                    >
                      Acts
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer  "
                      onClick={() => navigate("/rules")}
                    >
                      Rules
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/policy")}
                    >
                      Policy
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/byelaws")}
                    >
                      Bye Laws
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/guidelines")}
                    >
                      Guidelines
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/operationmanuals")}
                    >
                      Operational Manuals
                    </li>
                  </span>
                </span>

                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/notification")}
                >
                  Notifications
                </li>

                <span className="dropdowntwo">
                  <li className=" anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer  dropbtntwo  ">
                    {" "}
                    Financial Documents
                    <FaAngleRight className="float-right  ml-1" />
                  </li>
                  <span className="dropdown-contenttwo border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold   ">
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/budget")}
                    >
                      Budget
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer  "
                      onClick={() => navigate("/annualfinancialstatements")}
                    >
                      Annual Financial Stmt
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/auditedannualfinancialstatement")}
                    >
                      Audited Annual Financial Stmt
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/internalauditreports")}
                    >
                      Internal Audit Reports
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/creditratings")}
                    >
                      Credit Ratings
                    </li>
                    <li
                      className="  ankertwo  text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1   cursor-pointer "
                      onClick={() => navigate("/jharkhandmunicipalaccountingmanual")}
                    >
                      Jharkhand Accounting Manuals
                    </li>
                  </span>
                </span>

                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/sanctionorders")}
                >
                  Sanction Orders
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/minutesofmeeting")}
                >
                  Minutes of Meeting
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/officeorder")}
                >
                  Office Orders
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/citysanitationplan")}
                >
                  City Sanitation Plans
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/masterplan")}
                >
                  Master Plans
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/servicelevelbenchmark")}
                >
                  SLB(Service Level Benchmark)
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/departmentcircular")}
                >
                  Departmental Circulars
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer"
                  onClick={() => navigate("/suo")}
                >
                  Suo Motu Circulars
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/finalreports")}
                >
                  15th FC Final Reports
                </li>
              </span>
            </span>



            <span className="dropdown">
             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold"><MdSettingsSuggest className="float-left mt-0.5 ml-1  pb-[3px] text-xl  " /> &nbsp;  Schemes & Programs <FaAngleDown className="float-right mt-1 ml-1" /> </li>
             <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold ">
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer"
                  onClick={() => navigate("/ranchismartcity")}
                >
                  Ranchi Smart City
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/amrut")}
                >
                  AMRUT
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/swachhbharatmission")}
                >
                  Swachh Bharat Mission
                </li>
                <li
                  className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer "
                  onClick={() => navigate("/nationalurbanlivelihoodmission")}
                >
                  NULM
                </li>

                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer " onClick={() => navigate("/pmay")}>
                  PMAY
                </li>

                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer" onClick={() => navigate("/pradhanmantriawasyojna")}>
                  Housing Schemes
                </li>

                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer" onClick={() => navigate("/namamigange")}>
                  Namami Gange
                </li>

                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 cursor-pointer" onClick={() => navigate("/urbantransport")}>
                  Urban Transport
                </li>
              </span>
            </span>




             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold cursor-pointer" onClick={() => navigate("/eservice")}><FaInternetExplorer className="float-left mt-1 ml-1 pb-0.5 " />
              &nbsp; e-Services </li>

              <span className="dropdown">
             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold"><FaPhotoVideo className="float-left mt-1 ml-1 pb-0.5 " />
                &nbsp; Gallery <FaAngleDown className="float-right mt-1 ml-1" />  </li>
                <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold ">
                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer" onClick={() => navigate("/gallery")}>
                  Gallery
                </li>
                <li className="  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1  cursor-pointer" onClick={() => navigate("/media")}>
                  Media
                </li>
              </span>
            </span>




             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold  cursor-pointer" onClick={() => navigate("/unifiedmis")}><MdOutlineAutoGraph className="float-left mt-1 ml-1 pb-0.5 " />
            &nbsp; UNIFIED MIS </li>

            <span className="dropdown">
             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold"><MdOutlinePeopleAlt className="float-left mt-1 ml-1 pb-0.5 " />
                &nbsp;  Careers <FaAngleDown className="float-right mt-1 ml-1" /> </li>
                <span className="dropdown-content border-2 border-green-500 space-y-1 pt-1 pb-1  font-semibold ">
                <li className=" font-thin  anker text-black  dropbtn  hover:underline pl-2 pr-1 text-xs pb-1 pt-1 ">
                  Requirements
                </li>
              </span>
            </span>


             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold cursor-pointer" onClick={() => navigate("/login")}><MdLogin className="float-left mt-1 ml-1 pb-0.5 " />
              &nbsp; Login </li>
             <li className="text-white list-none   hover:text-[#FF6A00] block    py-2 rounded-md text-base font-bold cursor-pointer" onClick={() => navigate("/contactus")}><MdContacts className="float-left mt-1 ml-1 pb-0.5 " />
              &nbsp; Contact Us </li>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar