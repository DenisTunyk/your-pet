import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Log IN</NavLink>
      <NavLink to="/login">Registration</NavLink>
    </div>
  );
};
