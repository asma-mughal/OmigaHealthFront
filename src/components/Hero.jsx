import React, { useState } from 'react'
import {hero}  from '../assets/index';
import styles from '../style';
import i18next from "i18next";
import { useNavigate  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Hero = ({dot,setDot}) => {
    const {t} = useTranslation(['ABOUT']);
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    return (
        <section id="about1" name="about1" className={`flex md:flex-row flex-col bg-sky-50 pt-28
         font-poppins`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-10 sm:px-10 px-10  `}>
          <div className="flex flex-row items-center py-[6px] px-4  rounded-[10px] mb-2">
            <p className={`${styles.paragraph} ml-2`}>
         
            </p>
          </div>
      
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]
             text-black ss:leading-[100.8px] leading-[75px]">
              {t("The World's")} <br className="sm:block hidden" />{" "}
              <span className="text-gradient"> {t("Largest")} </span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
            </div>
          </div>
  
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          {t("Medical Service")}<span className='text-secondary'>.</span>
          </h1>
          
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         
            {t("Our site includes more than 40 hospitals in Germany. The site contains more than 5,000 medical programs to choose from.")}
           
          </p>
          <button
          onClick={()=> {navigate("/abt")

        }
          
        }
                  class="bg-secondary border-secondary w-80 mt-5 font-poppins rounded border p-3
                   text-white transition hover:bg-opacity-90 hover:text-black cursor-pointer"
                >{t("More About Us")}
                </button>
        </div>
  
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={hero} alt="billing" className="w-[100%] h-[100%] relative z-[5]
          " />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
        </div>
      </section>
    )
}

export default Hero
