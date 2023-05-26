import { Rings } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Rings
        height="80"
        width="80"
        color="#54ADFF"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </SpinnerWrapper>
  );
};
