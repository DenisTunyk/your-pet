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
            <Label>
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
                <IconCheck>
                  <Check stroke="green" />
                </IconCheck>
              ) : null}
              {formik.errors.email && formik.values.email !== '' ? (
                <div>
                  <IconCross>
                    <Cross stroke="red" />
                  </IconCross>
                </div>
              ) : null}

              {!formik.errors.email && formik.values.email !== '' ? (
                <InputCorrect name="Email is correct" />
              ) : null}
              <InputError name="email" />
            </Label>
            <Label>
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
                <InputCorrect name="Password is secure " />
              ) : null}
              <InputError name="password" />
            </Label>
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
      <TextLink>
        <span>Don't have an account?</span>
        <LinkToRegister to="/registration">Register</LinkToRegister>
      </TextLink>
    </Container>
  );
};
