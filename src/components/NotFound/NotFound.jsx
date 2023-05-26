import { NFText, NFImg, NFDivWrap, Button, PawIcon } from './NotFound.styled';
import { Link } from 'react-router-dom';

export const NotFound = ({ handleLinkClick }) => {
  // const handleClick = () => {
  //   if (handleLinkClick) {
  //     handleLinkClick();
  //   }
  // };
  return (
    <>
      <NFDivWrap>
        <NFText>Oops! This page not found...</NFText>
        <NFImg />
        {/* <Button type="submit"> */}
        <Button>
          <Link to="./">To main page</Link>
          <PawIcon />
        </Button>
      </NFDivWrap>
    </>
  );
};
