import styled from 'styled-components';

export const PetItem = styled.li`
  width: 100%;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: #fff;
  border-radius: 20px;
  @media (min-width: 768px) {
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 30px;
    border-radius: 40px;
  }
`;
export const PetImage = styled.div`
  background-color: lightgrey;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;

  width: 240px;
  height: 240px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 128px;
    height: 128px;
  }

  @media (min-width: 1280px) {
    width: 160px;
    height: 160px;
    border-radius: 40px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;

  @media (min-width: 768px) {
    top: 4px;
    right: 4px;
  }
`;
export const ListPets = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 12px;
`;

export const Title = styled.div`
  font-family: 'Manrope';
  font-weight: 400;

  letter-spacing: 0.04;
  color: #000;
  font-size: 14px;
  line-height: 22px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    color: #111111;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;
