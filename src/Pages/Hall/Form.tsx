
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../Components/ValidationField/ValidationField';
import { useFormikContext } from 'formik';

function FormHall() {
  const categories = [{key:"Weddings",value:"Weddings"},{key:"Sad occasions",value:"Sad occasions"}
    ,{key:"Graduation parties",value:"Graduation parties"},{key:"Birthdays",value:"Birthdays"}]
    const {values} = useFormikContext<any>()
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        {/* name from form utils */}
        <ValidationField name="name" type="text" label='name' placeholder='name' />
        <ValidationField name="capacity" type="number" label='capacity' placeholder='capacity' />
        <ValidationField name="Hall Location" type="text" label='Hall Location' placeholder='Hall Location' />
        <ValidationField name="price" type="number" label='price' placeholder='price' />
        <ValidationField name="location" type="text" label='location' placeholder='location' />

      </Col>
      <Col>
      <ValidationField name="Hall Description" type="text" label='Hall Description' placeholder='Hall Description' />
      <ValidationField name="category" type="Select" label='category' placeholder='category' option={categories} />
      <ValidationField name="hall_image" type="File" label='hall_image' placeholder='hall_image' />
      {/* <ValidationField name="images" type="MaltyFile" label='images'  placeholder='images' /> */}
      {!values?.id && 
      
      <ValidationField name="type" type="Select" label='type' placeholder='type'  option={[
              { value: 'recommended', label: 'recommended' },
              { value: 'trendy', label: 'trendy' },
           
            ]} />
      }
      </Col>


    </Row>
  )
}

export default FormHall


