import { PetItem, PetImage, ListPets, Title, Content, DeleteButton } from './PetItem.styled';

import { ReactComponent as Trash } from '../../assets/icon/trash-2.svg';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/pets/operations';

export const PetsItem = ({ _id, photo, name, birthday, breed, comments }) => {
  const dispatch = useDispatch();

  return (
    <>
      <PetItem key={_id}>
        <PetImage src={photo} />
        <Content>
          <ListPets>
            <Title><b>Name:</b> {name}</Title> 
            <Title><b>Date of birth:</b> {birthday}</Title> 
            <Title><b>Breed:</b> {breed}</Title> 
            <Title><b>Comments:</b> {comments}</Title> 
          </ListPets>
        <DeleteButton onClick={() => dispatch(deletePet(_id))}>
          <Trash />
        </DeleteButton>
        </Content>
      </PetItem>
    </>
  );
};
