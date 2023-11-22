import React from "react";
import Schemesandprogramscommon from "../../schemesandprograms/Schemesandprogramscommon";
import IMAGES from "../../image/Image";
import Footer from "../Footer";
import Copyright from "../Copyright";
import Title from "../react-helmet/Title";
 

function Sanctionorders() {
  let year = "select year";
  const options1 = [2022, 2021, 2022, 2019, 2018, 2017, 2016];

  const onOptionChangeHandler = (event) => {
    console.log("User Selected", event.target.value);
  };

  return (
    <div>
     
     <Title title="Sanction Order | UDHD " />



      <Schemesandprogramscommon header="Sanction Orders " />
   
   <div className="bg-white ml-5 mr-5 mb-5">
      <div className=" p-5 flex grid gap-5 lg:grid-cols-2 ">
        <div>
          <span className="font-bold uppercase mr-10">{year}</span>
          <select
            onChange={onOptionChangeHandler}
            className="bg-white pl-3 pt-2 pb-2 pr-96  border border-blue-500  text-sm]    "
          >
            <option>2023</option>
            {options1.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>

        <div>
          <input
            type="submit"
            value="Filter"
            className="bg-green-600 hover:bg-green-500 pt-1 pb-1 pl-24 pr-24 ml-20"
          />
        </div>
      </div>

      <div className="flex grid lg:grid-cols-1     p-5">
        <div className=" ">
          <table className="border border-2 shadow-sm ml-5 bg-white text-xs  ">
            <tr className=" text-white bg-blue-500">
              <th className="p-3">#</th>
              <th className="w-36">SO No.</th>
              <th className="w-36">Order Date</th>
              <th className="w-auto ">Subject</th>
              <th className="w-36">Amount</th>
              <th className="w-20">View</th>
            </tr>

            <tr className=" border border-collapse">
              <td className="pl-3 pb-5 pt-3">1</td>
              <td className="text-center  border border-collapse">230</td>
              <td className="text-center  border border-collapse">
                10/01/2023
              </td>
              <td className="text-center  border border-collapse">
                केन्द्र प्रायोजित अटल नवीकरण एवं शहरी परिवर्तन मिशन 2.0 (AMRUT
                2.0) अंतर्गत धनबाद नगर निगम क्षेत्र में लोको तालाब (वार्ड
                सं०-27) जीर्णोंद्धार योजना की तकनीकी स्वीकृति प्राप्त कुल
                प्राक्कलित राशि 1158.00 लाख रूपये मात्र की लागत पर प्रशासनिक
                स्वीकृति प्रदान करने के संबंध में।
              </td>
              <td className="text-center border border-collapse">
                115800000.00
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
              <td className="pl-3  pb-5 pt-3">2</td>
              <td className="text-center  border border-collapse">229</td>
              <td className="text-center  border border-collapse">
                {" "}
                09/01/2023{" "}
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-23 में राज्य के कुल पाँच (05) शहरी स्थानीय
                निकायों को Tipping Fees के भुगतान हेतु नागरिक सुविधा मद से कुल
                रू० 4,47,20,916/- मात्र अनुदान की स्वीकृति।{" "}
              </td>
              <td className="text-center border border-collapse">
                44720916.00
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
              <td className="pl-3 pb-5 pt-3">3</td>
              <td className="text-center  border border-collapse">228</td>
              <td className="text-center  border border-collapse">
                06/01/2023{" "}
              </td>
              <td className="text-center  border border-collapse">
                वित्तीय वर्ष 2022-23 में राँची नगर निगम अंतर्गत वार्ड सं० 51
                अंतर्गत नीचे लटमा में सिंह डेयरी भाया शगुन स्वीट वार्कशॉप से नदी
                तक नाली निर्माण कार्य हेतु कुल 1,33,19,100/- रू० का नकनीकी
                स्वीकृति प्राप्त प्राक्कलन पर प्रशासनिक स्वीकृति प्रदान करते हुए
                नागरिक सुविधा मद अंतर्गत TSP प्रक्षेत्र से राँची नगर निगम को कुल
                1,33,19,100/- रू० मात्र अनुदान की स्वीकृति के संबंध में।{" "}
              </td>
              <td className="text-center border border-collapse">
                13319100.00
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
              <td className="pl-3 pb-5 pt-3">4</td>

              <td className="text-center  border border-collapse"> 227 </td>
              <td className="text-center  border border-collapse">
                06/01/2023{" "}
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                15वंे वित्त आयोग के अधीन वित्तीय वर्ष 2022-23 में राज्य के शहरी
                स्थानीय निकायों की मिलियन प्लस सिटीज के लिए Tied Grant के रूप
                में Air Quality Improvement के लिए प्राप्त राशि कुल रू० 42.00
                करोड़ के आलोक में राज्यान्तर्गत राँची नगर निगम एवं जमशेदपुर
                अधिसूचित क्षेत्र समिति को कुल रू० 42,00,00,000/- अनुदान की
                स्वीकृति।{" "}
              </td>
              <td className="text-center border border-collapse">
                420000000.00
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
              <td className="pl-3 pb-5 pt-3">5</td>
              <td className="text-center  border border-collapse">226</td>
              <td className="text-center  border border-collapse">
                {" "}
                06/01/2023
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-23 मंे स्थापना व्यय अंतर्गत झारखण्ड खनिज
                क्षेत्र विकास प्राधिकार (झामाडा), धनबाद के वेतन मद में द्वितीय
                अनुपूरक आगणन के माध्यम से प्राप्त राशि से प्राधिकार कर्मियों के
                वेतनादि भुगतान हेतु रू० 19,50,25,191/- मात्र अनुदान राशि की
                स्वीकृति।{" "}
              </td>
              <td className="text-center border border-collapse">
                195025191.00
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
              <td className="pl-3 pb-5 pt-3">6</td>
              <td className="text-center  border border-collapse">225</td>
              <td className="text-center  border border-collapse">
                06/01/2023{" "}
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-23 में स्थापना व्यय अंतर्गत झारखण्ड खनिज
                क्षेत्र विकास प्राधिकार (झामाडा), धनबाद के गैर-वेतन मद में
                द्वितीय अनुपूरक आगणन के माध्यम से प्राप्त राशि से प्राधिकार
                क्षेत्र में नागरिक सुविधाओं (यथा जलापूर्ति संचालन एवं संपोषण,
                Alum, Bleaching Powder का क्रय तथा बिजली विपत्र का भुगतान सहित)
                से संबंधित व्यय हेतु रू० 7,80,10,077/- मात्र अनुदान राशि की
                स्वीकृति।
              </td>

              <td className="text-center border border-collapse">
                78010077.00
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
              <td className="pl-3 pb-5 pt-3">7</td>
              <td className="text-center  border border-collapse">224</td>
              <td className="text-center  border border-collapse">
                {" "}
                06/01/2023{" "}
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-23 में स्थापना व्यय अंतर्गत झारखण्ड खनिज
                क्षेत्र विकास प्राधिकार (झामाडा), धनबाद के Capital Expenditure
                मद में द्वितीय अनुपूरक आगणन के माध्यम से प्राप्त रशि से
                प्राधिकार क्षेत्र में पूंजी परिसम्पत्ति के सृजन हेतु रू०
                11,70,15,114/- मात्र अनुदान राशि की स्वीकृति।
              </td>

              <td className="text-center border border-collapse">
                117015114.00
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
              <td className="pl-3 pb-5 pt-3">8</td>
              <td className="text-center  border border-collapse">223</td>
              <td className="text-center  border border-collapse">
                {" "}
                06/01/2023{" "}
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-23 में नगर विकास एवं आवास विभाग, झारखण्ड,
                राँची के अधीन “नगरीय प्रशासन निदेशालय” के स्थापना में कार्यरत
                पदाधिकारियों/कर्मियों के निमित्त स्थापना व्यय अंतर्गत द्वितीय
                अनुपूरक आगणन के माध्यम से ‘व्यवसायिक सेवाएँ’ , ‘मोटर वाहन’ इकाई
                में प्राप्त कुल 4,66,000/- रू० मात्र राशि का आवंटन।{" "}
              </td>

              <td className="text-center border border-collapse">466000.00</td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="pl-3 pb-5 pt-3">9</td>
              <td className="text-center  border border-collapse">222</td>

              <td className="text-center  border border-collapse">
                {" "}
                06/01/2023
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-232 में नगर विकास एवं आवास विभाग, झारखण्ड,
                राँची के “राज्य शहरी विकास अभिकरण” में कार्यरत
                पदाधिकारियों/कर्मियों के निमित्त स्थापना व्यय अंतर्गत द्वितीय
                अनुपूरक आगणन के माध्यम से ‘वेतन’ एवं “राज्य शहरी विकास अभिकरण”
                में कार्यरत पदाधिकारियों/कर्मियों के निमित्त स्थापना व्यय
                अंतर्गत द्वितीय अनुपूरक आगणन के माध्यम से ‘वेतन’ एवं ‘कार्यालय
                व्यय’ इकाई में प्राप्त कुल राशि रू० 10,00,000/- मात्र का आवंटन।
              </td>
              <td className="text-center border border-collapse">1000000.00</td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="pl-3 pb-5 pt-3">10</td>
              <td className="text-center  border border-collapse">221</td>

              <td className="text-center  border border-collapse">
                {" "}
                05/01/2023
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                15वें वित्त आयोग अंतर्गत बुण्डू नगर पंचायत के लिए स्वीकृत योजना
                ‘’Construction of Vender Market Near Bajrang Dal under Nage
                Panchayat Bundu” की पुनरीक्षित तकनीकी स्वीकृति प्राप्त प्राक्कलन
                की राशि रू० 2,25,04,485/- पर पुनरीक्षित प्रशासनिक स्वीकृति के
                संबंध में।{" "}
              </td>
              <td className="text-center border border-collapse">
                22504485.00
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
              <td className="pl-3 pb-5 pt-3">11</td>
              <td className="text-center  border border-collapse">220</td>

              <td className="text-center  border border-collapse">
                04/01/2023
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                नगरीय प्रशासन निदेशालय, नगर विकास एवं आवास विभाग अंतर्गत विभिन्न
                नगर निकायों में नियुक्त निम्नवर्गीय लिपिकों का क्षमता संर्वद्धन
                के निमित्त 20 दिवसीय आवासीय प्रशिक्षण कार्यक्रम के संचालन हेतु
                “संस्थाओं का विकास एवं क्षमता संवर्धन” मद में उपबंधित राशि से
                कुल राशि से कुल राशि रू० 7,10,000/- रूपये मात्र अनुदान राशि की
                स्वीकृति के संबंध में।
              </td>
              <td className="text-center border border-collapse">710000.00</td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="pl-3 pb-5 pt-3">12</td>
              <td className="text-center  border border-collapse">219</td>

              <td className="text-center  border border-collapse">
                {" "}
                04/01/2023
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-23 में राज्य के 02 (दो) शहरी स्थानीय निकायों
                को शहरी परिवहन मद अंतर्गत OSP प्रक्षेत्र से कुल रू०
                3,37,32,731/- मात्र अनुदान की स्वीकृति।
              </td>
              <td className="text-center border border-collapse">
                33732731.00
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
              <td className="pl-3 pb-5 pt-3">13</td>
              <td className="text-center  border border-collapse">218</td>

              <td className="text-center  border border-collapse">
                {" "}
                04/01/2023
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-23 में राज्य के 04 (चार) शहरी स्थानीय निकायों
                को शहरी परिवहन मद अंतर्गत SCSP प्रक्षेत्र से कुल रू० 54,12,059/-
                मात्र अनुदान की स्वीकृति।{" "}
              </td>
              <td className="text-center border border-collapse">5412059.00</td>
              <td>
                <img
                  className="w-4 ml-auto mr-auto  "
                  src={IMAGES.image12}
                  alt="downloader"
                />
              </td>
            </tr>

            <tr className=" border border-collapse">
              <td className="pl-3 pb-5 pt-3">14</td>
              <td className="text-center  border border-collapse">217</td>

              <td className="text-center  border border-collapse">
                {" "}
                04/01/2023
              </td>
              <td className="text-center  border border-collapse">
                {" "}
                वित्तीय वर्ष 2022-23 में राज्य के 02 (दो) शहरी स्थानीय निकायों
                को शहरी परिवहन मद अंतर्गत TSP प्रक्षेत्र से कुल रू०
                1,48,39,282/- मात्र अनुदान की स्वीकृति।
              </td>
              <td className="text-center border border-collapse">
                14839282.00
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
              <td className="pl-3 pb-5 pt-3">15</td>
              <td className="text-center  border border-collapse">216</td>

              <td className="text-center  border border-collapse">
                {" "}
                04/01/2023
              </td>
              <td className="text-center  border border-collapse">
                राँची शहरी जलापूर्ति योजना फेज-II पैकेज A'अंतर्गत निर्माणाधीन
                WTP हेतु चिन्हित भूमि में 33 KV के 7 अदद H.T. Electric pole को
                Overhead माध्यम से Shifting करने हेतु राशि रू० 24,14,760/-
                (including GST@18%) की प्रशासनिक स्वीकृति प्रदान करने के संबंध
                में।{" "}
              </td>
              <td className="text-center border border-collapse">2414760.00</td>
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
        </div>
      </div>

    <Footer />
    <Copyright />

    </div>
  );
}

export default Sanctionorders;
