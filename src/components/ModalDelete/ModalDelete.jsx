import { useEffect } from 'react';
import {
  ModalContainer,
  ModalWindow,
  CloseButton,
} from './ModalDelete.styled.js';
import './ModalDelete.css'
import Icons from '../../images/icons/notices-category-icon.svg'

export const ModalDelete = ({ handler, handleDelete, data }) => {
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

  return (
    <ModalContainer>
      <ModalWindow>
        <CloseButton onClick={() => handler(false)}>
          <svg width="20" height="18">
            <use href={`${Icons}#close`} />
          </svg>
        </CloseButton>
        <div className='questionContainer'>
          <span className='questionTitle'>Delete adverstiment?</span>
          <p className='questionBody'>Are you sure you want to delete<b> “{data.description}”</b>?<br/>You can`t undo this action.</p>
          <div className='questionController'>
            <button className='answerNegative' onClick={() => handler(false)}>Cancel</button>
            <button className='answerPositive' onClick={handleDelete}>Yes          
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 4V16C15 17.1046 14.1046 18 13 18H5C3.89543 18 3 17.1046 3 16V4M12 4V3C12 1.89543 11.1046 1 10 1H8C6.89543 1 6 1.89543 6 3V4M1 4H17M7 8V14M11 8V14" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </ModalWindow>
    </ModalContainer>
  );
};

export default ModalDelete;