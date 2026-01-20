let Profile=({address,name,age})=>{
    // destructuring: let {a,b,c}={a:1,b:2,c:3}
    // destructuring props
    console.log("Props:",address)
    console.log("Props:",age)
    console.log("Props:",name)
    return(
        <div>
            <h1>Profile Page</h1>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Address:{address}</p>
        </div>
    )
}
export default Profile;