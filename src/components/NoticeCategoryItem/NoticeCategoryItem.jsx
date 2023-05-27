import {
  Card,
  Image,
  ContentContainer,
  Content,
  Description,
  LearMoreButton,
  Category,
  AddToFaivoriteButton,
  RemoveFaivoriteButton,
} from './NoticeCategoryItem.styled';
import { ModalLearMore } from './ModalLearnMore';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAutn';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icons from '../../images/icons/notices-category-icon.svg';

export const NoticeCategiriesItem = data => {
  const { image, description, age, city, sex, category } = data;
  const [fill, setFill] = useState(false);
  const [modalDelete, setModelDelete] = useState(false);
  const [showLearMore, setShowLearMore] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    document.body.style.overflow = showLearMore ? 'hidden' : 'scroll';
  }, [showLearMore]);

  const sexIcon = sex === 'male' ? `${Icons}#female` : `${Icons}#male`;

  const handleAdd = () => {
    if (!isLoggedIn) {
      toast("You're not logged in", { type: 'warning' });
    }
  };

  const handleDelete = () => {
    console.log("Delete");
    setModelDelete(true);
  }

  return (
    <>
      <Card>
        <ToastContainer />
        <Image img={image}>
          <Category>{category}</Category>
          <AddToFaivoriteButton filled={fill} onClick={handleAdd}>
            <svg width="20" height="18">
              <use className="icon" href={`${Icons}#like`} />
            </svg>
          </AddToFaivoriteButton>
          <RemoveFaivoriteButton onClick={handleDelete}>
            <svg width="20" height="18">
              <use className="icon" href={`${Icons}#trash`} />
            </svg>
          </RemoveFaivoriteButton>
          <ContentContainer>
            <Content>
              <svg width="18" height="18">
                <use className="icon" href={`${Icons}#location`} />
              </svg>
              {city}
            </Content>
            <Content>
              <svg width="18" height="18">
                <use className="icon" href={`${Icons}#clock`} />
              </svg>
              {age}
            </Content>
            <Content>
              <svg width="18" height="18">
                <use className="icon" href={sexIcon} />
              </svg>
              {sex}
            </Content>
          </ContentContainer>
        </Image>
        <Description>{description}</Description>
        <LearMoreButton onClick={() => setShowLearMore(true)}>
          Lear more
        </LearMoreButton>
      </Card>
      {showLearMore && <ModalLearMore handler={setShowLearMore} data={data} />}
      {modalDelete && <ModalDelete handler={setModelDelete} data={data} /> }
    </>
  );
};
