import { Form, TimePicker } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const Time = ({ name, label,className,isDisabled,onChange,props }: any) => {

  const { errorMsg, isError, t, formik } = useFormField(name, props)
  const onCalendarChange = (value: any) => {
    
    formik.setFieldValue(name, value)

  };
  return (

    <div className='ValidationField'>
      <label htmlFor={name} className="text">
        {t(`${label}`)}
      </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
              <TimePicker
                allowClear
                className={`${className} w-100`}
                size="large" 
                defaultValue={formik.values[name]}
               onChange={onChange || onCalendarChange}
               disabled={isDisabled}
               />
              



      </Form.Item>
    </div>
  )
}

export default Time