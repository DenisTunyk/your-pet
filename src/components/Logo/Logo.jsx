import { Link } from 'react-router-dom';
import OurLogo from '../../images/logo/logo.svg';
// import css from './Logo.module.css';
import { LogoImg } from './Logo.styled';

export const Logo = ({ handleLinkClick }) => {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <Link to="/main" onClick={handleClick}>
      <LogoImg src={OurLogo} alt="YourPetLogo" />
    </Link>
  );
};
