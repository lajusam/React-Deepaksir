import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Eventhandling from './eventhandling/Eventhandling.jsx'
import Profile from './eventhandling/pages/profile.jsx'
import Using from './Tasks/using.jsx'
import Eventhandler from './Tasks/Eventhandlerbutton.jsx'
import Day6 from './day6/day6.jsx'
import Task1 from './Taskreactday4/taskunderstanding.jsx'
import Task2 from './Taskreactday4/taskeventhandling.jsx'
import Auth from './day6/auth/Authpage.jsx'
import Taskday6 from './Taskreactday4/taskday6.jsx'
import Todolist from './Tasks/Todo-list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Home/> */}
    {/* <Profile name="Lajusam" age={34} address={"ktm"}/>
    // <Eventhandling/> */}
    {/* // <Using/>
    // <Eventhandler/> */}
    {/* <Day6/> */}
    {/* <Task1/> */}
    {/* <Task2/> */}
    {/* <Auth isAuthenticated={false}/>
    <b>After login:::::</b>
    <Auth isAuthenticated={true}/> */}
  {/* <Taskday6/> */}
  <Todolist/>
  </StrictMode>,
)
