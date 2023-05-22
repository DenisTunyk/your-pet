import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAutn';
import {
  validattionLogin,
  InputError,
  InputCorrect,
} from 'components/FormValidation/FormValidation';
import {
  Container,
  Input,
  Titel,
  Button,
  Span,
  FormAuth,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isPending } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    ).then(res => {
      if (res.payload.code === 200) {
        navigate('/user', { replace: true });
        actions.resetForm();
      }
      if (res.payload === 'Request failed with status code 409') {
      }
      if (res.payload === 'Request failed with status code 401') {
      }
    });
  };

  return (
    <Container>
      <Titel>Login</Titel>
      <Formik
        validationSchema={validattionLogin}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <FormAuth onSubmit={handleSubmit}>
          <label>
            <Input type="text" name="email" placeholder="Email" />
          </label>
          <label>
            <Input type="text" name="password" placeholder="Password" />
          </label>
          <Button type="submit">Login</Button>
        </FormAuth>
      </Formik>
      <Span>Don't have an account?</Span>
    </Container>
  );
};
