import React from 'react'
import {Link} from "react-router"

function Navbar() {
  return (
    <>
    <div>Navbar</div>
    <Link to={'/'} state={"This data is from home link"}>Home</Link>
    <br/>
    <Link to={'/profile?profileID=23&&name="Bibek'}>Profile</Link>
    <br/>
    <Link to={'/details/1'}>Details</Link>
    </>
  )
}

export default Navbar