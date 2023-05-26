import * as yup from 'yup';
import { ErrorMessage } from 'formik';
import { ErrorText, CorrectText } from './FormValidation.styled';

const emailValid =
  /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/;
const passwordValid = /(?!\s)^[^ ]*$/;

export const validattionLogin = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .matches(emailValid, 'Enter a valid Email')
    .max(70, 'Maximum 70 characters')
    .min(10, 'Minimum 10 characters')
    .email(),
  password: yup
    .string()
    .matches(passwordValid, 'Please enter min 7 characters and max 32')
    .min(7, 'Enter 7 or more characters')
    .max(32, 'Please enter 32 characters or less')
    .required('Password field is required'),
});

export const validationRegister = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .matches(emailValid, 'Enter a valid Email')
    .min(10, 'Minimum 10 characters')
    .max(70, 'Maximum 70 characters')
    .email(),
  password: yup
    .string()
    .matches(passwordValid, 'Please enter min 7 characters and max 32')
    .min(7, 'Enter 7 or more characters')
    .max(32, 'Please enter 32 characters or less')
    .required('Password field is required'),
  confirmPassword: yup
    .string()
    .required('Confirm field is required')
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: () =>
        yup
          .string()
          .oneOf([yup.ref('password')], ' Please confirm your password')
          .required('Confirm field is required'),
    }),
});

export const InputError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const InputCorrect = ({ name }) => {
  return <CorrectText>{name}</CorrectText>;
};
