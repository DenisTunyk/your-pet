// import { useDeleteUserPetMutation } from 'redux/pet/userPetsApi';

import {
  PetItem,
  PetImage,
  ListPets,
  ListInfoItem,
  // DeleteBtn,
  Title,
} from './PetsItem.styled';

import { ReactComponent as Trash } from '../../assets/icon/trash-2.svg';

export const PetsItem = ({ _id, photo, name, birthday, breed, comments }) => {
  //  const [deletePet] = useDeleteUserPetMutation();

  return (
    <>
      <PetItem key={_id} id={_id}>
        <PetImage src={photo} alt={name} />
        <ListPets>
          {/* <ListItem>
            <Title>Name:</Title> {name}
            
          </ListItem>
          <ListItem>
            <Title>Date of birth:</Title> {birthday}
          </ListItem>
          <ListItem>
            <Title>Breed:</Title> {breed}
          </ListItem> */}
          <ListInfoItem>
            <Title>Comments:</Title> {comments}
          </ListInfoItem>
        </ListPets>

        {/* <DeleteBtn onClick={() => deletePet(_id)}> */}
        <Trash />
        {/* </DeleteBtn> */}
      </PetItem>
    </>
  );
};
