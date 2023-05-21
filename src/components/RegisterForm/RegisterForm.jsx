import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  Container,
  Title,
  Input,
  Button,
  Span,
  FormAuth,
} from './RegisterForm.styled';

const validationRegister = yup.object().shape({
  email: yup
    .string()
    .min(10, 'Minimum 10 characters')
    .max(70, 'Maximum 70 characters')
    .required(),
  password: yup
    .string()
    .max(32, 'Please enter 32 characters or less')
    .min(7, 'Enter 7 or more characters')
    .required(),
  confirmPassword: yup.string(),
});

const initialVelues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'confirmPassword':
        return setConfirmPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    // if (password === confirmPassword) {
    //   dispatch(register({ email, password }));
    // }
    // reset();
  };

  // const reset = () => {
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');
  // };

  return (
    <Container>
      <Title>Registration</Title>
      <Formik
        initialValues={initialVelues}
        validationSchema={validationRegister}
        onSubmit={handleSubmit}
      >
        <FormAuth autoComplete="off">
          <label htmlFor="login">
            <Input
              type="text"
              name="email"
              // value={email}
              placeholder="Email"
              // onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <Input
              type="text"
              name="password"
              // value={password}
              placeholder="Password"
              // onChange={handleChange}
            />
          </label>
          <label>
            <Input
              type="text"
              name="confirmPassword"
              // value={confirmPassword}
              placeholder="Confirm password"
              // onChange={handleChange}
            />
          </label>
          <Button type="submit">Registration</Button>
        </FormAuth>
      </Formik>
      <Span>Already have an account? </Span>
    </Container>
  );
};
