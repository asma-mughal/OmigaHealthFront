import React, {useEffect, useContext} from 'react'
import { useNavigate  } from 'react-router-dom';
import { service1 } from '../assets';
import { docInfo } from '../constants';
import { useTranslation } from 'react-i18next';
import AuthContext from '../context/AuthContext';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useState } from 'react';

const DetailDoctor = ({doc}) => {
     const {getOneDoctor,singleDoc,setSingleDoc} = useContext(AuthContext)
     const [hospOne, setHospOne] = useState('');
     const [loading, setLoading] = useState(false);
     const [imagegal, setImage] = useState();
     useEffect(()=>{
     const Id = localStorage.getItem('UniqueDocId')
     getOneDoctor(Id)
     const x = localStorage.getItem(("DocDataOne"));
     const res = (JSON.parse(x))
     console.log(res)
      setSingleDoc(res.data)
      const img = localStorage.getItem("docSingleImage");
        setImage(JSON.parse(img));
},[])

useEffect(()=>{
     const x = localStorage.getItem(("HospDataOne"));
     const res = (JSON.parse(x))
     setHospOne(res.data.hospital.name)
     
},[])

 const {t} = useTranslation(['ABOUT']);
  return (
   <>
        <FloatingWhatsApp 
          phoneNumber='+923175403727'
          chatMessage={`Hellow,
Available Doctor : ${singleDoc?.name}  Hospital: ${hospOne}`}
          accountName='Abc'
          />
    <div class = "about-wrapper font-poppins">
    <div class = "about-left">
    <div class = {`about-left-content ${document.body.dir=="rtl" && 'lg:m-96 '} `}>
    <div>
    <div class = "shadow m-10">
    <div class = "about-img">
    <img src={`data:image/png;base64,${imagegal}`} alt = "about image" />
    </div>
    </div>
    <h2>Dr.</h2>
    <h3>{singleDoc.name}</h3>
    </div>
   
    </div>
    </div>
    <div class = "about-right">
    <h1>{t("hi")}<span>{t("!")}</span></h1>
    <h2></h2>
    <div class = "about-btns">
   
    </div>
    <div class = "about-para">
    <p>I am someone who is qualified in {singleDoc.qualification} and treats people who are ill.
    I have a experience of  {singleDoc.experiance} years. Feel free to text me.
    </p>
 
    </div>
    </div>
    </div>
     
   </>
  )
}

export default DetailDoctor
