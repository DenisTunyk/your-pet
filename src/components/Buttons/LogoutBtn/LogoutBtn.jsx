import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import logout from '../../../assets/icon/logout.svg';
import { LogoutIcon, ButtonLogout } from './LogoutBtn.style';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <ButtonLogout
      onClick={async () => {
        await dispatch(logOut());
        document.location.reload();
      }}
    >
      <LogoutIcon alt="logout user" src={logout} /> Log Out
    </ButtonLogout>
  );
};
