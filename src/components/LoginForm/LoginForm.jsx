import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <span>Don't have an account?</span>
    </div>
  );
};
