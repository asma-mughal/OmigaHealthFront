import React, {useContext} from 'react'
import { useState } from 'react'
import { Navbar } from '../components';
import styles from '../style';
import { useTranslation } from 'react-i18next';
import LoadingIcons from 'react-loading-icons'
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { dept } from '../assets';
const CardDoctor = ({dot,setDot}) => {
    const [loading,setLoading] = useState(false)
    const {t} = useTranslation(['ABOUT']);
    const navigate= useNavigate();
    const { doctorArray, setDoctorArray,
      getOneDoctor,singleDoc,setSingleDoc
     } = useContext(AuthContext)
    const docNavigation = (i)=>{
        localStorage.setItem('UniqueDocId', i)
        const Id = localStorage.getItem('UniqueDocId')
          getOneDoctor(Id)
          const x = localStorage.getItem(("DocDataOne"));
        const res = (JSON.parse(x))
        //console.log(res)
        setSingleDoc(res.data)
        var binary = "";
        //console.log(res.data.picture.data.data)
      var bytes = [].slice.call(new Uint8Array(res?.data?.picture?.data?.data));
      bytes.forEach((b) => (binary += String.fromCharCode(b)));
      const images = localStorage.setItem(
        "docSingleImage",
        JSON.stringify(window.btoa(binary))
      );
        setTimeout(()=>{
        navigate("/detailDoc")
        },[5000])
       //localStorage.setItem('Reload', true)
       }
      
       useEffect(()=>{
        const x = localStorage.getItem(("DocDataUnique"));
        const res = (JSON.parse(x))
        const loopData = (res.data.doctor)
        setDoctorArray(loopData)
        setTimeout(()=>{
          setLoading(true)
        },[6000])
       },[])
      
  return (
 <div className='bg-sky-50 h-screen' id="doc" name="doc">
    <Navbar dot={dot} setDot={setDot}/>
    <div className='bg-sky-50 pt-20 px-5'>
    <h4 className={`${styles.heading2} px-5`}>
       {t("Choose Doctor")}, <br className="sm:block hidden " /> 
       {t("For Yourself")}
      
      </h4>
      <div className='flex flex-row place-content-center items-center justify-center'>
      {!loading && <LoadingIcons.Puff stroke="#44C0BC" strokeOpacity={.125} speed={.75} 
style={{
  width:'100%'
}}
/>}
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 
 lg:grid-cols-4 xl:grid-cols-4 gap-2  '>
    {doctorArray.length==0 && <p className='font-poppins
    mx-6 font-base font-semibold capitalize
    '>{t("No doctor Available")}.</p>}
  {loading && doctorArray?.map((i)=>{
    return (<>
    <div className="w-full  dark:bg-gray-900 py-6 px-6
           flex justify-center items-center bg-sky-50  font-poppins  overflow-hidden">
              <div className=''>

                  <div className="max-w-xs  h-full flex flex-col justify-between 
                   dark:bg-gray-800 rounded-none shadow-lg  ">
                    <img class="w-72 h-full " 
                    src={dept}
                    
                    alt="dept" />
                      <button 
       className={`w-72 px-5 xl:px-3 lg:px-3 mb-2 cursor-pointer  ${document.body.dir ==="ltr" ? 
    'text-left' :'text-right'
    } h-10 text-left bg-sky-50 rounded-none border-transparent `}
       >
            <h5 class="text-black font-poppins capitalize font-bold text-base  tracking-tight 
            
            dark:text-white hover:text-secondary" >
             {i.name}</h5>
              </button>
              <div className=' bg-sky-50'>
              <p  class="bg-secondary
               border-secondary w-36 h-10
               mx-2 my-2 font-poppins rounded border p-2
                   text-white transition hover:bg-opacity-90 hover:text-black"
              onClick={()=>docNavigation((i._id))}
              >
                
              <p className='text-center'>Doctor Profile</p>
              </p>
                <div className='flex flex-col'>
                </div>
                
              </div>
    
                      <div>
                      
                          <div className="flex items-center justify-between text-gray-800">
                         
                                           
                          </div>
                          
                      </div>
                      
                  </div>
                
              </div>
          </div>
    </>)
  })}
    </div>
    </div>
      </div>
  )
}

export default CardDoctor
