import React from 'react'
import { Navbar } from '../components'
import styles from '../style'
import i18next from "i18next";
import {contact} from '../assets/index';
import { useTranslation } from 'react-i18next';

const Detail = ({dot, setDot}) => {
    const {t, i18n} = useTranslation(['ABOUT']);
  return (
    <>
    <div className='bg-sky-50' id="about" name="about">
     <Navbar dot={dot} setDot={setDot}/>
     <div  id="about" name="about" className={`pt-24 px-3 flex-col ${styles.flexCenter}`}>
     <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[50px]
             text-black ss:leading-[100.8px] text-center leading-[75px] capitalize">
              {t("OmigaHealth is a medical tourism operator")}<span className='text-secondary'>.</span> 
            </h1>
            <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
         
         {t("Our mission is to provide transparency in pricing and quality in the medical tourism market,and to provide patients from any country with the opportunity to comfortably undergo the necessary treatment abroad.")}
        
       </p>
       <img src={contact} className='flex h-96' />
     </div>
   <div className='text-center'>
   <h2 className={styles.heading2}>
       {t("Our Story")}<span className='text-secondary '>.</span>
      </h2>
      <div className={`${styles.flexCenter} flex-col`}>
      <p className={`${styles.paragraph} max-w-[1000px] mt-5 text-base px-3 text-start`}>
         
         {t("OmigaHealth™ is the world's largest and most transparent medical tourism service. Our site includes more than 40 hospitals in Germany. Before the hospital is published on the site, it is thoroughly checked for the number of successful and safe operations, the level of equipment, the comfort of the stay, and other indicators. The site contains more than 5,000 medical programs to choose from. It includes programs for basic and extended preventive examination (comprehensive medical examination), individual diagnosis in difficult clinical cases, outpatient and inpatient treatment, rehabilitation and spa treatments. Our goal is to give patients from anywhere in the world the opportunity to choose a hospital for themselves on the Internet, which offers the most appropriate medical program for them, see the cost of this program and book it at the best price.")}
        
       </p>
       <p className={`${styles.paragraph} max-w-[1000px] text-base mt-5 px-3 text-start`}>
         
        {t("To make the best decision, the patient and his relatives can study in detail the information about the hospital certificates, the achievements of the attending physician, treatment methods, and the cost of services. When choosing between several leading medical institutions, the patient can use the professional advice of our doctors. Thanks to the help of medical professionals and innovative technologies not available in their country. We care about patients' comfort. After choosing the medical program, we assist in obtaining the visa for the patient and accompanying person, translating medical documents, booking airline tickets and accommodation, communicating with the foreign doctor through an interpreter, monitoring the costs of medical services and daily expenses.")}
        
       </p>
       <p className={`${styles.paragraph} max-w-[1000px] text-base mt-5 px-3 text-start`}>
         
       {t("OmigaHealth If the patient cannot travel to ther country for treatment due to the severity of the condition or other reasons, atelemedicine consultation with the necessary healthcare professionals is organized. Thus,the patient can receive a conservative treatment regimen or recommendations to prepare for surgery without leaving his country of origin. By sending medical records and photos through the electronic document management system, foreign doctors can study the results of preliminary examinations and make individual recommendations. OmigaHealth is a medical tourism operator whose quality has been confirmed by the testimony of our customers from different countries of the world")}<span className='text-secondary'>.</span>
         
        </p>
       </div>
   </div>
    </div>
   
    </>
  )
}

export default Detail
