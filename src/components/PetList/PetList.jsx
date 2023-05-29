import { PetsItem } from "components/PetItem/PetItem";
import { List } from "./PetList.styled";

export const PetsData = ({ pets }) => {
  return (
    <List>
      {pets &&
        pets.map(({ _id, avatarURL, title, birthday, breed, comments }) => {
          return (
            <PetsItem
              key={_id}
              _id={_id}
              name={title}
              photo={avatarURL}
              birthday={birthday}
              breed={breed}
              comments={comments}
            />
          );
        })}
    </List>
  );
};
