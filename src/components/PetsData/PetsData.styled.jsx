import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
`;

export const StyledWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom: 31px;

  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const Pictures = styled.div`
  width: 280px;

  border-radius: 40px;
  padding: 16px 20px 40px 20px;
  margin-bottom: 22px;
  color: rgba(17, 17, 17, 1);
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 821px;
    padding: 20px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;

  background: #54adff;
  border-radius: 40px;
  color: white;

  width: 129px;
  height: 40px;
  margin-left: auto;

  border: none;

  &:hover,
  &:focus {
    box-shadow: 2px 2px 4px #456a8e84;
    transform: scale(1.05);
  }
`;

export const LoaderUser = styled.div`
  display: flex;
  justify-content: space-around;
`;
