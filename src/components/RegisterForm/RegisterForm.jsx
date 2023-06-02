import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from 'redux/auth/auth-operations';
import { ToastContainer, Slide } from 'react-toastify';
import { notifyError } from 'helpers/Toastify';
import { Spinner } from 'components/Spinner/Spinner';
import { useAuth } from 'hooks/useAuth';
import {
  validationRegister,
  InputError,
  InputCorrect,
} from 'components/FormValidation/FormValidation';
import { ReactComponent as Closed } from '../../assets/icon/eye-closed.svg';
import { ReactComponent as Open } from '../../assets/icon/eye-open.svg';
import { ReactComponent as Check } from '../../assets/icon/check.svg';
import { ReactComponent as Cross } from '../../assets/icon/cross-small.svg';
import {
  Container,
  Title,
  Input,
  Button,
  FormAuth,
  IconShow,
  LinkToLogIn,
  Label,
  TextLink,
  IconCheck,
  IconCross,
} from './RegisterForm.styled';
import { Backgraund } from '../RegisterForm/RegisterForm.styled';

const initialVelues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isPending } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    const { email, password, confirmPassword } = values;

    if (password === confirmPassword) {
      dispatch(
        register({
          email: email,
          password: password,
        })
      ).then(res => {
        sessionStorage.setItem('firtsvisit', JSON.stringify({is_first: true}))
        if (res.payload.code === 201) {
          navigate('/user', { replace: true });
          actions.resetForm();
        }
        if (res.payload === 'Request failed with status code 409') {
          sessionStorage.removeItem('firtsvisit')
          notifyError(`User with email ${email} already exist`);
          console.log('error 409');
        }
      });
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Backgraund>
      <Container>
        <ToastContainer transition={Slide} />
        <Title>Registration</Title>
        <Formik
          initialValues={initialVelues}
          validationSchema={validationRegister}
          onSubmit={handleSubmit}
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
                  <InputCorrect name="Password is correct" />
                ) : null}
                <InputError name="password" />
              </Label>
              <Label>
                <Input
                  className={
                    !errors.confirmPassword && values.confirmPassword !== ''
                      ? 'success'
                      : errors.confirmPassword && values.confirmPassword !== ''
                      ? 'error'
                      : 'default'
                  }
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
                {!errors.confirmPassword && values.confirmPassword !== '' ? (
                  <IconCheck>
                    <Check stroke="green" />
                  </IconCheck>
                ) : (
                  <IconShow onClick={toggleConfirmPassword}>
                    {showConfirmPassword ? <Open /> : <Closed />}
                  </IconShow>
                )}
                {!errors.confirmPassword && values.confirmPassword !== '' ? (
                  <InputCorrect name="Password confirmed" />
                ) : null}
                <InputError name="confirmPassword" />
              </Label>
              {isPending ? (
                <Spinner />
              ) : (
                <Button
                  disabled={
                    errors.email || errors.password || errors.confirmPassword
                  }
                  type="submit"
                >
                  Registration
                </Button>
              )}
            </FormAuth>
          )}
        </Formik>
        <TextLink>
          <span>Already have an account? </span>
          <LinkToLogIn to="/login">Login</LinkToLogIn>
        </TextLink>
      </Container>
    </Backgraund>
  );
};
