import React from 'react'
import Schemesandprogramscommon from './Schemesandprogramscommon'
import IMAGES from '../image/Image'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

function Smartcity() {
  return (
    <div>
    <div>
        <Schemesandprogramscommon header="Smart City" />
    </div>

    <div className='flex grid-cols-1 bg-white ml-5 mr-5 '>
    <div className='bg-yellow-700 text-white ml-5 mt-5  rounded-sm hover:bg-yellow-600 '>
  <button type="button" className='pt-1 pb-2 pl-6 pr-6 text-sm '>Ranchi Smart City Proposal Final</button>
    </div>
    </div>


    <div className='flex grid lg:grid-cols-1 gap-2 ml-5 mr-5 p-5 bg-white '>

    <div>
     
     <div>
        <h1 className='text-yellow-500 ' >The Challenge of Urbanization </h1>

        <p className='text-xs m-2 hover:text-blue-800 '>
        Cities are engines of growth for the economy of every nation, including India. Nearly 31% of India’s current population lives in urban areas and contributes 63% of India’s GDP (Census 2011). With increasing urbanization, urban areas are expected to house 40% of India’s population and contribute 75% of India’s GDP by 2030. This requires comprehensive development of physical, institutional, social and economic infrastructure. All are important in improving the quality of life and attracting people and investments to the City, setting in motion a virtuous cycle of growth and development. Development of Smart Cities is a step in that direction. 
        </p>
     </div>
    
    </div>


   <div>
<h1 className='text-yellow-500 mt-5' >What is 'Smart City' </h1>

<p className='text-xs m-2 hover:text-blue-800 '>
The first question is what is meant by a ‘smart city’. The answer is, there is no universally accepted definition of a Smart City. It means different things to different people. The conceptualisation of Smart City, therefore, varies from city to city and country to country, depending on the level of development, willingness to change and reform, resources and aspirations of the city residents. A Smart City would have a different connotation in India than, say, Europe. Even in India, there is no one way of defining a Smart City.

<br />
<br />

Some definitional boundaries are required to guide cities in the Mission. In the imagination of any city dweller in India, the picture of a Smart City contains a wish list of infrastructure and services that describes his or her level of aspiration. To provide for the aspirations and needs of the citizens, urban planners ideally aim at developing the entire urban eco-system, which is represented by the four pillars of comprehensive development — institutional, physical, social and economic infrastructure. This can be a long term goal and cities can work towards developing such comprehensive infrastructure incrementally, adding on layers of ‘smartness’.
<br />
<br />

In the approach to the Smart Cities Mission, the objective is to promote cities that provide core infrastructure and give a decent quality of life to its citizens, a clean and sustainable environment and application of ‘Smart’ Solutions. The focus is on sustainable and inclusive development and the idea is to look at compact areas, create a replicable model which will act like a light house to other aspiring cities . The Smart Cities Mission of the Government is a bold, new initiative. It is meant to set examples that can be replicated both within and outside the Smart City, catalysing the creation of similar Smart Cities in various regions and parts of the country.
<br />
<br />

The core infrastructure elements in a Smart City would include:
<ul className='ml-5 list-disc'>
    <li>Adequate water supply,</li>
    <li>Assured electricity supply,</li>
    <li>Sanitation, including solid waste management,</li>
    <li>Efficient urban mobility and public transport,</li>
    <li>Affordable housing, especially for the poor,</li>
    <li>Robust IT connectivity and digitalization,</li>
    <li>Good governance, especially e-Governance and citizen participation,</li>
    <li>Sustainable environment,</li>
    <li>Safety and security of citizens, particularly women, children and the elderly, and</li>
    <li>Health and education.</li>

    </ul>
</p>
   </div>

  <div>
    <div>
    <p className='text-xs hover:text-blue-800 ' >As far as Smart Solutions are concerned, an illustrative list is given below. This is not, however, an exhaustive list, and cities are free to add more applications. </p>
        <img className=' h-96 ' src={IMAGES.image8} alt="smartcitysoln" />
    </div>
  </div>


    </div>


    <Footer />
    <Copyright />


    </div>
  )
}

export default Smartcity