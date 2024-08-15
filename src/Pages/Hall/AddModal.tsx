

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormHall from './Form'
import { useAddHall, useAddRecommended, useAddTrendy } from '../../api/Hall'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'
import { useAddHallImages } from '../../api/Images'

function AddHallModal() {


  const [t] = useTranslation()
  const { mutateAsync, status } = useAddHall()

  
  const {mutate:Recommended} = useAddRecommended();
  const {mutate:Trendy} = useAddTrendy()
  const {mutate:HallImages} = useAddHallImages()

  const handelSubmit = (values: any) => {
    console.log(values,"values");
  
    const dataToSend = getDataToSend(values)

    console.log(dataToSend);
    mutateAsync(dataToSend).then((data)=>{
      console.log(data,"data");

      const Id = (data as any )?.HALL?.id ;
      const type = values?.type ;
      const images = values?.images ?? [];
        if(images?.length > 0){
          images?.map((item:any)=>{
           return HallImages({path:item, id:Id,hall_id:Id})
          })
        }
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

