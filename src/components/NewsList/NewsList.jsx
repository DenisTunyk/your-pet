import { nanoid } from "nanoid";
import { List } from './NewsList.styled';
import NewsItem from '../NewsItem/NewsItem';

export default function NewsList ({ data }) {

    return (
        <>
        <List>
            {data?.map(({title, url, date, imgUrl, text}) => (
                <NewsItem
                  key={nanoid()}
                  title={title}
                  url={url}
                  text={text}
                  date={date}
                  imgUrl={imgUrl}
                />
            ))}
        </List>
        </>
    );
}