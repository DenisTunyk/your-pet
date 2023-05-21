import logout from '../../../assets/icon/logout.svg';
import css from '../LogoutBtn/Logout.module.css';

export const LogoutBtn = () => {
  return (
    <button type="button" className={css.button}>
      <img className={css.button__icon} src={logout} alt="logout" />
      Log out
    </button>
  );
};
