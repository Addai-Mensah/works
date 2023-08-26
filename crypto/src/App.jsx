import { useState } from 'react'
import Landingpage from './Components/Landingpage/landingpage'
import Signup from './Components/Authentication/signup'
import Login from './Components/Authentication/login'
import Dashboardhome from './Components/Dashboard/dashboardhome'
import {BrowserRouter as Router, Route, Routes} from  "react-router-dom"
import Ledger from './Components/Dashboard/ledger'
import Sidebar from './Components/Dashboard/sidebar'
import Settings from './Components/Dashboard/settings'
import AdminDashboardhome from './Components/Admin/dashboardhome'
import Adminlogin from './Components/Admin/Adminlogin'
import AdminLogin from './Components/Authentication/adminLogin'

function App() {
  
  return (
    <Router>

      {/* <div className='flex md:gap-3 gap-2'> */}
        {/* <Sidebar/> */}
      <Routes>
       <Route exact path = "/" element={<Landingpage/>} />
       <Route exact path = "/signup" element={<Signup/>} />
       <Route exact path = "/login" element={<Login/>} />
       <Route exact path = "/admin/login" element={<AdminLogin/>} />
       <Route exact path = "/dashboard" element={<Dashboardhome/>} />
        <Route exact path="/maindashboard" element={<AdminDashboardhome/>} />
        <Route exact path = "/ledger" element={<Ledger/>} />
        <Route exact path = "/settings" element={<Settings/>} />
        <Route exact path = "/adminlogin" element={<Adminlogin/>} />
      </Routes>
      {/* </div> */}



    </Router>
  )
}

export default App
