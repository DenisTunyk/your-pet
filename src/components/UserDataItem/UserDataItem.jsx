// import { useState } from 'react';
// import { Form, Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// // import { parse, isDate } from 'date-fns';
// import { ReactComponent as Edit } from '../../assets/icon/edit-2.svg';
// import { ReactComponent as Check } from '../../assets/icon/check.svg';
// import {
//   Form,
//   Container,
//   // List,
//   // ListItem,
//   Input,
//   Label,
//   Button,
// } from './UserDataItem.styled';

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

export const UserDataItem = () => {};
//   field,
//   initValue,
//   setIsDisabledBtn,
//   isDisabledBtn,
//   setUser,
// }) => {
//   const addSchema = dt => {
//     switch (dt) {
//       case 'name':
//         return nameSchema;
//       case 'email':
//         return emailSchema;

//       case 'city':
//         return citySchema;

//       case 'birthday':
//         return birthdaySchema;

//       case 'phone':
//         return phoneSchema;

//       default:
//         return nameSchema;
//     }
//   };
//   return (
//     <Formik
//       validationSchema={addSchema(field)}
//       initialValues={initValue}
//       validateOnBlur={false}
//       validateOnChange={true}
//       onSubmit={values => {
//         if (Object.keys(values)[0] === 'birthday') {
//           setUser({ birthday: parseDateToISO(values.birthday) });
//           setIsEdit(false);
//           setIsDisabledBtn(false);
//           return;
//         }
//         if (Object.keys(values)[0] === 'city') {
//           setUser({ city: values.city });
//           setIsEdit(false);
//           setIsDisabledBtn(false);
//           return;
//         }

//         setUser(values);
//         setIsEdit(false);
//         setIsDisabledBtn(false);
//       }}
//     >
//       {({ values, handleSubmit }) => (
//         <Form>
//           <Container>
//             <Label>{capitalize(field)}:</Label>
//             {isEdit ? (
//               <Input autoComplete="off" name={field} />
//             ) : (
//               <StyledValue>{values[field]}</StyledValue>
//             )}

//             {!isEdit && !isDisabledBtn && (
//               <Button
//                 type="button"
//                 onClick={() => {
//                   setIsEdit(true);
//                   setIsDisabledBtn(true);
//                 }}
//               >
//                 <Edit />
//               </Button>
//             )}
//             {isDisabledBtn && !isEdit && (
//               <Button type="button" disabled isDisabled>
//                 {/* <BtnImageDis /> */}
//               </Button>
//             )}

//             {isEdit && (
//               <Button
//                 type="submit"
//                 onClick={handleSubmit}
//                 onSubmit={() => {
//                   setTimeout(function () {
//                     const element = document.getElementById('#success');
//                     if (element) {
//                       element.remove();
//                     }
//                     return;
//                   }, 3000);
//                 }}
//               >
//                 <Check />
//               </Button>
//             )}
//           </Container>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // <Container>
// //   <Form
// //     validationSchema={addSchema(field)}
// //     initialValues={initValue}
// //     validateOnBlur={false}
// //     validateOnChange={true}
// //     onSubmit={values => {
// //       if (Object.keys(values)[0] === 'birthday') {
// //         setUser({ birthday: parseDateToISO(values.birthday) });
// //         setIsEdit(false);
// //         setIsDisabledBtn(false);
// //         return;
// //       }
// //       if (Object.keys(values)[0] === 'city') {
// //         setUser({ city: values.city });
// //         setIsEdit(false);
// //         setIsDisabledBtn(false);
// //         return;
// //       }

// //       setUser(values);
// //       setIsEdit(false);
// //       setIsDisabledBtn(false);
// //     }}
// //   >
//     <List>
//       <ListItem>
//         <Label htmlFor="usernameInput">Name:</Label>
//         <Input>
//           {' '}
//           <Button type="button">
//             <Edit />
//           </Button>
//         </Input>
//       </ListItem>

//       <ListItem>
//         <Label htmlFor="emailInput">Email:</Label>
//         <Input>
//           <Button type="button">
//             <Edit />
//           </Button>{' '}
//         </Input>
//       </ListItem>

//       <ListItem>
//         <Label htmlFor="birthdayInput">Birthday:</Label>
//         <Input>
//           {' '}
//           <Button type="button">
//             {' '}
//             <Edit />
//           </Button>
//         </Input>
//       </ListItem>

//       <ListItem>
//         <Label htmlFor="phoneInput">Phone:</Label>
//         <Input>
//           {' '}
//           <Button type="button">
//             {' '}
//             <Edit />
//           </Button>
//         </Input>
//       </ListItem>

//       <ListItem>
//         <Label htmlFor="cityInput">City:</Label>
//         <Input>
//           {' '}
//           <Button type="button">
//             <Edit />
//           </Button>
//         </Input>
//       </ListItem>
//     </List>
//   </Form>
// </Container>
//   );
// };
