import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
 
import Navbar from "./components/Navbar";
 
import Eservice from "./components/services/Eservice";
import Home from "./components/Home";
import Contactus from "./components/contact/Contactus";
import Unifiedmis from "./components/unifiedmis/Unifiedmis";
import Login from "./components/loginsignup/Login";
import Smartcity from "./schemesandprograms/Smartcity";
import Swachhbharatmission from "./schemesandprograms/Swachhbharatmission";
import Nationalurbanlivelihoodmission from "./schemesandprograms/Nationalurbanlivelihoodmission";
import Pradhanmantriawasyojna from "./schemesandprograms/Pradhanmantriawasyojna";
import Amrut from "./schemesandprograms/Amrut";
import NamamiGange from "./schemesandprograms/NamamiGange";

import Urbantransport from "./schemesandprograms/Urbantransport";
import Urbantransportproject from "./schemesandprograms/Urbantransportproject";
import Buildingplanapprovalmanagementsystem from "./components/Eservice/Buildingplanapprovalmanagementsystem";
import Morenotices from "./components/Morenotification/Morenotices";
import Tenders from "./components/Importantnotification/Tenders";
import Notification from "./components/Importantnotification/Notification";
import Sanctionorders from "./components/Importantnotification/Sanctionorders";



import Sankalps from "./components/Importantnotification/Sankalps";

import Sankalpsnew from "./components/Importantnotification/Newdata/Sankalpsnew";
import Sankalpsnewtwo from "./components/Importantnotification/Newdata/Sankalpsnewtwo";

import Sankalpstwo from "./components/Importantnotification/Sankalpstwo";
import Sankalpsthree from "./components/Importantnotification/Sankalpsthree";



import Aboutus from "./components/about/Aboutus";
import Functions from "./components/about/Functions";
import Maps from "./components/about/Maps";

import Map from "./components/about/Map";


import Notices from "./components/documents/Notices";
import Noticestwo from "./components/documents/Noticestwo";
import Noticesthree from "./components/documents/Noticesthree";
import Minutesofmeeting from "./components/documents/Minutesofmeeting";
import Officeorder from "./components/documents/Officeorder";
import Officeordertwo from "./components/documents/Officeordertwo";
import Officeorderthree from "./components/documents/Officeorderthree";
import Citysanitationplan from "./components/documents/Citysanitationplan";
import Masterplan from "./components/documents/Masterplan";
import Servicelevelbenchmark from "./components/documents/Servicelevelbenchmark";
import Departmentcircular from "./components/documents/Departmentcircular";




import Suo from "./components/documents/Suo";
import Finalreports from "./components/documents/Finalreports";
import Adminmaps from "./components/about/admin/Adminmaps";
import Ranchismartcity from "./components/schemesandprogramsnavbar/Ranchismartcity";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { Circles, ThreeDots  } from 'react-loader-spinner';
import IMAGES from "./image/Image";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pmay from "./schemesandprograms/Pmay";
import Gallery from "./components/Gallery/Gallery";
import Media from "./components/Gallery/Media";
import UDHDRecruitment from "./components/careers/UDHDRecruitment";
import ActsMaster from "./components/documents/important-documents/ActsMaster";
import ActsMastertwo from "./components/documents/important-documents/ActsMastertwo";
import Rules from "./components/documents/important-documents/Rules";
import Rulestwo from "./components/documents/important-documents/Rulestwo";
import Policy from "./components/documents/important-documents/Policy";
import ByeLaws from "./components/documents/important-documents/ByeLaws";
import Guidelines from "./components/documents/important-documents/Guidelines";
import Guidelinestwo from "./components/documents/important-documents/Guidelinestwo";
import Guidelinesthree from "./components/documents/important-documents/Guidelinesthree";
import OperationManuals from "./components/documents/important-documents/OperationalManuals";
import Budget from "./components/documents/financial-documents/Budget";
import AnnualFinancialStatements from "./components/documents/financial-documents/AnnualFinancialStatements";
import AuditedAnnualFinancialStatement from "./components/documents/financial-documents/AuditedAnnualFinancialStatement";
import InternalAuditReports from "./components/documents/financial-documents/InternalAuditReports";
import CreditRatings from "./components/documents/financial-documents/CreditRatings";
import JharkhandMunicipalAccountingManual from "./components/documents/financial-documents/JharkhandMunicipalAccountingManual";
import Terms from "./components/termsandcondition/Terms";
import Videos from "./components/Gallery/Videos";
import ULBinformation from "./components/department/ULBinformation";



