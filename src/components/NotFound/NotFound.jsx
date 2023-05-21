import { NFText, NFImg, NFDivWrap,Button, PawIcon} from './NotFound.styled';


export const NotFound = () => {
  return (
    <>
      <NFDivWrap>
      <NFText>Oops! This page not found...</NFText>
        <NFImg />
              <Button type="submit">To main page<PawIcon />
              </Button>
      </NFDivWrap>
    </>
  );
};
