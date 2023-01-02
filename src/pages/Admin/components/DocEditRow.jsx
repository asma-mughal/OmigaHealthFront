import React,{Fragment} from 'react'
import { useTranslation } from 'react-i18next';
const DocEditRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    item,
    setHospitalEdit,
    setDeptEdit,
    uploadImage,
    
  }) => {
    const {t, i18n} = useTranslation(['ABOUT']);
  return (
   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap
     dark:text-white text-center">
    {item._id}
    </th>
    <td class="text-sm text-gray-900 font-light px-1 items-center justify-center py-4 whitespace-nowrap">
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
    <td class="text-sm text-gray-900 font-light py-4 items-center justify-center whitespace-nowrap">
    <input
          type="text"
          required="required"
          className="relative block w-full appearance-none rounded-md  border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter Certificate"
          name="qualification"
          value={editFormData.qualification}
          onChange={handleEditFormChange}
        />
    </td>
    <td class="text-sm text-gray-900 font-light items-center justify-center  py-4 whitespace-nowrap">
    <input
          type="text"
          required="required"
          className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3
           py-2 text-gray-900 overflow-x-auto placeholder-gray-500 sm:text-sm"
          placeholder="Enter experience"
          name="experiance"
          value={editFormData.experiance}
          onChange={handleEditFormChange}
        />
    </td>
   
    <td class="text-sm text-gray-900 font-light px-3 py-4 items-center justify-center whitespace-nowrap">
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
                    onChange={uploadImage}
                    multiple
                    name="image"
                    accept="image/png , image/jpeg, image/webp"
                   
                    />
                </label>
            </div>
        </div>
      
    </div>
    </td>
   
    <td class="text-sm text-gray-900 font-light px-3 flex flex-col items-center justify-center py-4 whitespace-nowrap">
    <button
          type="submit"
        
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
                  w-20 justify-center rounded-md border border-transparent bg-secondary
                  py-1 px-2 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                    cursor-pointer
                    "
                    onClick={handleCancelClick}
        >{t("Cancel")}</button>
            
    </td>
    </tr>
  )
}

export default DocEditRow
