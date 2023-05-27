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
                <div>Name:</div><div>{data.name}</div>
                <div>Birthday:</div><div>{data.age}</div>
                <div>Breed:</div><div>{data.breed}</div>
                <div>Place:</div><div>{data.location}</div>
                <div>The sex:</div><div>{data.sex}</div>
                <div>Email:</div><div>{data.name}</div>
                <div>Phone:</div><div>{data.name}</div>
              </Contactheader>
            </Contact>
          </ContactInfo>
        </Info>
        <Comment>
          <b>Comments:</b> Rich would be the perfect addition to an active
          family that loves to play and go on walks. I bet he would love having
          a doggy playmate too!
        </Comment>
        <ContactButtons>
          <ContactButtonAdd>
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
