import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from 'redux/auth/auth-operations';
import {
  validationRegister,
  InputError,
} from 'components/FormValidation/FormValidation';
import {
  Container,
  Title,
  Input,
  Button,
  Span,
  FormAuth,
} from './RegisterForm.styled';

const initialVelues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    const { email, password, confirmPassword } = values;
    console.log(values);

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
            <Input type="text" name="email" placeholder="Email" />
            <InputError name="email" />
          </label>
          <label htmlFor="password">
            <Input type="text" name="password" placeholder="Password" />
            <InputError name="password" />
          </label>
          <label>
            <Input
              type="text"
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <InputError name="confirmPassword" />
          </label>
          <Button type="submit">Registration</Button>
        </FormAuth>
      </Formik>
      <Span>Already have an account? </Span>
    </Container>
  );
};
