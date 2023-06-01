import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButttonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButttonNext';
import { PawPrintIcon } from '../../utils/icons';

import {
  AddFormRadioButton,
  RadioCategoryLabel,
  CategoryWrapper,
} from './ChooseForm.styled';

const ChooseForm = ({ formData, setFormData, nextStep, cancel, setValues }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!formData.category) setIsDisabled(true);
    else setIsDisabled(false);
  }, [formData.category]);

  const handleCategoryChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CategoryWrapper>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="my-pet"
        id="my-pet"
        onChange={handleCategoryChange}
        checked={formData.category === 'my-pet'}
      />
      <RadioCategoryLabel htmlFor="my-pet">Your pet</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="sell"
        id="sell"
        checked={formData.category === 'sell'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="sell">Sell</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="lostFound"
        id="lostFound"
        checked={formData.category === 'lostFound'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="lostFound">Lost/found</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="inGoodHands"
        id="inGoodHands"
        checked={formData.category === 'inGoodHands'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="inGoodHands">In good hands</RadioCategoryLabel>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          isDisabled={isDisabled}
          type="button"
          text="Next"
          icon={<PawPrintIcon />}
          clickHandler={nextStep}
          filled={false}
        />
        <AddFormButtonBack text="Cancel" isLink={true} path={cancel} />
      </AddFormButtonWrapper>
    </CategoryWrapper>
  );
};

ChooseForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  cancel: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  nextStep: PropTypes.func.isRequired,
};

export default ChooseForm;