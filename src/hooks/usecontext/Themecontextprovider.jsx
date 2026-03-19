import {useState, createContext } from "react"

 export let Themecontext=createContext();

const ThemecontextProvider=({children})=>{
    const [islight,setlight]=useState(true)
    return(
        <Themecontext.Provider value={[islight,setlight]}>
                {children}
        </Themecontext.Provider>
    )
}
export default ThemecontextProvider;