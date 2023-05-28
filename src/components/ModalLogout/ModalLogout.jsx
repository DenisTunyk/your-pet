import { useEffect } from 'react';
import {
  ModalContainer,
  ModalWindow,
  CloseButton,
} from '../ModalLogout/ModalLogout.styled.js';
import './ModalLogout.css'
import Icons from '../../images/icons/notices-category-icon.svg'

async function actionLogout(token) {
  const url = `https://project-7-backend.onrender.com/users/logout`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
}

export const ModalLogout = ({ handler, data }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        handler(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handler]);

  // щоб не їздив задній фон
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  const handleLogout = () => {
    const auth = JSON.parse(localStorage.getItem("persist:auth"));
    const token = auth.token.replace(/['"]+/g, '');
    actionLogout(token);
    handler(false);
  };

  return (
    <ModalContainer>
      <ModalWindow>
        <CloseButton onClick={() => handler(false)}>
          <svg width="20" height="18">
            <use href={`${Icons}#close`} />
          </svg>
        </CloseButton>
        <div className='questionContainer'>
          <span className='questionTitle'>Already leaving?</span>
          <div className='questionController'>
            <button className='logoutAnswerNegative' onClick={() => handler(false)}>Cancel</button>
            <button className='logoutAnswerPositive' onClick={handleLogout}>Yes          
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L16 1C17.1046 1 18 1.89543 18 3V15C18 16.1046 17.1046 17 16 17H12M1 9L13 9M1 9L5 5M1 9L5 13" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>            
            </button>
          </div>
        </div>
      </ModalWindow>
    </ModalContainer>
  );
};

export default ModalLogout;