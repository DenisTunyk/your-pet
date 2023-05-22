import { Link } from 'react-router-dom';
import OurLogo from '../../images/logo/logo.svg';
import css from './Logo.module.css';

export const Logo = ({ handleLinkClick }) => {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <Link to="/main" onClick={handleClick}>
      <img className={css.logo} src={OurLogo} alt="YourPetLogo" />
    </Link>
  );
};
