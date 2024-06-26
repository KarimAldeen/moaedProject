import { Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import useFormField from '../../../Hooks/useFormField';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchField = ({ name, label, placeholder, isDisabled, searchBy, option, isMulti, onChange, className, loading,props }: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const location = useLocation()

    const navigate = useNavigate()
  useEffect(() => {
    const searchParams = new URLSearchParams(location?.search);
    setSearchQuery(searchParams?.get('search') || '');
    console.log(searchParams);
    
  }, [location]);



  const SelecthandleChange = (value: { value: string; label: React.ReactNode }) => {
    formik?.setFieldValue(name, value);

    console.log(value);
  };
  const SearchHandleChange = (value:any) => {
    if (value || value !== "") {
      navigate(`${window?.location?.pathname}?${searchBy}=${value}`);
    } else {
      const params = new URLSearchParams(location.search);
      params.delete(searchBy ?? "search");
      navigate(`${window?.location.pathname}?${params.toString()}`);
  }

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
        <Select
          placeholder={t(`${placeholder ? placeholder : name}`)}
          disabled={isDisabled}
          options={option}
          size="large"
          className={`${className} w-100`}
          value={formik.values[name]}
          // defaultValue={formik.values[name]}
          allowClear
          {...(isMulti && { mode: "multiple" })}
          onChange={onChange || SelecthandleChange}
          showSearch  
          optionFilterProp="label" 
            onSearch={SearchHandleChange}
            loading={loading}
            
        />
      </Form.Item>
    </div>
  );
};

export default React.memo(SearchField);
