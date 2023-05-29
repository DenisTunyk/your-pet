import { NoticeCategiriesItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { CardContainer } from './NoticesCategoriesList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/pets/pets-selectors';
import { useEffect } from 'react';
import {
  getFavoriteNoticesByQuery,
  getNotices,
  getNoticesByQuery,
  getMyAdsNotices,
  getMyAdsNoticesByQuery,
} from 'redux/notices/operations';
import { selectNotices } from 'redux/notices/selectors';
import { getFavoriteNotices } from 'redux/notices/operations';
import { selectNoticesIsLoading } from 'redux/notices/selectors';

import { Spinner } from 'components/Spinner/Spinner';
import { DefaultText } from 'components/DefaultText/DefaultText';

export const NoticeCategiriesList = ({ search }) => {
  const dispatch = useDispatch();
  const category = useSelector(getCategories);
  const notices = useSelector(selectNotices);

  const isLoading = useSelector(selectNoticesIsLoading);

  useEffect(() => {
    const fetchNotices = async () => {
      if (search) {
        switch (category) {
          case 'favoriteAdds':
            await dispatch(getFavoriteNoticesByQuery(search));
            break;
          case 'myAds':
            await dispatch(getMyAdsNoticesByQuery(search));
            break;
          default:
            await dispatch(getNoticesByQuery({ category, search }));
            break;
        }
      }

      if (!search) {
        switch (category) {
          case 'favoriteAdds':
            await dispatch(getFavoriteNotices({}));
            break;
          case 'myAds':
            await dispatch(getMyAdsNotices({}));
            // await dispatch(getUsersNotices({}));
            break;
          default:
            await dispatch(getNotices(category));

            break;
        }
      }
    };

    fetchNotices();
  }, [category, dispatch, search]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : notices.length > 0 ? (
        <CardContainer>
          {notices.map(notice => (
            <NoticeCategiriesItem key={notice._id} {...notice} />
          ))}
        </CardContainer>
      ) : (
        <DefaultText>Ads not found</DefaultText>
      )}
    </>
  );
};
