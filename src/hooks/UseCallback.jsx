import {memo, useCallback, useState } from "react"
import CustomButton from "./CustomButton"

const UseCallbackComponent=()=>{
    console.log("UseCallback componnent")
    const [count,setCount]=useState(0)
    const [toggle,settoggle]=useState(0)
    const handlehelpme=useCallback(()=>{
    console.log("Help me button clicked");
   setCount(count+1)

},[count]
    )
        const handletoggle=useCallback(()=>{
            console.log("togglebutton clicked")
            settoggle(!toggle)
        },[toggle])

    return(
        <div>
            <h1>Use callback hook example</h1>
            <p>Count:{count}</p>
            {/* <button onClick={()=>setCount(count+1)}>increment</button> */}
            <CustomButton onClick={handlehelpme}title={"increment"}/>
            <CustomButton onClick={handletoggle} title="Toggle"/>
        </div>
    )
}
export default UseCallbackComponent;