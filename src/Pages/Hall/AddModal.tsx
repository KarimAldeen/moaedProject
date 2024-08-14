

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormHall from './Form'
import { useAddHall, useAddRecommended, useAddTrendy } from '../../api/Hall'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddHallModal() {


  const [t] = useTranslation()
  const { mutateAsync, status } = useAddHall()

  
  const {mutate:Recommended} = useAddRecommended();
  const {mutate:Trendy} = useAddTrendy()
  

  const handelSubmit = (values: any) => {

    const dataToSend = getDataToSend(values)
    console.log(dataToSend);
    mutateAsync(dataToSend).then((data)=>{
      console.log(data,"data");
      
      const Id = (data as any )?.HALL?.id ;
      const type = values?.type
      if(type === "recommended"){
        Recommended({id:Id})
      }else if((type === "trendy")){
          Trendy({id:Id})
      }
    })  
   

  }
  return (
    <LayoutModal

      isAddModal={true}
      getInitialValues={getInitialValues()}
      handleSubmit={handelSubmit}
      status={status as QueryStatusEnum}
      headerText={t('Add') + t('Hall')}

      getValidationSchema={getValidationSchema()}>

      <FormHall />
    </LayoutModal>
  )
}

export default AddHallModal

