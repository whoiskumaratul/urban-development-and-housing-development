import React from "react";
import Schemesandprogramscommon from "../../schemesandprograms/Schemesandprogramscommon";
import Copyright from "../Copyright";
import Footer from "../Footer";
import Title from "../react-helmet/Title";

function Videos() {
  return (
    <div>

    <Title title="Videos | UDHD " />
      <Schemesandprogramscommon header="Videos" />

      <div className="grid lg:grid-cols-2 gap-10 ml-5 mr-5 pt-5 shadow-md mb-4 pb-6 bg-white">
        <div>
        <div className="border-b-2 border-b-rose-600 ml-4  w-full " > 
          <h1 className=" text-gray-600 font-thin pl-4 pb-4">
            SBM: Gumla Nagar Parishad
          </h1>
          </div>

          <p className="  ml-10 mr-10  sm:space-y-5 lg:space-y-0  border-2 mt-6  p-52"></p>
        </div>

        <div>
        <div className="border-b-2 border-b-rose-600  w-full " > 
          <h1 className=" text-gray-600 font-thin pl-4 pb-4">
            Swachh Bharat Mission
          </h1>
          </div>
          <p className="  ml-10 mr-10  sm:space-y-5 lg:space-y-0  border-2 mt-6  p-52"></p>
        
        </div>
 
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default Videos;
