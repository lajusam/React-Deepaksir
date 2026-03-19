import React, { useContext } from 'react'
import { Themecontext } from './hooks/usecontext/Themecontextprovider'
import "./home.css"
   const First=()=>{
      const [islight,setlight]=useContext(Themecontext);
        return(
          <>
          <h1 style={{color: islight? "light": "dark" }}>This is page</h1>
          <div style={{color:islight?"red":"purple"}}> 
              <h2>This is rist </h2>
          <p>{islight?"light":"dark"}</p>
          
          <button onClick={()=>setlight(!islight)}>Toggle</button>
          </div>
        </>
        ) 
      }
  
  const Second=()=>{
      return(
        <h2>This is second</h2>
      )
  }

function Home() {
  
     
  return (
     <div>
        <h1>This is home</h1>
        <First/>
      <Second/>
      </div>
      
   )
  }

export default Home;

