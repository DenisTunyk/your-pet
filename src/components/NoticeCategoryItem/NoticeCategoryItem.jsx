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
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAutn';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icons from '../../images/icons/notices-category-icon.svg';
import { useDispatch } from 'react-redux';
import { addFavoriteNotice } from 'redux/notices/operations';

export const NoticeCategiriesItem = data => {
  let { avatarURL, name, age, location, sex, category, favorite } = data;
  const [showLearMore, setShowLearMore] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    document.body.style.overflow = showLearMore ? 'hidden' : 'scroll';
  }, [showLearMore]);

  const sexIcon = sex === 'male' ? `${Icons}#female` : `${Icons}#male`;

  const handleAdd = () => {
    if (!isLoggedIn) {
      toast("You're not logged in", { type: 'warning' });
    } else {
      dispatch(addFavoriteNotice(data));
    }
  };

  return (
    <>
      <Card>
        <ToastContainer />
        <Image img={avatarURL}>
          <Category>{category}</Category>
          <AddToFaivoriteButton filled={favorite} onClick={handleAdd}>
            <svg width="20" height="18">
              <use className="icon" href={`${Icons}#like`} />
            </svg>
          </AddToFaivoriteButton>
          <RemoveFaivoriteButton onClick={handleAdd}>
            <svg width="20" height="18">
              <use className="icon" href={`${Icons}#trash`} />
            </svg>
          </RemoveFaivoriteButton>
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
        <Description>{name}</Description>
        <LearMoreButton onClick={() => setShowLearMore(true)}>
          Lear more
        </LearMoreButton>
      </Card>
      {showLearMore && <ModalLearMore handler={setShowLearMore} data={data} />}
    </>
  );
};
