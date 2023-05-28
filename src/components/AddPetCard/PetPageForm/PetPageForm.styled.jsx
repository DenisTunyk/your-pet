import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  margin: 0 auto;

  width: 280px;
  height: 496px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 458px;
    height: 542px;
  }
`;

export const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 8px 17px;
  width: 100%;
  min-height: 496px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
    padding: 20px 32px;
    width: fit-content;
    min-width: 458px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ step, category }) =>
      step === 2 && category !== 'my-pet' ? '20px 74px' : '20px 32px'};
    width: 542px;
  }
`;

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const AddFormTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  padding-left: 12px;
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black};
`;

export const AddFormList = styled.ul`
  display: flex;
  column-gap: 12px;
  margin-bottom: 16px;
`;

export const AddFormItem = styled.li`
  position: relative;
  padding-bottom: 20px;
  flex-basis: calc((100% - 24px) / 3);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 8px;

    background-color: ${({ theme }) => theme.colors.lightblue};
    border-radius: 8px;
  }

  &.current::after {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  &.completed::after {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export const AddFormStepName = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: 10px;
  line-height: 1.4;

  color: ${({ theme }) => theme.colors.lightblue};

  ${AddFormItem}.current & {
    color: ${({ theme }) => theme.colors.blue};
  }

  ${AddFormItem}.completed & {
    color: ${({ theme }) => theme.colors.green};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.62;
  }
`;

export const AddFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: ${({ category, isMoreInfo }) =>
      category !== 'your-pet' ? 'center' && isMoreInfo : 'end'};
    margin-top: 40px;
    column-gap: 24px;
  }
`;