export default function App() {


  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    
    <div className='App'>
    {
     
     loading ? 
     <div className='flex justify-center mt-[20%] '>
     <div className='flex-none ' > <img src={ IMAGES.image1 } 
     
     loading={loading} 
    //  size={100} 
    style={{  height: "80px"  }}
    
    // style={{ width: "100px", height: "2rem"  }}
      
     />   
      
     <ThreeDots 
     color={'blue'} 
      />
     </div>
     </div>
     :
   
 
     <>


   <Logo />
   <Navbar />
   {/* <Slider />
   <MarqueeSlider />
   <Municipalcorporation />
   <Schemesandprograms />
   <Notificationandtender />
   <Profilecard />
   <Urbanlocalbodiesinformation />
  
   <Footer />
   <Copyright /> */}
   <Routes>
   <Route path='/' element={<Home />} />
<Route path='/eservice' element={<Eservice/>} />

<Route path='/contactus' element={<Contactus/>} />

<Route path='/unifiedmis' element={<Unifiedmis/>} />
<Route path='/gallery' element={<Gallery />} />
<Route path='/media' element={<Media />} />
<Route path='/UDHDRecruitment' element={<UDHDRecruitment />} />
<Route path='/login' element={<Login/>} />


<Route path='/smartcity' element={<Smartcity />} /> 
<Route path='/swachhbharatmission' element={<Swachhbharatmission /> } /> 
<Route path='/nationalurbanlivelihoodmission' element={<Nationalurbanlivelihoodmission /> } /> 

<Route path='/pradhanmantriawasyojna' element={<Pradhanmantriawasyojna /> } /> 
<Route path='/amrut' element={<Amrut /> } /> 
<Route path='/pmay' element={<Pmay /> } />
<Route path='/namamigange' element={<NamamiGange /> } /> 

<Route path='/urbantransport' element={<Urbantransport /> } />
<Route path='/urbantransportproject' element={<Urbantransportproject /> } />

<Route path='/buildingplanapprovalmanagementsystem' element={<Buildingplanapprovalmanagementsystem /> } />

<Route path='/morenotices' element={<Morenotices /> } />

 
 <Route path='/tenders' element={ <Tenders /> } />

<Route path='/notification' element={<Notification /> } />
<Route path='/sanctionorders' element={<Sanctionorders /> } />



<Route path='/sankalps' element={<Sankalps />} />

<Route path='/sankalpsnew/:id' element={<Sankalpsnew />} /> 
<Route path='/sankalpsnewtwo/:id' element={<Sankalpsnewtwo />} />


<Route path='/sankalpstwo' element={<Sankalpstwo />} />
<Route path='/sankalpsthree' element={<Sankalpsthree /> } />




<Route path='/aboutus' element={<Aboutus />} />
<Route path='/functions' element={<Functions />} />


<Route path='/maps' element={<Maps />} />
<Route path="/map/:id" element={<Map />} />
 



<Route path='/notices' element={<Notices />} />
<Route path='/noticestwo' element={<Noticestwo />} />
<Route path='/noticesthree' element={<Noticesthree /> } />
<Route path='/minutesofmeeting' element={<Minutesofmeeting />} />
<Route path='/officeorder' element={<Officeorder />} />
<Route path='/officeordertwo' element={<Officeordertwo /> } />
<Route path='/officeorderthree' element={<Officeorderthree />} /> 
 

<Route path='/citysanitationplan' element={<Citysanitationplan />} />


<Route path='/masterplan' element={<Masterplan /> } />
<Route path='/servicelevelbenchmark' element={ <Servicelevelbenchmark /> } />
<Route path='/departmentcircular' element={<Departmentcircular />} />
<Route path='/suo' element={<Suo />} /> 
<Route path='/finalreports' element={<Finalreports />} />
<Route path='/adminmaps' element={ <Adminmaps /> } />

<Route path='/ranchismartcity' element={ <Ranchismartcity /> } />


<Route path='/actsmaster' element={<ActsMaster />} />
<Route path='/actsmastertwo' element={<ActsMastertwo />} />
<Route path='/rules' element={<Rules /> } />
<Route path='/rulestwo' element={<Rulestwo /> } />
<Route path='/policy' element={<Policy />} />
<Route path='/byelaws' element={<ByeLaws />} />
<Route path='/guidelines' element={<Guidelines />} />
<Route path='/guidelinestwo' element={<Guidelinestwo />} />
<Route path='/guidelinesthree' element={<Guidelinesthree />} />
<Route path='/operationmanuals' element={<OperationManuals />} />

<Route path='/budget' element={<Budget />} />
<Route path='/annualfinancialstatements' element={<AnnualFinancialStatements />} />
<Route path='/auditedannualfinancialstatement' element={<AuditedAnnualFinancialStatement />} />
<Route path='/internalauditreports' element={<InternalAuditReports />} />
<Route path='/creditratings' element={<CreditRatings />} />
<Route path='/jharkhandmunicipalaccountingmanual' element={<JharkhandMunicipalAccountingManual />} />
<Route path='/terms' element={<Terms />} />
<Route path='/videos' element={<Videos /> } />
<Route path='/ulbinformation' element={<ULBinformation />} />

<Route path="*" exact={true} element={ <NotFound /> } />




</Routes>
<ToastContainer />
  

    </>
    }

    </div>
  )
}