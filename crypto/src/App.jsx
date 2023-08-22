import { useState } from 'react'
import Landingpage from './Components/Landingpage/landingpage'
import Signup from './Components/Authentication/signup'
import Login from './Components/Authentication/login'
import Dashboardhome from './Components/Dashboard/dashboardhome'
import {BrowserRouter as Router, Route, Routes} from  "react-router-dom"
import Settings from './Components/Alldashboard/settings'
import Ledger from './Components/Alldashboard/ledger'
import Sidebar from './Components/Dashboard/sidebar'

function App() {
  
  return (
    <Router>

      <div className='flex md:gap-3 gap-2'>
        <Sidebar/>
      <Routes>
       <Route exact path = "/" element={<Landingpage/>} />
       <Route exact path = "/signup" element={<Signup/>} />
       <Route exact path = "/login" element={<Login/>} />
       <Route exact path = "/dashboard" element={<Dashboardhome/>} />
        <Route exact path = "/ledger" element={<Ledger/>} />
        <Route exact path = "/settings" element={<Settings/>} />
      </Routes>
      </div>



    </Router>
  )
}

export default App
