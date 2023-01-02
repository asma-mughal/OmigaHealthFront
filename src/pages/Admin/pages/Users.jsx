import React, { useState, Fragment, useRef } from "react";
import { nanoid } from 'nanoid'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import data from "../components/mock-data.json";
import DocReadOnly from "../components/DocReadOnly";
import DocEditRow from "../components/DocEditRow";
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useEffect, useReducer } from "react";
const Users = () => {
  const [contacts, setContacts] = useState(data);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const {t, i18n} = useTranslation(['ABOUT']);
  const [data2,setData] = useState()
  const [deptName,setDeptName] = useState();
  const [hospital, setHospital] = useState('');
  const [dept, setDept] = useState('');
  const [hospitalEdit,setHospitalEdit] = useState('');
  const [deptEdit,setDeptEdit] = useState(dept);
  const [detailHospData, setDetailHospData] = useState();
  const [deptArray,setDeptArray] = useState('');
  const [hospName, setHospName] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
const [ignored, forceUpdate] = useReducer(x => x+ 1, 0);
  const {  addDoctor, 
    editDoctor, 
    deleteDoctor, onHosp,docDeptAdded, setDocDeptAdded,editDoctorImage,loadDoctor,
    tryDocData,loadHospital,
    tryData,getOneHospital} =
     useContext(AuthContext);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    certificate: "",
    experience:"",
    image:"",
    dept:"",
    hospital:""

  });
  let loopData;
  React.useEffect(()=>{
    loadDoctor()
  },[])
  const deptHandle = (val, val2) =>{
    setDept(val);
    setDeptName(val2)
  }
  const DeptDocAdded = () =>{
    return ( 
      <>
       <h2 className="text-center text-base mt-3 mb-3 font-bold tracking-tight text-gray-900">
             {t("Enroll Doctors for Department")}
             </h2>
             <div className='flex flex-row place-content-center items-center justify-center'>
   
      </div>
     
             { <form onSubmit={handleAddFormSubmit}>
             {deptName && <p className="m-2 text-sm text-black">Department Choosen : {deptName}</p>}
      <Menu as="div" className="relative  w-full  inline-block 
      ml-1 mt-1
      text-left">
    <div>
      <Menu.Button className="inline-flex w-full
       rounded-md border border-gray-300 bg-white px-4 py-2 text-sm        
       text-left
        text-gray-500  hover:bg-gray-50 focus:outline-none ">
        {t("Choose your department here")}
        
        <ChevronDownIcon className="text-center h-5 w-5" aria-hidden="true" 

        />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >

      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md
       bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
        
        {deptArray?.map((item)=>{
          return (
             <Menu.Item>
            {({ active }) => (
              <a
              onClick={()=>deptHandle(item._id, item.name)}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
             {item.name}
            
              </a>
            )}
          </Menu.Item>)
         })}
       
          
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  <button
               disabled={loading }
                 className="group  relative flex
                 cursor-pointer
                  w-full justify-center rounded-md border border-transparent bg-secondary
                   py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
               >
                 
              {t("Add Doctors")}
               </button>
               <button
               onClick={()=>setDocDeptAdded(false)}
               className="group  relative flex
               cursor-pointer
                w-full justify-center rounded-md border border-transparent bg-secondary
                 py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none "
             >
           {t("Back")}
             </button>
  </form> }
            
  </>
    )
  }
  const hospitalHandle = (val, val2) =>{
  setLoading(false)
  setHospital(val)
  getOneHospital(val)
  const x = localStorage.getItem(("HospDataOne"));
  const res = (JSON.parse(x))
  const loopData = (res.data.dep)
  setDeptArray(loopData)
  console.log(res)
   setHospName(val2)
  } 
  const uploadImage = (e) =>{
    const file = e.target.files[0];
    setImageUpload(file)
    setImageSelected(true)
}
  const [editFormData, setEditFormData] = useState({
    name: "",
    qualification: "",
    experiance:"",
    picture:"",
    dept:dept,
    hospital:hospital
  });
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: addFormData.fullName,
      certificate: addFormData.certificate,
      experience:addFormData.experience,
      dept:dept,
      hospital:hospital,
      image:imageUpload,
    };
     addDoctor(nanoid(), newContact.name,addFormData.certificate,addFormData.experience,dept,
     hospital,imageUpload)
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    setImageUpload(null)
    event.target.reset();
    loadDoctor()
    setHospName(null)
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    
    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      qualification: editFormData.qualification,
      experience:editFormData.experiance,
      picture:imageUpload? imageUpload :editFormData.picture
    };
    console.log(editedContact)
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    imageSelected ?   editDoctorImage(editContactId,editedContact.name,editFormData.qualification,
      editFormData.experiance, editedContact.picture )
    :editDoctor(editContactId,editedContact.name,editFormData.qualification,
    editFormData.experiance, editedContact.picture ) 
    setEditContactId(null);
  loadDoctor()
      //window.location.reload(false)
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      name: contact.name,
      qualification: contact.qualification,
      experiance:contact.experiance,
      picture:contact.picture,
      dept:dept,
      hospital:onHosp._id
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
     deleteDoctor(contactId)
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
    loadDoctor()
  };
 useEffect(()=>{
  const x = localStorage.getItem(("HospData"));
  const res = (JSON.parse(x))
loopData = (res.data.data)

setDetailHospData(loopData)
loadHospital()
  //setData(loopData)
 },[])

  return (
  <div className="app-container ">
    <form onSubmit={handleEditFormSubmit}>
    <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="py-3 px-6">
                {t("#")}
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                {t("Name")}
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                {t("Certificate")}
              </th>
            
              <th scope="col" class="py-3 px-6 text-center">
                {t("Experience(years)")}
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                {t("Image")}
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                {t("Actions")}
              </th>
            </tr>
        </thead>
          <tbody>
            {tryDocData?.map((item)=>{
              return (<>
               <Fragment>
                {editContactId === item.id ? (
                  <DocEditRow
                  item={item}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    setHospitalEdit={setHospitalEdit}
                    setDeptEdit={setDeptEdit}
                    uploadImage={uploadImage}
                  />
                ) : (
                  <DocReadOnly
                    item={item}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment> {/* To check if there is any contact Id or not? if there is no
               contact ID then it means user is reading the row  */ }
              </>)
              
            })}
           
          
          </tbody>
        </table>
        </div>
      </form>
     {docDeptAdded ? <DeptDocAdded /> : <div className="flex min-h-full
      pb-10
      items-center justify-center px-4 sm:px-6 lg:px-8 font-poppins">
         <div className="w-full max-w-md  overflow-hidden space-y-8">
           <div>
             <h2 className="text-center text-base mt-3 font-bold tracking-tight text-gray-900">
             {t("Add Doctors here")}
             </h2>
           </div>
           {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
   <strong class="font-bold">{t("Failed!")}</strong>
   <span class="block sm:inline">{error}</span>
   <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
     <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
   </span>
 </div>}
 <form onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          name="fullName"
          className="relative block 
          w-full appearance-none rounded-none rounded-t-md border 
          border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 
          m-1 sm:text-sm"
          required
          placeholder={t("Enter Doctor Name")}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="certificate"
          required
          className="relative block w-full appearance-none rounded-none rounded-t-md border 
          border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 
          m-1 sm:text-sm"
          placeholder={t("Enter Certificate")}
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="experience"
          required
          className="relative block w-full 
          appearance-none rounded-none rounded-t-md border
           border-gray-300 px-3 py-2 text-gray-900
            placeholder-gray-500 m-1 sm:text-sm"
          placeholder={t("Enter Experience")}
          onChange={handleAddFormChange}
        />
        {hospName && <p className="m-2 text-sm text-black">Hospital Choosen : {hospName}</p>}
         <Menu as="div" className="relative  w-full  inline-block 
        mr-1 ml-1 
        text-left">
      <div>
        <Menu.Button className="inline-flex w-full
         rounded-md border border-gray-300 bg-white px-4 py-2 text-sm
         
         text-left
          text-gray-500  hover:bg-gray-50 focus:outline-none h-full "
          >
          {t("Choose hospital here" )}
          <ChevronDownIcon className=" ml-10 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
 
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
   
      >
        <Menu.Items className="absolute right-0 z-10 w-full origin-top-right rounded-md
         bg-white overflow-auto shadow-lg h-full
          ring-1 ring-black ring-opacity-5 focus:outline-none"
         
        >
          <div className="py-1 ">
            {tryData?.data?.map((item)=>{
          
              return (  <Menu.Item>
                {({  }) => (
                  <a
                    onChange={handleAddFormChange}
                    onClick={()=>hospitalHandle(item._id, item.name)}
                    className={classNames(
                     'bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                    )}
                  >
                  {item.name}
                  </a>
                )}
              </Menu.Item>)
            })}
          
            
          
           
            
          </div>
    
        </Menu.Items>
      </Transition>
    </Menu>
        <div class="w-full ">
        <div class="">
        {imageUpload != null ? <p className='font-poppins text-sm font-bold text-black m-2'>
            {t("Uploaded Image Successfully!")}</p> : <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full m-2 h-24 border-2 border-secondary border-dashed
                     hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider
                        font-poppins text-gray-400 group-hover:text-gray-600">
                            {t("Attach your Image")}</p>
                    </div>
                    <input type="file" class="opacity-0"
                    onChange={e => uploadImage(e)} 
                    accept=".jpg,.png,.jpeg"
                    />
                </label>
            </div>}
        </div>
      
    </div>
       
       <button
               disabled={loading }
               onClick={()=>{
                setDocDeptAdded(true)
                console.log("hellow")
                const x = localStorage.getItem(("HospDataOne"));
                const res = (JSON.parse(x))
                const loopData = (res.data.dep)
                setDeptArray(loopData)
                console.log(res)
                 setHospName(val2)
               }
              }
                 className="group  relative flex
                 cursor-pointer
                  w-full justify-center rounded-md border border-transparent bg-secondary
                   py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
               >
                 
              {t("Next")}
               </button>
      </form>
         </div>
       </div>}
      </div>
  )
}

export default Users
