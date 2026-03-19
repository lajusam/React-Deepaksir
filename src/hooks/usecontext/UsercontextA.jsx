import { createContext, useContext,useState } from "react"

let UserContext=createContext()
const ACom=()=>{
    const [user,setUser]=useState({name:"Bibek",age:18})

    return(
        <div>
            <h1>ComponentA</h1>
            <UserContext.Provider value={user}>
             <BComp/>        
            </UserContext.Provider>
            
        </div>
    )
}

const BComp=()=>{
    return (
        <div>
            <h1>Component B</h1>
            <CComp/>
        </div>
    )
}

const CComp=()=>{
    // consuming Usercontext

    let user= useContext(UserContext)
    return(
        <div>
            <h1>C Compoenet</h1>
            <p>Name:{user.name},Age:{user.age}</p>
            <b>User Info</b>
        </div>
    )
}

export default ACom;