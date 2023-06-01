import { useState, useEffect, useCallback } from 'react';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addNotice } from 'redux/notices/operations';
import { addMyPet } from 'redux/auth/auth-operations';
import { validatePetSchema } from '../validatePet';

import MoreInfo from '../MoreInfoForm/MoreInfoForm';
import ChooseForm from '../ChooseForm/ChooseForm';
import PersonalForm from '../PersonalForm/PersonalForm';
import Modal from '../../../components/Modal/Modal';
import AddPetModal from '../AddPetModal/AddPetModal';

import { selectIsLoading } from 'redux/auth/auth-selectors';
import { selectNoticesIsLoading } from 'redux/notices/selectors';

import {
  AddForm,
  AddFormTitle,
  AddFormList,
  AddFormItem,
  AddFormStepName,
  AddFormWrapper,
  Container,
} from './PetPageForm.styled';

const AddPetPageForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    title: '',
    birthday: '',
    breed: '',
    location: '',
    comments: '',
    petPhoto: null,
    sex: '',
    price: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAddMyPetLoading = useSelector(selectIsLoading);
  const isAddPetLoading = useSelector(selectNoticesIsLoading);
  const isLoading = isAddMyPetLoading || isAddPetLoading;

  const getPageTitle = useCallback(() => {
    if (step < 1) return 'Add Pet';

    const titles = {
      'my-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lostFound': 'Add to lost or found pet',
      'inGoodHands': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
    };
    return titles[formData.category] || 'Add Pet';
  }, [formData.category, step]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const setClassName = index => {
    if (index > step) return '';
    if (index < step) return 'completed';
    return 'current';
  };

  const handleNextClick = e => {
    setStep(prevState => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  const handleSubmit = async () => {
    if (!formData.category) return;

    const newFormData = new FormData();

    newFormData.set('name', formData.name);
    newFormData.set('birthday', formData.birthday);
    newFormData.set('breed', formData.breed);


    if (formData.comments) {
      newFormData.set('comments', formData.comments);
    }

    if (formData.category === 'my-pet') {
      newFormData.set('image', formData.petPhoto);
      dispatch(addMyPet(newFormData));
      toggleModal();
      return;
    }

    newFormData.set('title', formData.title);
    newFormData.set('sex', formData.sex);
    newFormData.set('location', formData.location);

    if (formData.category === 'lostFound') {
      newFormData.set('image', formData.petPhoto);
      dispatch(addNotice({ category: 'lostFound', newFormData }));
      toggleModal();
      return;
    }

    if (formData.category === 'inGoodHands') {
      newFormData.set('image', formData.petPhoto);
      dispatch(addNotice({ category: 'inGoodHands',newFormData }));
      toggleModal();
      return;
    }
    
    if (formData.category === 'sell') {
      newFormData.append('price', formData.price);
      newFormData.set('image', formData.petPhoto);
      dispatch(addNotice({ category: formData.category, newFormData }));
      toggleModal();
    }
  };

  return (
    <Container>
      <AddFormWrapper step={step} category={formData.category}>
        <AddFormTitle>{title}</AddFormTitle>
        <AddFormList>
          {steps.map((stepName, index) => (
            <AddFormItem key={index} className={setClassName(index)}>
              <AddFormStepName>{stepName}</AddFormStepName>
            </AddFormItem>
          ))}
        </AddFormList>
        <Formik
          initialValues={formData}
          validationSchema={validatePetSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
        >
          {() => (
            <AddForm autoComplete="on">
              {step === 0 && (
                <ChooseForm
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={handleNextClick}
                  cancel={backLink}
                />
              )}
              {step === 1 && (
                <PersonalForm
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={handleNextClick}
                  backStep={handlePrevClick}
                />
              )}
              {step === 2 && (
                <MoreInfo
                  formData={formData}
                  setFormData={setFormData}
                  backStep={handlePrevClick}
                  submit={handleSubmit}
                />
              )}
            </AddForm>
          )}
        </Formik>
        {isModalOpen && !isLoading && (
          <Modal toggleModal={() => navigate(backLink)}>
            <AddPetModal backLink={backLink} />
          </Modal>
        )}
      </AddFormWrapper>
    </Container>
  );
};

export default AddPetPageForm;
