import { useState } from "react";
import img123 from "../assets/img1.jpeg"





const App =()=>{

const [text,settext]=useState("")
const [toggle,setToggle]=useState(true);
const [bgcolor,setcolor]=useState("white");
const [showImage,setimage]=useState(false);
const [password,setShowPassword]=useState(false);

    return (<>
    <div style={{backgroundColor:bgcolor}}>
     <button onClick={()=>setToggle(!toggle)}>{toggle?"ON":"OFF"}</button>

     <input value={text} onChange={(e)=>settext(e.target.value)} type="text" placeholder="Enter the text" />
     <p >{text}</p>
         <input value={bgcolor} type="color" onChange={(e)=>{setcolor(e.target.value)}} />

    <button onClick={()=>setimage(!showImage)}>
        {showImage?"show":"hide"}Image
    </button>
    <br/>
    <div>
        {showImage&&<img src={img123} alt="image">
        </img>}
    </div>

    
    
    </div>


  
    </>)



   

}
export default App;