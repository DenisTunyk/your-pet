import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from 'redux/auth/auth-operations';
import { Spinner } from 'components/Spinner/Spinner';
import { useAuth } from 'hooks/useAutn';
import {
  validationRegister,
  InputError,
  InputCorrect,
} from 'components/FormValidation/FormValidation';
import { ReactComponent as Closed } from '../../assets/icon/eye-closed.svg';
import { ReactComponent as Open } from '../../assets/icon/eye-open.svg';
import {
  Container,
  Title,
  Input,
  Button,
  Span,
  FormAuth,
  IconShow,
} from './RegisterForm.styled';

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
        if (res.payload.code === 201) {
          navigate('/user', { replace: true });
          actions.resetForm();
        }
        if (res.payload === 'Request failed with status code 409') {
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
    <Container>
      <Title>Registration</Title>
      <Formik
        initialValues={initialVelues}
        validationSchema={validationRegister}
        onSubmit={handleSubmit}
      >
        {({ errors, values }) => (
          <FormAuth autoComplete="off">
            <label>
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
                <InputCorrect name="Email is correct" />
              ) : null}
              <InputError name="email" />
            </label>
            <label>
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
              <IconShow onClick={togglePassword}>
                {showPassword ? <Closed size={24} /> : <Open size={24} />}
              </IconShow>
              {!errors.password && values.password !== '' ? (
                <InputCorrect name="Password is correct" />
              ) : null}
              <InputError name="password" />
            </label>
            <label>
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
              <IconShow onClick={toggleConfirmPassword}>
                {showConfirmPassword ? (
                  <Closed size={24} />
                ) : (
                  <Open size={24} />
                )}
              </IconShow>
              {!errors.confirmPassword && values.confirmPassword !== '' ? (
                <InputCorrect name="Password confirmed" />
              ) : null}
              <InputError name="confirmPassword" />
            </label>
            {isPending ? (
              <Spinner />
            ) : (
              <Button
                disabled={
                  errors.email || errors.password || errors.confirmPassword
                }
                type="submit"
                onClick={
                  values.email !== '' &&
                  values.password !== '' &&
                  values.confirmPassword !== ''
                }
              >
                Registration
              </Button>
            )}
          </FormAuth>
        )}
      </Formik>
      <Span>Already have an account? </Span>
    </Container>
  );
};
