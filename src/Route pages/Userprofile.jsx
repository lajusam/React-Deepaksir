import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router'

function Userprofile() {
    // using usenavigate hook to navigate programmatically
    let location=useLocation();
    let data=location.state
        let navigate= useNavigate();
    let gotoHome=()=>{
        navigate("/",{state:"this  is data from profile page"})
    }
    let [searchParams]=useSearchParams();
    let profileID= searchParams.get("profileID")
    let name= searchParams.get("name")
  return (
    <div>
        <div>Userprofile</div>
    <button onClick={gotoHome}>GO TO home </button>
    <p>{data || "There is no data"}Name:{data && data.name} Age:{data &&data.age}</p>
    <p>ProfileID:{profileID}</p>
    <p>Name:{name}</p>
    </div>
    
  )
}

export default Userprofile