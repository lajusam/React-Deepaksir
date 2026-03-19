import React from 'react'
import { useLocation } from 'react-router'

function Userhome() {
    let location= useLocation();
    let data=location.state || "no data revieced"
  return (
    <div>
        <div>Userhome</div>
    <p>This is Home page</p>
    <p>Data:{data}</p>
    </div>
    
  )
}

export default Userhome