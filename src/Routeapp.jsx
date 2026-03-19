import { BrowserRouter, Route,Routes } from "react-router";
import Userhome from "./Route pages/Userhome";
import Userprofile from "./Route pages/Userprofile";
import UserDetails from "./Route pages/UserDetails";


const App=()=>{
    return(
            <diiv>
                    <h1>Routing</h1>
                    <BrowserRouter>
                    <Routes>
                      <Route path={'/'} element={<Userhome/>}/>
                      <Route path={'/profile'} element={<Userprofile/>}/>
                      <Route path={'/details'} element={<UserDetails/>}/>
                    </Routes>
                    </BrowserRouter>
            </diiv>
    )
}
export default App;