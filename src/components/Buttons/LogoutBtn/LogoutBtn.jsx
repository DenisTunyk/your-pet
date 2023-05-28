import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import logout from '../../../assets/icon/logout.svg';
import { LogoutIcon, ButtonLogout } from './LogoutBtn.style';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogoutBtn = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  const dispatch = useDispatch();

  const handleButtonLogout = () => {
    setLogoutModal(true);
    // dispatch(logOut());
    // document.location.reload();
    // navigate('/');
  };

  const closeModal = () => {
    setLogoutModal(false);
  };

  const navigate = useNavigate();
  return (
    <>
      <ButtonLogout onClick={handleButtonLogout}>
        <LogoutIcon alt="logout user" src={logout} /> Log Out
      </ButtonLogout>
      {logoutModal && <ModalLogout handler={closeModal} />}
    </>
  );
};
