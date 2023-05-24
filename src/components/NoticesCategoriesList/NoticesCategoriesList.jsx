
import { NoticeCategiriesItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { CardContainer } from './NoticesCategoriesList.styled';

export const NoticeCategiriesList = () => {
  const list = [
    {
      id: 1,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'female',
      description: 'Cute cat looking for a home',
      category: 'in good hands',
    },
    {
      id: 2,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'in good hands',
    },
    {
      id: 3,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'sell',
    },
    {
      id: 4,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'sell',
    },
    {
      id: 5,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'lost/found',
    },
    {
      id: 6,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'sell',
    },
    {
      id: 7,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'in good hands',
    },
    {
      id: 8,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'sell',
    },
    {
      id: 9,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'lost/found',
    },
    {
      id: 10,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'sell',
    },
    {
      id: 11,
      image: 'Rectangle214.jpg',
      city: 'Lviv',
      age: '1 year',
      sex: 'male',
      description: 'Cute cat looking for a home',
      category: 'lost/found',
    },
  ];

  return (
    <CardContainer>
      {list.map(pet => (
        <NoticeCategiriesItem key={pet.id} {...pet} />
      ))}
    </CardContainer>
  );
};
