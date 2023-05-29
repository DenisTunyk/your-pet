import { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { ReactComponent as Edit } from '../../assets/icon/edit-2.svg';
import { ReactComponent as Check } from '../../assets/icon/check.svg';
import {
  Container,
  //   StyledValue,
  Input,
  Label,
  Button,
} from './UserDataItem.styled.jsx';

const today = new Date();

const nameSchema = yup.object({
  name: yup
    .string()
    .min(1, 'Too Short!')
    .max(16)
    .matches(
      /^[a-zA-Zа-яіїєА-ЯІЇЄ][a-zA-Zа-яіїєА-ЯІЇЄ'-]*$/,
      'Only alphabetic characters are allowed'
    )
    .required('Field is required!'),
});

const emailSchema = yup.object().shape({
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
});
const citySchema = yup.object({
  city: yup
    .string()
    .min(3, 'Min 3 characters')
    .max(35, 'Max 35 characters')
    .matches(
      /^(?=[a-zA-Zа-яіїєА-ЯІЇЄ])[a-zA-Zа-яіїєА-ЯІЇЄ'-]+,\s[a-zA-Zа-яіїєА-ЯІЇЄ'-]+$/,
      'Only in format "Country, City"'
    ),
});
const phoneSchema = yup.object({
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Phone should be in format +380000000000'),
});
const birthdaySchema = yup.object({
  birthday: yup
    .date()
    // .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
    //   if (originalValue) {
    //     return originalValue.length === 10;
    //   }
    // })
    // .transform(function (_, originalValue) {
    //   const parsedDate = isDate(originalValue)
    //     ? originalValue
    //     : parse(originalValue, 'dd.MM.yyyy', new Date());

    //   return parsedDate;
    // })
    .typeError('Please enter a valid date: dd.MM.yyyy')
    .required()
    .min(new Date(1970, 1, 1), 'Date is too early')
    .max(today),
});

const capitalize = d => (d && d[0].toUpperCase() + d.slice(1)) || '';

export const UserDataItem = ({
  field,
  initValue,
  setIsDisabledBtn,
  isDisabledBtn,
  setUser,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const addSchema = f => {
    switch (f) {
      case 'name':
        return nameSchema;
      case 'email':
        return emailSchema;

      case 'city':
        return citySchema;

      case 'birthday':
        return birthdaySchema;

      case 'phone':
        return phoneSchema;

      default:
        return nameSchema;
    }
  };
  return (
    <Formik
      validationSchema={addSchema(field)}
      initialValues={initValue}
      validateOnBlur={false}
      validateOnChange={true}
      onSubmit={values => {
        if (Object.keys(values)[0] === 'birthday') {
          setUser({ birthday: values.birthday });
          setIsEdit(false);
          setIsDisabledBtn(false);
          return;
        }
        if (Object.keys(values)[0] === 'city') {
          setUser({ city: values.city });
          setIsEdit(false);
          setIsDisabledBtn(false);
          return;
        }

        setUser(values);
        setIsEdit(false);
        setIsDisabledBtn(false);
      }}
    >
      {({ values, handleSubmit, errors, touched }) => (
        <Form>
          <Container>
            <Label>{capitalize(field)}:</Label>
            {/* {isEdit ? ( */}
            <Input autoComplete="off" name={field} />
            {/* ) : ( */}
            {/* <StyledValue>{values[field]}</StyledValue> */}
            {/* )} */}

            {!isEdit && !isDisabledBtn && (
              <Button
                type="button"
                onClick={() => {
                  setIsEdit(true);
                  setIsDisabledBtn(true);
                }}
              >
                <Edit />
              </Button>
            )}
            {isDisabledBtn && !isEdit && (
              <Button type="button" disabled isDisabled>
                <Check />
              </Button>
            )}

            {isEdit && (
              <Button
                type="submit"
                onClick={handleSubmit}
                onSubmit={() => {
                  setTimeout(function () {
                    const element = document.getElementById('#success');
                    if (element) {
                      element.remove();
                    }
                    return;
                  }, 3000);
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
