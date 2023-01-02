import React, {useState, useContext, useEffect} from 'react'
import { Navbar } from '../components'
import styles from '../style';
import { docInfo, hospitals } from '../constants';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { surgoen } from '../assets';
import AuthContext from '../context/AuthContext';
import { Card } from '../components/FindDoc';
import LoadingIcons from 'react-loading-icons'
const DetailHospital = ({setDot, dot, doc, setDoc}) => {
    const {t} = useTranslation(['ABOUT']);
    const [loading,setLoading] = useState(false);
    const {loadHospital, tryData} = useContext(AuthContext)
    const [data, setData] = useState();
    React.useEffect(()=>{
      loadHospital()
          setTimeout(()=>{
        setLoading(true)
      },[6000])
    },[])
  return (
    <div className='bg-sky-50 h-screen' id="doc" name="doc">
    <Navbar dot={dot} setDot={setDot}/>
    <h4 className={`${styles.heading2} px-10 pt-20`}>
       {t("Choose hospital")}, <br className="sm:block hidden " /> 
       {t("For Yourself")}
      
      </h4>
      <div className='flex flex-row place-content-center items-center justify-center'>
      {!loading && <LoadingIcons.Puff stroke="#44C0BC" strokeOpacity={.125} speed={.75} 
style={{
  width:'100%'
}}
/>}
      </div>
    <div className={`grid grid-cols-1 pt-10 sm:grid-cols-1 md:grid-cols-3 
 lg:grid-cols-4 xl:grid-cols-4 gap-1   bg-sky-50 `}>
      {loading && tryData?.data?.map((feature, index) => (
        <Card key={feature.id} {...feature} index={index} 
        t={t}
        doc={doc}
        setDoc={setDoc}
        />
      ))}
    </div>
   
      </div>
  )
}

export default DetailHospital
