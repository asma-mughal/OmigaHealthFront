import { t } from 'i18next';
import React from 'react'
import { heart, FooterLogo} from '../assets/index';
import { useNavigate  } from 'react-router-dom';
const Footer = () => {
    const menu = [
        {
          id: 1,
          title: "Services",
          subMenu: [
            {
              id: 1,
              title: "Hospitals",
            },
            {
              id: 2,
              title: "Admin Login",
            },
            {
              id: 3,
              title: "Medications",
            },
            {
              id: 4,
              title: "Details",
            },
          ],
        },
        {
          id: 2,
          title: "Follow Us",
          subMenu: [
            {
              id: 1,
              title: "Facebook",
             
            },
            {
              id: 2,
              title: "Instagram",
            },
            {
              id: 3,
              title: "Twitter",
            },
          ],
        },
        {
          id: 3,
          title: "Contact us",
          subMenu: [
            {
              id: 1,
              title: "Toll Free: (877)833-4635",
            },
            {
              id: 2,
              title: "West Coast:(424)253-5282",
            },
            {
              id: 3,
              title: "Email: hellow@gmail.com",
            },
          ],
        },
       
      ];
      const navigate = useNavigate();
  return (
    <div className="bg-sky-100 border-white">
    <div className=" max-w-screen-xl pt-10 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 text-center
      gap-12"
      >
      <h1 className={`text-white font-bold tracking-widest text-2xl font-poppins
     
      `}><img  src={FooterLogo} /></h1>
        {menu.map(({ id, title, subMenu }) => (
          <div key={id} className="">
            <h1 className="text-lg font-bold text-secondary font-poppins">{t(title)}</h1>
            <ul className="mt-1">
              {subMenu.map(({ id, title, link }) => (
                <li key={id}>
                  <a href={link} 
                  
                  onClick={()=>{
                    title=="Admin Login" && navigate("/admin")
                    title=="Hospitals" && navigate("/detail")
                    title=="Details" && navigate("/developer")
                  }}
                  className="text-black font-poppins
                  hover:text-secondary
                  ">{t(title)}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
    <div className="flex flex-col justify-center items-center text-center  font-poppins
    p-10 mt-10 bg-sky-100 
    "
    style={{
      borderBottom:'2px',
      borderColor:'#f8fafc',
      borderWidth:'1px'
    }}
    >
				<h1 className=" text-gray-500 font-sm font-poppins">
					© 2021-2022 {t("All rights reserved | Build with")}<span className="text-secondary"> ❤ </span>{t("by")}{" "}
					<span className="">
						{t("abc")}{" "}
					</span>
				</h1>
			</div>
  </div>
  )
}

export default Footer
