import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'

function UserDetails() {
    // Extracting the userid from the url
    let {userid}=useParams();
    let navigate=useNavigate();
    let gotoprofile=()=>{
        navigate("/profile",{state: {name:"lajusam",age:"18"}})

    }
  return (
    <>
    <div>UserDetails</div>
    <p>Userid:{userid}</p>
    <button  onClick={gotoprofile}>Go to profile</button>
    </>
    
  )
}

export default UserDetails