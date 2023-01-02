import React,{useRef,useState} from 'react'
import styles from '../style';
import { aboutImg } from '../assets';
import { t } from 'i18next';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(()=>{
      emailjs.sendForm(
        "service_lsaf9ax",
        "template_0k9pe5f",
        form.current,
        "kqR3l0Mh6hRgpGCJG").then(
        (result) => {
          console.log(result.text);      
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    },[1000])
  
  };

  return (
    <section class="z-10 overflow-hidden  mx-10 mt-10 my-10 bg-white   "name="contact" id="contact"  >
    <div class="container mx-auto items-center p-10">

      <div class="-mx-4 flex flex-wrap lg:justify-between">
        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div class="mb-12 max-w-[570px] lg:mb-0">
            <img src={aboutImg} />
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
           
          <h2
              class="text-dark
              
              mb-6 uppercase font-bold text-xl font-poppins"
            >
              {t("GET IN TOUCH WITH ME")}<span className='text-secondary'>.</span>
            </h2> <form ref={form} onSubmit={sendEmail}>
      
        <input type="text" 
        placeholder={t("Your Name")}
        class="text-body-color border-[f0f0f0]
        font-poppins
         m-2
         focus:border-primary w-full rounded border py-2 px-[14px]
          text-base outline-none focus-visible:shadow-none"
        name="name" />
               <input type="email" name="email" 
        placeholder={t("Your Email")}
        class="text-body-color border-[f0f0f0] 
        focus:border-primary w-full rounded border 
        font-poppins
        m-2
        py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
       
        <textarea name="Fullmessage" 
         placeholder={t("Your Message")}
         class="text-body-color border-[f0f0f0] 
         focus:border-primary w-full resize-none 
         m-2
          font-poppins
         rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
        <button type="submit"
         class="bg-secondary 
         m-2
         cursor-pointer
         border-secondary w-full font-poppins rounded border p-3
         text-white transition hover:bg-opacity-90 hover:text-gray-700"
     >{t("Send Message")}</button>
      </form>
           
          
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactUs
