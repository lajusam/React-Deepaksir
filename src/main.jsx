import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Eventhandling from './eventhandling/Eventhandling.jsx'
import Profile from './eventhandling/pages/profile.jsx'
import Using from './Tasks/using.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Home/> */}
    {/* <Profile name="Lajusam" age={34} address={"ktm"}/>
    <Eventhandling/> */}
    <Using/>
  </StrictMode>,
)
