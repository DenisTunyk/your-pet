import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

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
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="email" value={email} placeholder="Email" />
        </label>
        <label>
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Password"
          />
        </label>
        <label>
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <span>Already have an account? </span>
    </div>
  );
};
