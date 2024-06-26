
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetHall} from '../../api/Hall'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditHallModal from './EditModal'
import AddHallModal from './AddModal'

function HallPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetHall()

      
  return (
    
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Hall'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
      />
      
      <EditHallModal />
      <AddHallModal />
      
    </DashBody>
  )
}

export default HallPage

