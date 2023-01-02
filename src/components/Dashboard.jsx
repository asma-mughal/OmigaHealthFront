import React,{Suspense, useContext, useState} from 'react'
import { features, hospitals } from '../constants';
import { FeatureCard } from './Service';
import {Navbar, Hero, Contact, Footer, Service, FindDoc, Bot} from './index';
import { useTranslation } from 'react-i18next';
import { Card } from './FindDoc';
import { useNavigate  } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import LoadingIcons from 'react-loading-icons'
const Dashboard = ({dot, setDot,setDoc, doc}) => {
  const {t} = useTranslation(['ABOUT']);
  const navigate = useNavigate();
  const {loadHospital, tryData} = useContext(AuthContext)
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  React.useEffect(()=>{
   loadHospital()
    setTimeout(()=>{
      setShow(true)
    },[6000])
  },[])

  return (
    <>
    <div className='bg-sky-50 '>
        <Navbar dot={dot} setDot={setDot} />
        <div className=' bg-sky-50'>
          
        <Hero dot={dot} setDot={setDot} />
<Service dot={dot} setDot={setDot} />
</div>

<div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 
 lg:grid-cols-4 xl:grid-cols-4 gap-1   bg-sky-50  `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} 
        t={t}
        />
      ))}
    </div>
    <div className='bg-sky-50'>
     <FindDoc doc={doc} setDoc={setDoc}  />
   <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 
 lg:grid-cols-4 xl:grid-cols-4 gap-1   bg-sky-50  `}>
      {show && tryData?.data?.slice(0,4)?.map((feature, index) => (
        <Card key={feature.id} {...feature} index={index} 
        t={t}
        doc={doc}
        setDoc={setDoc}
        />
      ))}
    </div>
{!show && <LoadingIcons.Puff stroke="#44C0BC" strokeOpacity={.125} speed={.75} 
style={{
  width:'100%'
}}
/>}
    <div className='text-center m-2'>  <h5 class=" font-poppins text-sm
     tracking-tight mb-2
            dark:text-white p-5 underline font-bold text-black hover:text-secondary"
            onClick={()=>navigate('/detail')}
            >
            Show more</h5></div>
<Contact />
</div>

<Footer />

    </div>
    </>
  )
}

export default Dashboard
