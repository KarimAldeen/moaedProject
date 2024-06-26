

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormHall from './Form'
import { useAddHall } from '../../api/Hall'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddHallModal() {


  const [t] = useTranslation()
  const { mutate, status } = useAddHall()
  const handelSubmit = (values: any) => {

    const dataToSend = getDataToSend(values)
    console.log(dataToSend);
    mutate(dataToSend)
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

