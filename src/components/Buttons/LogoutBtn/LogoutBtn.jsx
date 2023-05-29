import logout from '../../../assets/icon/logout.svg';
import { LogoutIcon, ButtonLogout } from './LogoutBtn.style';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useState } from 'react';
export const LogoutBtn = () => {
  const [logoutModal, setLogoutModal] = useState(false);

  const handleButtonLogout = () => {
    setLogoutModal(true);
  };

  const closeModal = () => {
    setLogoutModal(false);
  };

  return (
    <>
      <ButtonLogout onClick={handleButtonLogout}>
        <LogoutIcon alt="logout user" src={logout} /> Log Out
      </ButtonLogout>
      {logoutModal && <ModalLogout handler={closeModal} />}
    </>
  );
};
