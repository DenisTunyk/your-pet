import { useEffect } from 'react';
import {
  ModalContainer,
  ModalWindow,
  Info,
  Description,
  ContactInfo,
  Contact,
  Contactheader,
  ContactContent,
  Comment,
  ContactButtons,
  ContactButtonAdd,
  ContactButtonContact,
  Image,
  Category,
  CloseButton,
} from './ModalLearnMore.styled';
import Icons from '../../images/icons/notices-category-icon.svg';
import { useSelector } from 'react-redux';

export const ModalLearMore = ({ handler, data, handleAdd }) => {
  const categories = useSelector(state => state.notices.category);

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

  return (
    <ModalContainer>
      <ModalWindow>
        <CloseButton onClick={() => handler(false)}>
          <svg width="20" height="18">
            <use href={`${Icons}#close`} />
          </svg>
        </CloseButton>
        <Info>
          <Image img={data.avatarURL}>
            <Category> {categories[data.category]}</Category>
          </Image>
          <ContactInfo>
            <Description>{data.description || 'Cute dog looking for a home'}</Description>
            <Contact>
              <Contactheader>
                <div>Name:</div>
                <div>Birthday:</div>
                <div>Breed:</div>
                <div>Place:</div>
                <div>The sex:</div>
                {data.email && <div>Email:</div>}
                {data.phone && <div>Phone:</div>}
              </Contactheader>
              <ContactContent>
                <div>{data.name || data.title}</div>
                <div>{data.birthday}</div>
                <div>{data.breed}</div>
                <div>{data.location}</div>
                <div>{data.sex}</div>
                {data.email && <div>{data.email}</div>}
                {data.phone && <div>{data.phone}</div>}
              </ContactContent>
            </Contact>
          </ContactInfo>
        </Info>
        <Comment>
          <b>Comments:</b> {data.comments}
        </Comment>
        <ContactButtons>
          <ContactButtonAdd onClick={handleAdd}>
            <span>Add to</span>
            <svg width="20" height="18">
              <use className="icon" href={`${Icons}#like`} />
            </svg>
          </ContactButtonAdd>
          {data.phone && <ContactButtonContact>Contact</ContactButtonContact>}
        </ContactButtons>
      </ModalWindow>
    </ModalContainer>
  );
};
