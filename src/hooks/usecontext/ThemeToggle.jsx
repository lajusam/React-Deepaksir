import { createContext, useContext, useState } from "react";
import { Themecontext } from "./Themecontextprovider";

// creating context or container



const ThemeToggle=()=>{
  const [islight,setlight]=useContext(Themecontext)
    return(
        <div>
            <div className="navbar">
                <h1>Theme Toggle Example</h1>
                <p>{islight?"light":"Dark"}</p>
                <button onClick={()=>setlight(!islight)}>Toggle Theme</button>
            </div>
        </div>
    )
}
export  default ThemeToggle;