import React, { useState, Fragment, useRef, useEffect } from "react";
import { nanoid } from 'nanoid'
import data from "../components/mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import Select from 'react-select'
import { useReducer } from "react";
const Hospitals = () => {
  const [contacts, setContacts] = useState(data);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const {t} = useTranslation(['ABOUT']);
  const [hospitalId, setHospitalId] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const [data2, setData] = useState();
  const [ignored, forceUpdate] = useReducer(x => x+ 1, 0);
  const [onImageUpdate, setImageUpdate] = useState();
  const { addHospital,editHospital,
    deleteHospital,hospitalAdded, setHospitalAdded,addDepartment ,hospitalData,
    selectedImages, setSelectedImages, addImage,loadHospital,
    tryData,
    
} = useContext(AuthContext)
  const onSelectFile = (event) => {
    //  const selectedFiles = event.target.files;
    //  const selectedFilesArray = Array.from(selectedFiles);
    // const imagesArray = selectedFilesArray.map((file) => {
    //   return file;
    // });
    //  setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    const file = event.target.files[0];
     setSelectedImages([...selectedImages, file])
    setImageSelected(true)
    //event.target.value = "";
  };
  const onUpdateSelectFile = (event, id) => {

    //  const selectedFiles = event.target.files;
    //  const selectedFilesArray = Array.from(selectedFiles);
    // const imagesArray = selectedFilesArray.map((file) => {
    //   return file;
    // });
    //  setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    const file = event.target.files[0];
    // selectedImages.push(file)
    // //console.log(file.name)
    // setImageSelected(true)
    // //event.target.value = "";
    setImageUpdate(file)
    
    setImageSelected(true)
  };
    useEffect(()=>{
     loadHospital()
    },[])
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    image: "",
  });
  const optionList = [
    { value: "Casualty ", label: "Casualty " },
    { value: "Operating theatre (OT)", label: "Operating theatre (OT)" },
    { value: " Intensive care unit (ICU)", label: " Intensive care unit (ICU)" },
    { value: "Anesthesiology ", label: "Anesthesiology " },
    { value: "ENT ", label: "ENT " },
    { value: "Geriatric ", label: "Geriatric " },
    { value: "Gastroenterology ", label: "Gastroenterology " },
    { value: "Haematology", label: "Haematology" },
    { value: "Pediatrics", label: "Pediatrics" },
    { value: "Neurology", label: "Neurology" },
    { value: "Oncology", label: "Oncology " },
    { value: "Orthopaedic", label: "Orthopaedic" },
    { value: "Urology", label: "Urology" },
    { value: "Inpatient ", label: "Inpatient " },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "Radiology", label: "Radiology" },
    { value: "Clinical pathology", label: "Clinical pathology" },
    { value: "Nutrition and dietetics", label: "Nutrition and dietetics" },
    { value: "Catering and food services", label: "Catering and food services" },
    { value: "Central sterilization unit", label: "Central sterilization unit" },
    { value: "Housekeeping", label: "Housekeeping" },
  ];
  const [selectedOptions, setSelectedOptions] = useState();
  let loopData;
  const [editFormData, setEditFormData] = useState({
   name:"",
   picture:[]
  }); 
  const [editContactId, setEditContactId] = useState(null);
   //console.log(editFormData); 
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
    setEditFormData(newFormData) 
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      image:selectedImages,
    };
    event.target.reset();
    setSelectedOptions(null)
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    addHospital(nanoid(), addFormData.fullName,selectedOptions, selectedImages )
    loadHospital()
    setTimeout(()=>{
      setHospitalAdded(true)
      selectedImages.length = 0;
    },[1000])
  }
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id:hospitalId,
     name: editFormData.name,
     image: editFormData.image
    };
    const newContacts = [...contacts];
    console.log(editedContact)
    imageSelected && editHospital(editedContact,onImageUpdate)
    editHospital(editedContact, selectedImages)
    setContacts(newContacts);
    setEditContactId(null);
    setHospitalId(null)
    loadHospital()
  };
  const handleEditClick = (event, contact) => {
    console.log(contact)
    event.preventDefault();
     setHospitalId(contact.id)
    const formValues = {
      name:contact.name,
      image:contact.picture,
    };
    setEditFormData(formValues)
    setSelectedImages([...formValues.image])
  };
  const handleCancelClick = () => {
    setHospitalId(null)
    setSelectedImages([])
  };
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const handleDeleteClick = (contactId) => {
    deleteHospital(contactId)
    loadHospital()
    forceUpdate()
  };
  const handleDeptFormSubmit = (event) => {
    event.preventDefault();
    console.log(hospitalData?._id)
    addDepartment(selectedOptions,hospitalData?._id)
    event.target.reset();
    setSelectedOptions(null)
     loadHospital()
  };
    
  const DepartmentForm = () =>{
    return (  
    <div className="flex min-h-full
    pb-10
    items-center justify-center px-4 sm:px-6 lg:px-8 font-poppins">
       <div className="w-full max-w-md overflow-hidden space-y-8">
         <div>
           <h2 className="text-center text-base mt-3 font-bold tracking-tight text-gray-900">
           {t("Add Department")}
           </h2>
         </div>
         {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">{t("Failed!")}</strong>
  <span class="block sm:inline">{error}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
   <svg class="fill-current h-6 w-6 text-red-500" role="button"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
  </div>}
  <form onSubmit={handleDeptFormSubmit}>
      <div className="dropdown-container w-full
       appearance-none rounded-none rounded-t-md 
       py-2
       focus:outline-none 
       bg-transparent
         border-transparent
       text-gray-900 placeholder-gray-500 
        sm:text-sm">
      <Select
  options={optionList}
  placeholder={t("Enter Department")}
  value={selectedOptions}
  className="w-full focus:outline-none"
  onChange={handleSelect}
  isSearchable={true}
  />
  </div>
  
     <button
               type="submit"
               className="group  relative flex
               cursor-pointer
                w-full justify-center rounded-md border border-transparent bg-secondary
                 py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none "
             >
           {t("Add Department")}
             </button>
             <button
               onClick={()=>setHospitalAdded(false)}
               className="group  relative flex
               cursor-pointer
                w-full justify-center rounded-md border border-transparent bg-secondary
                 py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none "
             >
           {t("Back")}
             </button>
    </form>
       </div>
     </div>)
  }
  
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
                <th scope="col" class="py-3 px-6">
                {t("Name")}
                </th>

                <th scope="col" class="py-3 px-6">
                {t("Image")}
                </th>
                <th scope="col" class="py-3 px-6 text-center"
                >
                {t("Actions")}
                </th>
            </tr>
        </thead>
        <tbody>
        {tryData?.data?.map((item)=>{
              return (<>
               <Fragment>
                {hospitalId === item.id ? (
                  <EditableRow
                  item={item}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    onSelectFile={onSelectFile}
                    handleSelect={handleSelect}
                    optionList={optionList}
                    selectedOptions={selectedOptions}
                    onUpdateSelectFile={onUpdateSelectFile}
                  />
                ) : (
                  <ReadOnlyRow
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
      {hospitalAdded?  <DepartmentForm />: <div className="flex min-h-full
      pb-10
      items-center justify-center px-4 sm:px-6 lg:px-8 font-poppins">
         <div className="w-full max-w-md overflow-hidden space-y-8">
           <div>
             <h2 className="text-center text-base mt-3 font-bold tracking-tight text-gray-900">
             {t("Add Hospital here")}
             </h2>
           </div>
           {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
   <strong class="font-bold">{t("Failed!")}</strong>
   <span class="block sm:inline">{error}</span>
   <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
     <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
   </span>
 </div>}
 <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          className="relative block 
          focus:outline-none 
          w-full appearance-none rounded-none rounded-t-md border 
           px-2 py-2 text-gray-900 placeholder-gray-500 
          sm:text-sm "
          required="required"
          placeholder={t("Enter Hospital Name")}
          onChange={handleAddFormChange}
        />
        <div className="dropdown-container w-full
         appearance-none rounded-none rounded-t-md 
         py-2
         focus:outline-none 
         bg-transparent
         border-transparent
         text-gray-900 placeholder-gray-500 
          sm:text-sm">

    </div>
       <div class="w-full ">
        <div class="">
         {selectedImages.length!=0 &&  <p className="text-sm">Uploaded Image Successfully!</p>}
        <div class="flex items-center justify-center w-full">
        
                <label
                    class="flex flex-col w-full  mt-2 m-1  h-24 border-2 border-secondary border-dashed
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
                    onChange={onSelectFile}
                    accept="image/png , image/jpeg, image/webp"
                   
                    />
                </label>
            </div>
        </div>
      
    </div>
       <button
               disabled={loading }
                 type="submit"
                 className="group  relative flex
                 cursor-pointer
                  w-full justify-center rounded-md border border-transparent bg-secondary
                   py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none "
               >
                 
             {t("Add Hospital")}
               </button>
      </form>
         </div>
       </div>}
      
      
      </div>
  )
}

export default Hospitals
