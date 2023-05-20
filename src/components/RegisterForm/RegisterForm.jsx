import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  Span,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

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

  const handleSubmit = event => {
    event.preventDefault();
    if (password === confirmPassword) {
      dispatch(register({ email, password }));
    }
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Container>
      <Title>Registration</Title>
      <Form onSubmit={handleSubmit}>
        <label>
          <Input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
        <label>
          <Input
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <label>
          <Input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Registration</Button>
      </Form>
      <Span>Already have an account? </Span>
    </Container>
  );
};
