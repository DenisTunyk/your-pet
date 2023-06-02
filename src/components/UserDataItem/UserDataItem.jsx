import { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { ReactComponent as Edit } from '../../assets/icon/edit-2.svg';
import { ReactComponent as Check } from '../../assets/icon/check.svg';
import { Container, Input, Label, Button } from './UserDataItem.styled.jsx';

const Schema = yup.object({
  name: yup
    .string()
    .min(1, 'Too Short!')
    .max(16)
    .matches(
      /^[a-zA-Zа-яіїєА-ЯІЇЄ][a-zA-Zа-яіїєА-ЯІЇЄ'-\s]{1,15}$/,
      'Only alphabetic characters are allowed'
    )
    .required('Field is required!'),
  email: yup
    .string()
    .required('Email field is required')
    .matches(
      /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
      'Example: user@mail.com'
    )
    .max(70, 'Maximum 70 characters')
    .min(6, 'Minimum 6 characters')
    .email(),
  city: yup
    .string()
    .min(3, 'Min 3 characters')
    .max(35, 'Max 35 characters')
    .matches(
      /^(?=[a-zA-Zа-яіїєА-ЯІЇЄ])[a-zA-Zа-яіїєА-ЯІЇЄ'-]+[,.]?\s[a-zA-Zа-яіїєА-ЯІЇЄ'-]+$/,
      'Only in format "Country, City"'
    ),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Phone should be in format +380000000000'),
  birthday: yup
    .string()
    .matches(
      /^[0123][\d]\.[01][\d]\.[12][90][\d]{2}$/,
      'Please enter a valid date: dd.MM.yyyy'
    )
    .required(),
});

const capitalize = d => (d && d[0].toUpperCase() + d.slice(1)) || '';

export const UserDataItem = ({ field, initValue, setUser }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Formik
      validationSchema={Schema}
      initialValues={initValue}
      validateOnBlur={true}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Container>
            <Label>{capitalize(field)}:</Label>
            <Input autoComplete="off" name={field} disabled={isEdit} />
            {!isEdit ? (
              <Button
                type="button"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                <Edit />
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={() => {
                  setIsEdit(false);
                  setUser(values);
                }}
              >
                <Check stroke="#00C3AD" />
              </Button>
            )}
          </Container>
          <ErrorMessage
            name={field}
            render={msg => (
              <div
                id="fail"
                style={{
                  color: 'red',
                  fontSize: '.6rem',
                  position: 'relative',
                  maxWidth: '55%',
                  marginBottom: '8px',
                  marginLeft: 'auto',
                  marginRight: '32px',
                  height: '20px',
                }}
              >
                {msg}
              </div>
            )}
          />

          {!errors[field] &&
          values[field] !== '' &&
          touched[field] &&
          initValue[field] !== values[field] &&
          values[field] ? (
            <div
              id="success"
              style={{
                color: 'green',
                fontSize: '.6rem',
                position: 'relative',
                maxWidth: '55%',
                marginBottom: '8px',
                marginLeft: 'auto',
                marginRight: '32px',
                height: '20px',
              }}
            >
              {field} is correct
            </div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};
