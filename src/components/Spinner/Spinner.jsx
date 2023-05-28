import { Rings } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Rings
        height="150"
        width="150"
        color="#54ADFF"
        radius="10"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </SpinnerWrapper>
  );
};
