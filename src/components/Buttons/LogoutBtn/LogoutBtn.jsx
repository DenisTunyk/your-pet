import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import logout from '../../../assets/icon/logout.svg';
import { LogoutIcon, ButtonLogout } from './LogoutBtn.style';
import { useNavigate } from 'react-router-dom';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <ButtonLogout
      onClick={async () => {
        await dispatch(logOut());
        document.location.reload();
        navigate('/');
      }}
    >
      <LogoutIcon alt="logout user" src={logout} /> Log Out
    </ButtonLogout>
  );
};
