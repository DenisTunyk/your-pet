import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Container } from './RegisterForm.styled';

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
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Registration</button>
      </form>
      <span>Already have an account? </span>
    </Container>
  );
};
