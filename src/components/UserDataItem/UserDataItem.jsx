// import edit from '../../assets/icon/edit-2.svg';

// import { useState } from 'react';
// import { Form, Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// // import { parse, isDate } from 'date-fns';

// const today = new Date();

// const nameSchema = yup.object({
//   name: yup
//     .string()
//     .min(1, 'Too Short!')
//     .max(16)
//     .matches(
//       /^[a-zA-Zа-яіїєА-ЯІЇЄ][a-zA-Zа-яіїєА-ЯІЇЄ'-]*$/,
//       'Only alphabetic characters are allowed'
//     )
//     .required('Field is required!'),
// });

// const emailSchema = yup.object().shape({
//   email: yup
//     .string()
//     .required('Email field is required')
//     .matches(
//       /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
//       'Example: user@mail.com'
//     )
//     .max(70, 'Maximum 70 characters')
//     .min(6, 'Minimum 6 characters')
//     .email(),
// });
// const citySchema = yup.object({
//   city: yup
//     .string()
//     .min(3, 'Min 3 characters')
//     .max(35, 'Max 35 characters')
//     .matches(
//       /^(?=[a-zA-Zа-яіїєА-ЯІЇЄ])[a-zA-Zа-яіїєА-ЯІЇЄ'-]+,\s[a-zA-Zа-яіїєА-ЯІЇЄ'-]+$/,
//       'Only in format "Country, City"'
//     ),
// });
// const phoneSchema = yup.object({
//   phone: yup
//     .string()
//     .matches(/^\+380\d{9}$/, 'Phone should be in format +380000000000'),
// });
// const birthdaySchema = yup.object({
//   birthday: yup
//     .date()
//     // .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
//     //   if (originalValue) {
//     //     return originalValue.length === 10;
//     //   }
//     // })
//     // .transform(function (_, originalValue) {
//     //   const parsedDate = isDate(originalValue)
//     //     ? originalValue
//     //     : parse(originalValue, 'dd.MM.yyyy', new Date());

//     //   return parsedDate;
//     // })
//     .typeError('Please enter a valid date: dd.MM.yyyy')
//     .required()
//     .min('01.01.1950', 'Date is too early')
//     .max(today),
// });

export const UserDataItem = () => {
  return;
};
