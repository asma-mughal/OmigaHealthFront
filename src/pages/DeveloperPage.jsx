import React from 'react'
import { google, linkedin, fb, acc,gith, Mail } from '../assets'

import { useNavigate  } from 'react-router-dom';
const DeveloperPage = () => {
  
  const navigate = useNavigate();
  return (
    <div>
       <section className="pt-20 pb-48 font-poppins">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our Team</h2>
                
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-10">
                <div className="px-6">
                  <img
                    alt="..."
                    src={acc}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Asma</h5>
                    <p className="mt-1 text-sm
                    hover:bg-black  text-gray-400 uppercase font-semibold">
                      Frontend developer
                    </p>
                    <div className="mt-6 flex-row flex justify-evenly">
                      <a href='https://www.facebook.com/asma.mughal.75248795'>
                      <button
                        className="bg-blue-700 text-white hover:bg-black 
                        w-8 h-8 rounded-full flex justify-center items-center
                         outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                       <img src={fb} className="" />
                      </button>
                      </a>
                      <a href='https://www.linkedin.com/in/asma-mughal-36b341244/'>
                      <button
                        className="bg-blue-600
                        hover:bg-black 
                         text-white w-8 h-8 rounded-full flex justify-center items-center
                          outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                            <img src={linkedin} className="m-2" />
                      </button>
                      </a>
                      <a href='https://github.com/asma-mughal'>
                      <button
                        className="bg-white text-white 
                        hover:bg-white 
                        w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img src={gith} className="" />
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-10">
                <div className="px-6">
                  <img
                    alt="..."
                    src={acc}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Bilal Rehman</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                      MERN STACK DEVELOPER
                    </p>
                     <div className="mt-6 flex-row flex justify-evenly">
                     <a href="https://web.facebook.com/rockeykhan142">
                      <button
                        className="bg-blue-700 hover:bg-black 
                        w-8 h-8 rounded-full flex justify-center items-center
                         outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                       <img src={fb} className="" />

                      </button>
                      </a>
                      <a href='https://linkedin.com/in/bilal-rehman-4509521b1'>
                      <button
                        className="bg-blue-600
                        hover:bg-black 
                         text-white w-8 h-8 rounded-full flex justify-center items-center
                          outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                            <img src={linkedin} className="m-2" />
                      </button>
                      </a>
                      <a href="https://github.com/SardarBilal421">
                      <button
                        className="bg-white text-white 
                        hover:bg-white 
                        w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img src={gith} className="" />
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-10">
                <div className="px-6">
                  <img
                    alt="..."
                    src={acc}

                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Saif Azeem</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    Project Manager
                    </p>
                    <div className="mt-6 flex-row flex justify-evenly">
                    <a href=''>
                      <button
                        className="bg-blue-700 text-white  hover:bg-black 
                        w-8 h-8 rounded-full flex justify-center items-center
                         outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                       <img src={fb} className="" />
                      </button>
                      </a>
                      <a href=''>
                      <button
                        className="bg-blue-600  hover:bg-black
                         text-white w-8 h-8 rounded-full flex justify-center items-center
                          outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                            <img src={linkedin} className="m-2" />
                      </button>
                      </a>
                      <a href=''>
                      <button
                        className="bg-red-600 text-white 
                        hover:bg-black
                        w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img src={google} className="m-2" />
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
         
            </div>
          </div>
        </section>
    </div>
  )
}

export default DeveloperPage
