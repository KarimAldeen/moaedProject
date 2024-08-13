import React from 'react';
import { Select, Space } from 'antd';
import { useAddRecommended, useAddTrendy } from '../../../api/Hall';




const Switch= ({id}:any) =>{
    const {mutate} = useAddRecommended({id:id});
    const {mutate:Trendy} = useAddTrendy({id:id})
    console.log(id);
    
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        if(value === "recommended"){
            mutate({})
        }else{
            Trendy({})
        }
      };

    return  (
        <Space wrap>
          <Select
            style={{ width: 120 }}
            onChange={handleChange}
            allowClear
            options={[
              { value: 'recommended', label: 'recommended' },
              { value: 'trendy', label: 'trendy' },
           
            ]}
          />
      
        </Space>
      );
}

export default Switch;