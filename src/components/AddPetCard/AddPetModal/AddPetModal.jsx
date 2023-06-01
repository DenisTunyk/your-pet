import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectNoticesError } from 'redux/notices/selectors';
import { selectError } from 'redux/auth/auth-selectors';

import AddFormButtonBack from '../AddFormButton/AddFormButttonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButttonNext';
import { PawPrintIcon } from '../../utils/icons';
import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import { AddFormModalWrapper } from './AddPetModal.styled';

const AddPetModal = ({ backLink }) => {
  const navigate = useNavigate();
  const addMyPetError = useSelector(selectError);
  const addPetError = useSelector(selectNoticesError);
  const isError = Boolean(addMyPetError) || Boolean(addPetError);
  const text = isError
    ? 'Something went wrong, please try again.'
    : 'Pet was successfully added!';

  // console.log({ isError });

  return (
    <AddFormModalWrapper>
      <p>{text}</p>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          type="button"
          text="Go to profile"
          icon={<PawPrintIcon />}
          clickHandler={() => {
            navigate('/profile');
          }}
          filled={false}
          isDisabled={false}
        />
        <AddFormButtonBack
          type="button"
          clickHandler={() => navigate(backLink)}
          text="Back"
          isLink={false}
        />
      </AddFormButtonWrapper>
    </AddFormModalWrapper>
  );
};

export default AddPetModal;
