import { useState } from "react";

let Profile=({address,name,age})=>{
    // destructuring: let {a,b,c}={a:1,b:2,c:3}
    // destructuring props
    console.log("Props:",address)
    console.log("Props:",age)

    console.log("Props:",name)
    // let count=10;
    let [count,setcount]=useState(0)
    let state=useState(9);
    console.log("State",state)
    return(
        <div>
            <h1>Profile Page</h1>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Address:{address}</p>
            <p>Count:0 {count}</p>
            <button onClick={()=>{
                setcount(count +1)
                console.log("Count :",count)
            }} > Increment</button>
        </div>
    )
}
export default Profile;