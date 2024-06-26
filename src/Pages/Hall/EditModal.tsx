
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormHall from './Form'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateHall } from '../../api/Hall'
import { QueryStatusEnum } from '../../config/QueryStatus'

function EditHallModal() {
  const {objectToEdit} = usePageState()
  
  const {mutate , status} = useUpdateHall()
  const handelSubmit = (values:any )=>{
    const DataToSend = structuredClone(values);
    if( typeof DataToSend?.hall_image === "string"){
      delete DataToSend["hall_image"]
    }
    mutate({...DataToSend,_method:"PUT"})
    // Submit Value
  }
  return (
    <LayoutModal 
    status={status as QueryStatusEnum}
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={handelSubmit}
     headerText='edit' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormHall />
    </LayoutModal>
  )
}

export default EditHallModal
