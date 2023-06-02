import { NoticeCategiriesItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { CardContainer } from './NoticesCategoriesList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/pets/pets-selectors';
import { useEffect, useState } from 'react';
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
import Pagination from '../Pagination/Pagination';

export const NoticeCategiriesList = ({ search }) => {
  const dispatch = useDispatch();
  const category = useSelector(getCategories);
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectNoticesIsLoading);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

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
      } else {
        switch (category) {
          case 'favoriteAdds':
            await dispatch(getFavoriteNotices({}));
            break;
          case 'myAds':
            await dispatch(getMyAdsNotices({}));
            break;
          default:
            await dispatch(getNotices(category));
            break;
        }
      }
    };

    fetchNotices();
  }, [category, dispatch, search]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = notices.slice(startIndex, endIndex);

  const totalPages = Math.ceil(notices.length / itemsPerPage);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : currentPageItems.length > 0 ? (
        <>
          <CardContainer>
            {currentPageItems.map(notice => (
              <NoticeCategiriesItem key={notice._id} {...notice} />
            ))}
          </CardContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <DefaultText>Ads not found</DefaultText>
      )}
    </>
  );
};
