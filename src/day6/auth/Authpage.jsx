import Dashboard from "./Dashboard";
import Login from "./login";


const Auth=({isAuthenticated})=>{
    // condititonal rendering using if-else
        
    if(isAuthenticated){
        return(
            <Dashboard/>
        )
    }
    else{
        return(
            <div>
               <Login/>

            </div>
        )
    }

}
export default Auth;
