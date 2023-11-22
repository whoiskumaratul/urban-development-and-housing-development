import React from 'react'
import { useEffect } from 'react'

function MunicipalCorporationPopupCommon(props) {
 useEffect(()=>{
        alert('Do you want to visit this link',props?.link)
      },[])
 console.log('Do you want to visit this link',props?.link)
 return(<>
    <div>
        <h1>Do you want to visit this link,{props?.link}</h1>
    </div> 
 </>)
}

export default MunicipalCorporationPopupCommon