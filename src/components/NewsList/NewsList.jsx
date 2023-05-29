import { List, Title, Wrapper } from './NewsList.styled';
import NewsItem from '../NewsItem/NewsItem';

export const NewsList = () => {
  return (
    <>
      <Title>News</Title>
      <Wrapper>
        <List>
          <NewsItem />
        </List>
      </Wrapper>
    </>
  );
};
export default NewsList;
