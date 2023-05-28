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
import Icons from '../../images/icons/notices-category-icon.svg'

async function addToFavorite(noticeId, token) {
  const url = `https://project-7-backend.onrender.com/api/notices/favorite/${noticeId}`;
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
}

export const ModalLearMore = ({ handler, data }) => {
  console.log("data", data);
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


  const handleAddToFavorite = (noticeId) => {
      addToFavorite(noticeId)
  }

  return (
    <ModalContainer onClick={() => handler(false)}>
      <ModalWindow>
        <CloseButton onClick={() => handler(false)}>
          <svg width="20" height="18">
            <use href={`${Icons}#close`} />
          </svg>
        </CloseButton>
        <Info>
          <Image img={data.image}>
            <Category> {data.category}</Category>
          </Image>
          <ContactInfo>
            <Description>{data.description}</Description>
            <Contact>
              <Contactheader>
                <div>Name:</div>
                <div>Birthday:</div>
                <div>Breed:</div>
                <div>Place:</div>
                <div>The sex:</div>
                <div>Email:</div>
                <div>Phone:</div>
              </Contactheader>
              <ContactContent>
                <div>{data.name}</div>
                <div>{data.age}</div>
                <div>{data.breed}</div>
                <div>{data.location}</div>
                <div>{data.sex}</div>
                <div>{data.name}</div>
                <div>{data.name}</div>
              </ContactContent>
            </Contact>
          </ContactInfo>
        </Info>
        <Comment>
          <b>Comments:</b> Rich would be the perfect addition to an active
          family that loves to play and go on walks. I bet he would love having
          a doggy playmate too!
        </Comment>
        <ContactButtons>
          <ContactButtonAdd onClick={() => handleAddToFavorite(data.id)}>
            <span>Add to</span>
            <svg width="20" height="18">
              <use className="icon" href={`${Icons}#like`} />
            </svg>
          </ContactButtonAdd>
          <ContactButtonContact>Contact</ContactButtonContact>
        </ContactButtons>
      </ModalWindow>
    </ModalContainer>
  );
};
