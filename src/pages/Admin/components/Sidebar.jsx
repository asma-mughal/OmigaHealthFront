import React, {useState} from 'react'
import "./Sidebar.css";
import { useTranslation } from 'react-i18next';
import { Logo1 } from '../../../assets';
import { SidebarData } from "../../../constants/index";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
const Sidebar = ({showHospital, setShowHospital,showTable, setShowTable,
  showDashboard, setDashboard}) => {
    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)
    const {t, i18n} = useTranslation(['ABOUT']);
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
  return (
    <>
    <div className="bars "
     style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
      <UilBars />
    </div>
  <motion.div className='sidebar'
  variants={sidebarVariants}
  animate={window.innerWidth<=768?`${expanded}`:''}
  >
    {/* logo */}
    <div className="logo">
      <img src={Logo1} alt="logo" className='' />
      <span className='bg-transparent text-transparent'>
        Sh<span className='bg-transparent text-transparent'></span>ps
      </span>
    </div>

    <div className="menu px-2">
      {SidebarData.map((item, index) => {
        return (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}

            onClick={() => {setSelected(index)
            if(item.heading=="Hospitals"){
              setDashboard(false)
              setShowHospital(true)
              setShowTable(false)
            }
            else if(item.heading=="Dashboard"){
              setDashboard(true)
              setShowHospital(false)
              setShowTable(false)
            }
            else if(item.heading=="Doctors"){
              setDashboard(false)
              setShowHospital(false)
              setShowTable(true)
            }
            }}
          >
            <item.icon />
            <span>{t(item.heading)}</span>
          </div>
        );
      })}
      {/* signoutIcon */}
      <div className="menuItem bg-transparent">
        <text className='bg-transparent'></text>
      </div>
    </div>
  </motion.div>
  </>
  )
}

export default Sidebar
