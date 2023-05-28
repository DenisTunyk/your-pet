import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import logout from '../../../assets/icon/logout.svg';
import { LogoutIcon, ButtonLogout } from './LogoutBtn.style';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useEffect, useState } from 'react';

export const LogoutBtn = () => {
  const [logoutModal, setLogoutModal] = useState(false)
  const dispatch = useDispatch();

  const handleButtonLogout = () => {
    // dispatch(logOut());
    // document.location.reload();
    setLogoutModal(true);
  }

  const closeModal = () => {
    setLogoutModal(false);
  }

  return (
    <>
    <ButtonLogout
    onClick={handleButtonLogout}
      // onClick={async () => {
      //   await dispatch(logOut());
      //   document.location.reload();
      // }}
    >
      <LogoutIcon alt="logout user" src={logout} /> Log Out
    </ButtonLogout>
    {logoutModal && <ModalLogout handler={closeModal} />}
    </>
  )
};
