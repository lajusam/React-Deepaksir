// 1)Create a button that shows an alert when clicked.
// 2)Make a counter with increment and decrement buttons.
// 3)Build an input that updates a <p> tag with typed text in real-time.
// 4)Create a toggle button that shows/hides a message.
// 5)Make a button that changes background color on click.

import { useState } from "react";


const App=()=>{
    const [count,setcount]=useState(0)
    const [text,settext]=useState("")
    const [show,setShow]=useState(false);
    const [color,setcolor]=useState("white");

    let texthandle=(e)=>{
        settext(e.target.value)
    }

    // for Background color
    let colorhandle=()=>{
        setcolor("lightblue")
    }
    // for Page color
    let pagecolor=()=>{
        document.body.style.backgroundColor="lightblue";
    }
    return(
        <>
        <div style={{backgroundColor:color,}}>
            <h1>1.Alert with button</h1>
             <button onClick={()=>alert("Hello,Hi,byee")}>Click Me</button>
             <h1>2.Increment and decrement buttons</h1>
             <p>Count:{count}</p>
                <button onClick={()=>setcount(count+1)}>Increment</button>
                <button onClick={()=>setcount(count-1)}>decrement</button>
            
            <h1>3.Input that updates a p tag</h1>
            <input type="text" placeholder="Enter the text" onChange={texthandle}/>
            <p>{text}</p>

            <h1>4.Show/hide message</h1>
            <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
            {show && <p>This is supposed to be hidden .</p>}

            <h1>5.Button to change background color</h1>
            <button onClick={(e)=>e.target.style.backgroundColor="red"}>Only for this Button</button>
            <h2 style={{fontSize:"15px"}}>#.This button is used to change the color of div into lightblue</h2>
            <button onClick={colorhandle}>Background</button>
            <h2>#.This is button is used to change the color or the whloe page</h2>
            <button onClick={pagecolor}>Page</button>
        </div>
       
        </>
    )

}
export default App;
