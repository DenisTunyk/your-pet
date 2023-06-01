import {
  Card,
  Image,
  ContentContainer,
  Content,
  Description,
  LearnMoreButton,
  Category,
  AddToFaivoriteButton,
  RemoveFaivoriteButton,
  WrapFuterCard,
} from './NoticeCategoryItem.styled';
import { ModalLearMore } from './ModalLearnMore';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icons from '../../images/icons/notices-category-icon.svg';
import { useDispatch } from 'react-redux';
import { addFavoriteNotice, removeNotice } from 'redux/notices/operations';

export const NoticeCategiriesItem = data => {
  const {
    _id,
    avatarURL,
    age,
    location,
    sex,
    category,
    favorites = [],
    title,
    owner,
  } = data;
  const [modalDelete, setModelDelete] = useState(false);
  const [showLearMore, setShowLearMore] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const isFavorite = favorites.some(userId => userId === user.id);
  const dispatch = useDispatch();
  const isOwnerNotice = user.id === owner;

  useEffect(() => {
    document.body.style.overflow = showLearMore ? 'hidden' : 'scroll';
  }, [showLearMore]);

  const sexIcon = sex === 'male' ? `${Icons}#female` : `${Icons}#male`;

  const handleAdd = () => {
    if (!isLoggedIn) {
      toast("You're not logged in", { type: 'warning' });
    } else {
      dispatch(addFavoriteNotice({ _id }));
    }
  };

  const handleDelete = () => {
    dispatch(removeNotice(_id));
    setModelDelete(true);
  };

  return (
    <>
      <Card>
        <ToastContainer />
        <Image img={avatarURL}>
          <Category>{category}</Category>
          <AddToFaivoriteButton filled={isFavorite} onClick={handleAdd}>
            <svg width="20" height="18">
              <use className="icon" href={`${Icons}#like`} />
            </svg>
          </AddToFaivoriteButton>
          {isOwnerNotice && (
            <RemoveFaivoriteButton onClick={handleDelete}>
              <svg width="20" height="18">
                <use className="icon" href={`${Icons}#trash`} />
              </svg>
            </RemoveFaivoriteButton>
          )}
          <ContentContainer>
            <Content>
              <svg width="18" height="18">
                <use className="icon" href={`${Icons}#location`} />
              </svg>
              {location}
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
        <WrapFuterCard>
          <Description>{title}</Description>
          <LearnMoreButton onClick={() => setShowLearMore(true)}>
            Learn more
          </LearnMoreButton>
        </WrapFuterCard>
      </Card>
      {showLearMore && <ModalLearMore handler={setShowLearMore} handleAdd={handleAdd} data={data} />}
      {modalDelete && <ModalDelete handler={setModelDelete} data={data} />}
    </>
  );
};
