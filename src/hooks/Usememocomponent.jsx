import React, { useMemo, useState } from 'react';


const expensiveCalulation=(num)=>{
    for(let i=0;i<1000000;i++){
        num +=1;
    }
    return num;
}
const UseMemoComponent = () => {
    console.log("Component rendered");
    const [count, setCount] = useState(0);
    // let result=expensiveCalulation(count)
    const [toggle,settoggle]=useState(false)

    let result= useMemo(()=>{
        return expensiveCalulation(count)
    },[count])
    return(
        <div>
            <h1>Use memo hook example</h1>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
               <p>Result:{result}</p>
            <h3>Toggle</h3>
            <p>{toggle? "toggledon":"toggled off"}</p>
            <button onClick={()=>settoggle(!toggle)}>Toggle</button>
        </div>
     
    )
}
export default UseMemoComponent;
