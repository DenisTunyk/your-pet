import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { Spinner } from 'components/Spinner/Spinner';
import { ToastContainer, Slide } from 'react-toastify';
import { notifyError } from 'helpers/Toastify';
import {
  validattionLogin,
  InputError,
  InputCorrect,
} from 'components/FormValidation/FormValidation';
import { ReactComponent as Closed } from '../../assets/icon/eye-closed.svg';
import { ReactComponent as Open } from '../../assets/icon/eye-open.svg';
import { ReactComponent as Check } from '../../assets/icon/check.svg';
import { ReactComponent as Cross } from '../../assets/icon/cross-small.svg';
import {
  Container,
  Input,
  Titel,
  Button,
  FormAuth,
  LinkToRegister,
  IconShow,
  Label,
  TextLink,
  IconCross,
  IconCheck,
} from './LoginForm.styled';
import { Backgraund } from '../LoginForm/LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

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
        notifyError('User not found');
      }
      if (res.payload === 'Request failed with status code 401') {
        notifyError('Invalid email or password');
      }
    });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Backgraund>
      <Container>
        <ToastContainer transition={Slide} />
        <Titel>Login</Titel>
        <Formik
          validationSchema={validattionLogin}
          onSubmit={handleSubmit}
          initialValues={initialValues}
        >
          {({ errors, values }) => (
            <FormAuth autoComplete="off">
              <Label>
                <Input
                  className={
                    !errors.email && values.email !== ''
                      ? 'success'
                      : errors.email && values.email !== ''
                      ? 'error'
                      : 'default'
                  }
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                {!errors.email && values.email !== '' ? (
                  <IconCheck>
                    <Check stroke="green" />
                  </IconCheck>
                ) : null}
                {errors.email && values.email !== '' ? (
                  <IconCross>
                    <Cross stroke="red" />
                  </IconCross>
                ) : null}
                {!errors.email && values.email !== '' ? (
                  <InputCorrect name="Email is correct" />
                ) : null}
                <InputError name="email" />
              </Label>
              <Label>
                <Input
                  className={
                    !errors.password && values.password !== ''
                      ? 'success'
                      : errors.password && values.password !== ''
                      ? 'error'
                      : 'default'
                  }
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                {!errors.password && values.password !== '' ? (
                  <IconCheck>
                    <Check stroke="green" />
                  </IconCheck>
                ) : (
                  <IconShow onClick={togglePassword}>
                    {showPassword ? <Open /> : <Closed />}
                  </IconShow>
                )}
                {!errors.password && values.password !== '' ? (
                  <InputCorrect name="Password is secure " />
                ) : null}
                <InputError name="password" />
              </Label>
              {isRefreshing ? (
                <Spinner />
              ) : (
                <Button
                  disabled={errors.email || errors.password}
                  type="submit"
                >
                  Login
                </Button>
              )}
            </FormAuth>
          )}
        </Formik>
        <TextLink>
          <span>Don't have an account?</span>
          <LinkToRegister to="/registration">Register</LinkToRegister>
        </TextLink>
      </Container>
    </Backgraund>
  );
};
