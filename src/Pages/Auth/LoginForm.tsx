import React from 'react'
import { Formik, Form, Field } from 'formik';
import Translate from '../../Components/Utils/Translate';
import { useTranslation } from 'react-i18next';
import { useLoginAdmin } from '../../api/auth';

import * as Yup from "yup";
import { getInitialValues, getValidationSchema } from './formUtil';
import { LoadingButton } from '../../Components/Ui/LoadingButton';
import useNavigateOnSuccess from '../../Hooks/useNavigateOnSuccess';
import useAuthState from '../../lib/state mangment/AuthState';
import ValidationField from '../../Components/ValidationField/ValidationField';

const LoginForm = () => {
  const [t] = useTranslation();

  const  {mutate , isLoading , isSuccess, data} = useLoginAdmin()
  const {login} = useAuthState()

  
  
  useNavigateOnSuccess(isSuccess , '/' , ()=>login(data as any ))

  const handelSubmit = (values:any)=>{

    console.log(values);
    mutate(values)
    // Implemnt Your Auth Code 
  }

  return (
    <div className='LoginForm' style={{
    }}>
  
      <nav className='Login_Nav'>
        <h5> {t("Login")} </h5>
        <div><Translate /></div>
      </nav>
      <Formik
        initialValues={getInitialValues()}
        validationSchema={getValidationSchema()}
        onSubmit={handelSubmit}
      >
        <Form>
          <div className='form-outline mb-4'>
            <h4 className='Login_H4'>
              {t("Welcome back, please login to your account.")}
            </h4>
            
            <ValidationField
              placeholder={t('email')}
              type='text'
              name='email'
              className='form-control form-control-lg'
            />
          </div>

          <div className='form-outline mb-4'>
            <ValidationField
            placeholder={t('password')}
              type='password'
              name='password'

              className='form-control form-control-lg'
            />
          </div>

          <LoadingButton className='btn btn-primary btn-lg btn-block w-100' isLoading={isLoading}>

          {/* <button type='submit'  className='btn btn-primary btn-lg btn-block w-100'> */}
            {t("Sign in")}
          {/* </button> */}
          </LoadingButton>
          <p className='Reserved'>{t("Phoenix © 2024 | All Rights Reserved")}</p>
        </Form>

      </Formik>
    </div>

  )
}

export default LoginForm