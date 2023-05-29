// import { useDeleteUserPetMutation } from 'redux/pet/userPetsApi';

import { PetItem, PetImage, ListPets, Title, Content, DeleteButton } from './PetItem.styled';

import { ReactComponent as Trash } from '../../assets/icon/trash-2.svg';

export const PetsItem = ({ _id, photo, name, birthday, breed, comments }) => {
  //  const [deletePet] = useDeleteUserPetMutation();
  console.log(photo);
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
        <DeleteButton>
          <Trash />
        </DeleteButton>
        </Content>
        {/* <DeleteBtn onClick={() => deletePet(_id)}> */}
        {/* </DeleteBtn> */}
      </PetItem>
    </>
  );
};
