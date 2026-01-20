import Profile from "./pages/profile"

const Eventhandling=()=>{
    let handleincrement=(e)=>{
        console.log("increment button")
        e.target.style.backgroundColor="red"
        e.target.style.fontSize="40px"
    }
    let person={
        name:"Lajusam",
        age:25,
        address:"ktm"
    }
    let handleONchange=(e)=>{
        console.log("input change")
        console.log(e.target.placeholder)
        console.log(e.target.value)
    }

    /*
    Let event={target:{
    title:"increment",
    style:{Background:"red"},
    fontSize:"40px",
    onClick:()=>{},
    }}
     */
    
    return(
    <>
    <div>
        <h1>Event handling page</h1>
        <input  onChange={handleONchange}placeholder="Enter your fullname" type="text"/>

        <button onClick={handleincrement}>Increment</button>
        <button onClick={(event)=>{console.log("This is decrement")
            console.log(event.target)
        }}>Decrement</button>
        <Profile {...person}/> 
    </div>
     </>
    )
}
export default Eventhandling;
