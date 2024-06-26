import { Form, DatePicker } from 'antd';
import React from 'react';
import useFormField from '../../../Hooks/useFormField';
import dayjs from 'dayjs';

const DateField = ({ name, label, picker = "date", isDisabled, props, onChange, placeholder, className, Format }: any) => {

  const { errorMsg, isError, t, formik } = useFormField(name, props);

  const onCalendarChange = (value: any) => {
    formik.setFieldValue(name, value);
  };

  // Function to check if a date is valid
  const isValidDate = (date: any) => {
    return date && !isNaN(date.valueOf()) && dayjs(date).isValid();
  };

  // Set a default invalid date if the provided defaultValue is invalid
  const getDefaultDate = () => {
    const defaultValue = formik.values[name];
    return isValidDate(defaultValue) ? defaultValue : null; // Set to null or any other default invalid date
  };

  return (
    <div className='ValidationField'>
      <label htmlFor={name} className="text">
        {t(`${label ? label : name}`)}
      </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
        <DatePicker
          picker={picker}
          placeholder={placeholder ? t(placeholder) : t(name)}
          allowClear
          className={`${className} w-100`}
          defaultValue={getDefaultDate()}
          size="large"
          onChange={onChange || onCalendarChange}
          disabled={isDisabled}
          format={Format}
        />
      </Form.Item>
    </div>
  );
}

export default DateField;
