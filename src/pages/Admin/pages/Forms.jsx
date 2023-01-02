import React, {useRef, useState} from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
const Forms = () => {
  const {t, i18n} = useTranslation(['ABOUT']);
  const {logOut} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = () =>{
    navigate("/admin")
    logOut()
  }
 
  return (
  <>  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
               {t("Welcome to Dashboard!")}
             </h2>
             <p className='text-center'>{t("Add & View Information")}</p>
             <div class="flex flex-col items-center justify-center  px-10 py-10
              text-gray-700 bg-transparent">
<div class="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
  <h2 class="text-xl font-bold">{t("Number of Visits")} </h2>
  <span class="text-sm font-semibold text-gray-500">2022</span>
  <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
      <div class="relative flex justify-center w-full h-8 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-6 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-16 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Jan")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$45,000</span>
      <div class="relative flex justify-center w-full h-10 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-6 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-20 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Feb")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
      <div class="relative flex justify-center w-full h-10 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-8 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-20 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Mar")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$50,000</span>
      <div class="relative flex justify-center w-full h-10 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-6 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-24 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Apr")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
      <div class="relative flex justify-center w-full h-10 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-8 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-20 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("May")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$55,000</span>
      <div class="relative flex justify-center w-full h-12 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-8 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-24 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Jun")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$60,000</span>
      <div class="relative flex justify-center w-full h-12 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-16 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-20 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Jul")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$57,500</span>
      <div class="relative flex justify-center w-full h-12 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-10 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-24 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Aug")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$67,500</span>
      <div class="relative flex justify-center w-full h-12 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-10 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-32 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Sep")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$65,000</span>
      <div class="relative flex justify-center w-full h-12 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-12 bg-sky-300"></div>
      <div class="relative flex justify-center w-full bg-sky-400 h-28"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Oct")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$70,000</span>
      <div class="relative flex justify-center w-full h-8 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-8 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-40 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Nov")}</span>
    </div>
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$75,000</span>
      <div class="relative flex justify-center w-full h-12 bg-sky-200"></div>
      <div class="relative flex justify-center w-full h-8 bg-sky-300"></div>
      <div class="relative flex justify-center w-full h-40 bg-sky-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">{t("Dec")}</span>
    </div>
  </div>
  <div class="flex w-full mt-3">
    <div class="flex items-center ml-4">
      <span class="block w-4 h-4 bg-sky-400"></span>
      <span class="ml-1 text-xs font-medium">{t("OPD")}</span>
    </div>
    <div class="flex items-center ml-4">
      <span class="block w-4 h-4 bg-sky-300"></span>
      <span class="ml-1 text-xs font-medium">{t("Cardiac")}</span>
    </div>
    <div class="flex items-center ml-4">
      <span class="block w-4 h-4 bg-sky-200"></span>
      <span class="ml-1 text-xs font-medium">{t("Neuro")}</span>
    </div>
  </div>
</div>

<div className='flex flex-row mt-5 w-96'>
<button onClick= {()=>navigate("/change")}
         class="bg-secondary 
         m-2

         border-secondary w-full font-poppins rounded border p-3
         cursor-pointer
         text-white transition hover:bg-opacity-90 hover:text-gray-700"
     >{t("Change Password")}</button>
     <button type="submit"
     onClick={handleLogout}
         class="bg-secondary 
         m-2
         border-secondary w-full font-poppins rounded border p-3
         cursor-pointer
         text-white transition hover:bg-opacity-90 hover:text-gray-700"
     >{t("Logout")}</button>
</div>
</div>
  </>
  )
}

export default Forms
