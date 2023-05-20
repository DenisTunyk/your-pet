import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  Container,
  Form,
  Input,
  Titel,
  Button,
  Span,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Titel>Login</Titel>
      <Form onSubmit={handleSubmit}>
        <label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        <label>
          <Input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <Button type="submit">Login</Button>
      </Form>
      <Span>Don't have an account?</Span>
    </Container>
  );
};
