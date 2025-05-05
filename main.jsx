import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import Navbar from './Navbar.jsx'
// import DD from './DD.jsx'
import Dashboard from './Dash.jsx'
// import Grd from './Grd.jsx'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar/>
    {/* <DD/> */}
    <Dashboard />
    {/* <Demo/> */}
    {/* <Grd/> */}
  </StrictMode>,
)
