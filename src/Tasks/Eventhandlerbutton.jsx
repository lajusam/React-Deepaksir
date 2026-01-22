import { useState } from "react";

const App=()=>{

    const [count,setcount]=useState(0);

    let handleadd=()=>{
        setcount(count+1);
    }
       let handledec=()=>{
        setcount(count-1);
    }

    return(
        <div>
            <h2>Count:{count}</h2>

        <button onClick={handleadd}>Increase</button>
        <button onClick={handledec}>Decrease</button>
        </div>
    )

}
export default App;