import { Outlet } from "react-router";
import Navbar from "./Navbar";

const MyoutletWrapper=()=>{

    return(
        <>
        <Navbar/>
        <Outlet/>
        <h6>This is my footer</h6>
        </>
    )

}
export default MyoutletWrapper;