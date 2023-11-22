import React from "react";
import Schemesandprogramscommon from "../../schemesandprograms/Schemesandprogramscommon";
import IMAGES from "../../image/Image";
import Footer from "../Footer";
import Copyright from "../Copyright";
import { Helmet } from "react-helmet";
import Title from "../react-helmet/Title";

function Citysanitationplan() {
  return (
    <div>
      {/* <div>
   <Helmet>
    <title>City Sanitation Plan | UDHD</title>
   </Helmet>
    </div> */}

      <Title title="CSP | UDHD" />

      <Schemesandprogramscommon header="City Sanitation Plan" />

      <div className="flex grid lg:grid-cols-1 gap-2 ml-5 mr-5 bg-white shadow-lg">
        <h1 className="ml-5 text-yellow-500 text-lg pt-5 ">Introduction </h1>

        <p className="ml-10 text-sm hover:text-blue-500">
          City Sanitation Plans are strategic planning processes for city wide
          sanitation sector development.
          <img
            src={IMAGES.image19}
            className="float-right border-2 w-72 m-5"
            alt="bpams"
          />
          It is also referred to as Municipal Sanitation Strategy Plans. The
          City Sanitation plans provide an integrated action plan to achieve
          universal sanitation access as envisioned in Govt of Indias National
          Urban Sanitation Policy (NUSP). To address the sanitation issues of
          different Urban Local Bodies (ULBs) in the State and in line with the
          Government Policy of Sanitation, the Urban Development and Housing
          Department of Jharkhand, has prepared the City Sanitation Plan (CSP)
          for 24 towns of Jharkhand. The CSP identifies issues, priorities and
          action plan for five major sanitation components and other related
          components. The major components are (i) Water Supply (ii) Access to
          toilet (iii) waste water management (iv)storm water drainage and (v)
          solid waste management. In addition to these, other components like
          crematoria, ponds, river front, slums and caracas disposal identified
          under National Ganga River Basin Authority (NGRBA) programme were also
          studied under this plan. City Sanitation Plan is the vision document
          for sanitation for the next 30 years and is one of the key documents
          required to qualify for getting the financial support for sanitation
          related infrastructure development under key Government programmes
          like Swatch Bharat Mission, Clean Ganga and other Central Government
          Programmes.{" "}
        </p>

        <h1 className="ml-5 text-yellow-500 text-lg  ">
          ULBwise City Sanitation Plans{" "}
        </h1>
      </div>

      <div class="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white  shadow-lg  ml-5 mr-5   ">
        <div class="  w-auto  h-auto md:grid-cols-6 pl-10 pt-5  ">
          {/* pb-40 */}

          <table className="border border-2 shadow-sm ml-5 bg-white text-sm  ">
            <tr className=" text-white bg-blue-500 ">
              <th className="w-12 p-3 ">#</th>
              <th className="w-[415px] ">Urban Local Body</th>
              <th className="w-48">Action Plan</th>
              <th className="w-48">Drafts</th>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">1</td>
              <td className="pl-2  border border-collapse ">
                Basukinath Nagar Panchayat
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">2</td>
              <td className="pl-2  border border-collapse">
                {" "}
                Bishrampur Nagar Parishad
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">3</td>
              <td className="pl-2  border border-collapse">
                Bundu Nagar Panchayat
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">4</td>

              <td className="pl-2  border border-collapse">
                {" "}
                Chakulia Nagar panchayat
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">5</td>
              <td className="pl-2  border border-collapse">
                Chakradharpur Nagar Parishad
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">6</td>
              <td className="pl-2  border border-collapse">
                Chatra Nagar Parishad
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">7</td>
              <td className="pl-2  border border-collapse">
                Chirkunda Nagar Panchayat
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">8</td>
              <td className="pl-2  border border-collapse">
                Garhwa Nagar Parishad
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">9</td>
              <td className="pl-2  border border-collapse">
                Godda Nagar Panchayat
              </td>

              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">10</td>
              <td className="pl-2  border border-collapse">
                Gumla Nagar Parishad
              </td>

              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">11</td>
              <td className="pl-2  border border-collapse">
                Hussainabad Nagar Panchayat
              </td>

              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">12</td>
              <td className="pl-2  border border-collapse">
                Jamtara Nagar Panchayat
              </td>

              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>
          </table>
        </div>

        <div class="  w-auto  h-auto md:grid-cols-6 pl-10 pt-5 pb-6 mr-5">
          <table className="border border-2 shadow-sm ml-5 bg-white text-sm  ">
            <tr className=" text-white bg-blue-500">
              <th className="w-12 p-3 ">#</th>
              <th className="w-[415px] ">Urban Local Body</th>
              <th className="w-48">Action Plan</th>
              <th className="w-48">Drafts</th>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">13</td>
              <td className="pl-2  border border-collapse">
                Jhumritilaiya Nagar Parishad
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">14</td>
              <td className="pl-2  border border-collapse">
                Khunti Nagar Panchayat
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">15</td>
              <td className="pl-2  border border-collapse">
                Koderma Nagar Panchayat
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">16</td>

              <td className="pl-2  border border-collapse">
                {" "}
                Latehar Nagar Panchayat{" "}
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">17</td>
              <td className="pl-2  border border-collapse">
                Lohardaga Nagar Parishad
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">18</td>
              <td className="pl-2  border border-collapse">
                Madhupur Nagar Parishad{" "}
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">19</td>
              <td className="pl-2  border border-collapse">
                Manjhiaon Nagar Panchayat{" "}
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">20</td>
              <td className="pl-2  border border-collapse">
                {" "}
                Mihijham Nagar Parishad
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">21</td>
              <td className="pl-2  border border-collapse">
                Pakur Nagar Parishad{" "}
              </td>

              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">22</td>
              <td className="pl-2  border border-collapse">
                {" "}
                Ramgarh Nagar Parishad
              </td>

              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">23</td>
              <td className="pl-2  border border-collapse">
                Saraikela Nagar Panchayat{" "}
              </td>

              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="text-center p-3">24</td>
              <td className="pl-2  border border-collapse">
                Simdega Nagar Parishad{" "}
              </td>

              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="flex grid lg:grid-cols-1 ml-10 mr-10 mt-5 pb-5  ">
          <div className=" bg-[#38C11C] p-2 text-center   text-white  shadow-black">
            <h1 className="text-[#930606]">
              Please send your feedbacks to udhd.goj@gmail.com'
            </h1>
          </div>
        </div>
      </div>

      <div class="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2  ml-5 mr-5 pb-5 mb-5  bg-white shadow-lg">
        <div class="h-auto md:grid-rows-6 ">
          <img
            src={IMAGES.image20}
            className="float-left border-2 w-[550px]  m-5"
            alt="bpams"
          />

          <img src="" alt="" />
        </div>
        <div class="h-auto  md:grid-rows-6 ">
          <img
            src={IMAGES.image21}
            className="float-right border-2 w-[550px]  m-5"
            alt="bpams"
          />
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default Citysanitationplan;
