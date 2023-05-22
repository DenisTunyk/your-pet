import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAutn';
import { Spinner } from 'components/Spinner/Spinner';
import {
  validattionLogin,
  InputError,
  InputCorrect,
} from 'components/FormValidation/FormValidation';
import { ReactComponent as Closed } from '../../assets/icon/eye-closed.svg';
import { ReactComponent as Open } from '../../assets/icon/eye-open.svg';
import {
  Container,
  Input,
  Titel,
  Button,
  Span,
  FormAuth,
  LinkToRegister,
  IconShow,
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
        {formik => (
          <FormAuth onSubmit={handleSubmit}>
            <label>
              <Input
                className={
                  !formik.errors.email && formik.values.email !== ''
                    ? 'success'
                    : formik.errors.email && formik.values.email !== ''
                    ? 'error'
                    : 'default'
                }
                type="text"
                name="email"
                placeholder="Email"
              />
              {!formik.errors.email && formik.values.email !== '' ? (
                <InputCorrect name="Email is correct" />
              ) : null}
              <InputError name="email" />
            </label>
            <label>
              <Input
                className={
                  !formik.errors.password && formik.values.password !== ''
                    ? 'success'
                    : formik.errors.password && formik.values.password !== ''
                    ? 'error'
                    : 'default'
                }
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              {
                <IconShow onClick={togglePassword}>
                  {showPassword ? <Open /> : <Closed />}
                </IconShow>
              }
              {!formik.errors.password && formik.values.password !== '' ? (
                <InputCorrect name="Password is correct" />
              ) : null}
              <InputError name="password" />
            </label>
            {isPending ? (
              <Spinner />
            ) : (
              <Button
                disabled={formik.errors.email || formik.errors.password}
                type="submit"
              >
                Login
              </Button>
            )}
          </FormAuth>
        )}
      </Formik>
      <Span>Don't have an account?</Span>
      <LinkToRegister to="/register">Register</LinkToRegister>
    </Container>
  );
};
