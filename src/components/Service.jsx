import React from 'react'
import styles, { layout } from "../style";
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
export const FeatureCard = ({ icon, title,index, bg,t }) => (
  
  <div className='flex xl:px-10 py-3 lg:py-0 sm:px-10 px-10 '>
<div className={`flex flex-col rounded-sm shadow-md w-full overflow-hidden sm:w-52  
transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ...
`}
style={{
  backgroundColor:bg,

}}
>
  <img src={icon}   
  className="lg:w-1/2 lg:h-1/2"
  style={{
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    width:'50%',
    padding:'1rem',
  
  }}
  />
  <h2 className='text-center p-10 font-semibold font-poppins capitalize'
  style={{
    fontSize:'1.5rem',
    
  }}
  >{t(title)}</h2>
   
</div>

 </div>
);

const Service = ({dot}) => {
  console.log(dot)
  const {t} = useTranslation(['ABOUT']);
  const a = useContext(AuthContext)
  return (
    <section id="services" name="services" className={layout.section}>
    <div className={`${layout.sectionInfo} xl:px-10 sm:px-10 px-10 `}>
      <h2 className={styles.heading2}>

       {t("Saving your health")}, <br className="sm:block hidden " /> 
       {t("need is our priority")}
      </h2>
    </div>
    <div className={`${layout.sectionImg} flex-col xl:px-10 sm:px-10 px-10 `}>
      
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
     {t("Our goal is to give patients from anywhere in the world the opportunity to choose a hospital for themselves on the Internet, which offers the most appropriate medical program for them, see the cost of this program and book it at the best price.")}
      </p>
    </div>
   
  </section>
  )
}

export default Service
