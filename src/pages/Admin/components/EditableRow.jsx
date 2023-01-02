import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select'
import AuthContext from '../../../context/AuthContext';
import AuthState from '../../../context/AuthState';
const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    item,
    onSelectFile,
    onUpdateSelectFile,
    
  }) => {
    const {t, i18n} = useTranslation(['ABOUT'])
    const [deptArray,setDeptArray] = useState([]);
    const [selectedOption, setSelectedOption] = useState('abc');
    const {getOneHospital,onHosp} = useContext(AuthContext);
    useEffect(()=>{
      getOneHospital(item._id)
    },[])
   
    const newArray = (deptArray?.map(i=>i.name))
    const finalArray = (newArray?.join(" "))
    
  return (
    <tr class="border-b bg-white">
      <td class="text-sm text-gray-900 font-light px-1 py-4 
      text-center
      whitespace-nowrap">{item._id}</td>
    <td class="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
    <input
          type="text"
          required="required"
          className="relative block w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter name"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
    </td>
   
    <td class="py-4 px-6 text-center">
    <div class="w-full ">
        <div class="">
        <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-20  mt-2 m-1  h-20 border-2 border-secondary border-dashed
                     hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    </div>
                    <input type="file" class="opacity-0"
                    onChange={(e)=>onUpdateSelectFile(e,item._id)}
                    name="image"
                    accept="image/png , image/jpeg, image/webp"
                   multiple
                    />
                </label>
            </div>
        </div>
      
    </div>
    </td>
    <td class="text-sm text-gray-900 font-light px-3 flex flex-col justify-center items-center
     py-4 whitespace-nowrap">
    <button
        
          className="group relative flex
          cursor-pointer
                  w-20 justify-center rounded-md border border-transparent bg-secondary
                   py-1 px-2 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >{t("Save")}</button>
        <button
          type="button"
          className="group relative flex
          mt-2
          cursor-pointer
                  w-20 justify-center rounded-md border border-transparent bg-secondary
                  py-1 px-2 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleCancelClick}
        >{t("Cancel")}</button>
            
    </td>
    </tr>
  )
}

export default EditableRow
