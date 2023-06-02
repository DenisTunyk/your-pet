import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import logout from '../../../assets/icon/logout.svg';
import { LogoutIcon, ButtonLogout } from './LogoutBtn.style';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useState } from 'react';
export const LogoutBtn = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  const [congratsModal, setCongratsModal] = useState(true);
  const firstVisit = JSON.parse(sessionStorage.getItem("firtsvisit"));

  const [congrats] = useState(firstVisit ? firstVisit.is_first : false);

  const handleButtonLogout = () => {
    setLogoutModal(true);
  };

  const closeModal = () => {
    setLogoutModal(false);
  };

  const closeModalCongrats = () => {
    setCongratsModal(false);
  };

  return (
    <>
      <ButtonLogout onClick={handleButtonLogout}>
        <LogoutIcon alt="logout user" src={logout} /> Log Out
      </ButtonLogout>
      {logoutModal && <ModalLogout handler={closeModal} />}
      {congratsModal && congrats && <ModalCongrats handler={closeModalCongrats} />}
    </>
  );
};
