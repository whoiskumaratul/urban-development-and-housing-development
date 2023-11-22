import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
import Title from './react-helmet/Title';

function NotFound() {

  const navigate = useNavigate();
  return (
    <div>


    <Title title="Not Found | UDHD "/>
    <div className='mt-24 text-center' >
    <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button type="submit" className='cursor-pointer bg-[#167004] pt-1 pb-1 pl-3 pr-3  mt-5 text-white'  onClick={() => navigate('/')}>Go Back To Home</button>
      </div>
    </div>
  )
}

export default NotFound