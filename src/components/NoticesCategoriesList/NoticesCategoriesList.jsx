import { NoticeCategiriesItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { CardContainer } from './NoticesCategoriesList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/pets/pets-selectors';
import { useEffect } from 'react';
import { getNotices, getNoticesByQuery } from 'redux/notices/operations';
import { selectNotices } from 'redux/notices/selectors';

export const NoticeCategiriesList = ({ search }) => {
  const dispatch = useDispatch();
  const category = useSelector(getCategories);
  const notices = useSelector(selectNotices);

  useEffect(() => {
    const fetchNotices = async () => {
      if (search) {
        switch (category) {
          case 'favoriteAdds':
            // await dispatch(searchFavorite(search));
            break;
          case 'myAds':
            // await dispatch(searchMyPets(search));
            break;
          default:
            await dispatch(getNoticesByQuery({ category, search }));
            break;
        }
      }

      if (!search) {
        switch (category) {
          case 'favoriteAdds':
            // await dispatch(getFavoritesNotices());
            break;
          case 'myAds':
            // await dispatch(getMyNotices());
            break;
          default:
            await dispatch(getNotices({ category }));

            break;
        }
      }
    };

    fetchNotices();
  }, [category, dispatch, search]);

  return (
    <CardContainer>
      {notices.map(notice => (
        <NoticeCategiriesItem key={notice._id} {...notice} />
      ))}
    </CardContainer>
  );
};
