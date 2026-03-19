import { BrowserRouter, Route,Routes } from "react-router";
import Userhome from "./Route pages/Userhome";
import Userprofile from "./Route pages/Userprofile";
import UserDetails from "./Route pages/UserDetails";
import MyoutletWrapper from "./Route pages/Outletwapper";


const App=()=>{
    return(
            <div>
                    <h1>Routing</h1>
                    <BrowserRouter>
                    <Routes>
                   <Route path='/' element={<MyoutletWrapper/>}>
                       <Route path={'/'} element={<Userhome/>}/>
                      <Route path={'/profile'} element={<Userprofile/>}/>
                      {/* Dynamic Route */}
                      <Route path={'/details/:userid'} element={<UserDetails/>}/>
                   </Route>
                    </Routes>
                    </BrowserRouter>
            </div>
    )
}
export default App;