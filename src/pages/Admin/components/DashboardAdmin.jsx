import React from 'react'
import { useState } from 'react'
import MainDash from './MainDash'
import Sidebar from './Sidebar'
const DashboardAdmin = () => {
  const [showHospital, setShowHospital] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showDashboard, setDashboard] = useState(true);
  return (
    <div className="AppGLass1 font-poppins">
    <div className="AppGlass">
    <Sidebar showHospital={showHospital} setShowHospital={setShowHospital} 
    showTable={showTable} setShowTable={setShowTable}
    showDashboard={showDashboard} setDashboard={setDashboard}
    />
    <MainDash showHospital={showHospital} setShowHospital={setShowHospital} 
    showTable={showTable} setShowTable={setShowTable}
    showDashboard={showDashboard} setDashboard={setDashboard} />
    </div>
  </div>
  )
}

export default DashboardAdmin
