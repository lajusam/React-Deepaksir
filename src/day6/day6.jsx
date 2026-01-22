import { useEffect, useState } from "react";
import CustomButtom from "./conre";
import Loading from "./Loading";

let Day6=()=>{
    const [count,setCount]=useState(0);
    const [isloggin,setlogin]=useState(true);
    const [isloading,setloading]=useState(true);
    // loading comonent is loading state if ture then show loading text shows


    useEffect(()=>{
        setTimeout(()=>{
            setloading(false)
        },2000)
    },[])

    let test=null;
    return(
        <>
        <div>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>inc</button>

            {isloggin?<CustomButtom title={"Logout"} onclickbutton={()=>setlogin(false)}></CustomButtom>:<CustomButtom title={"login"} onclickbutton={()=>setlogin(true)}></CustomButtom>}
            {/* conditional redering using logical and (&&) */}
            {isloggin &&<p>You are loggin.</p>}
            {isloading &&<Loading/>}
            {/* condtional redering using logical OR (||):default value aor fallBack value */}
            {test || <b>NO data in test</b>}
        </div>
        </>
    )

}
export default Day6;