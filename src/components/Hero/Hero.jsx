import {
  Backgraund,
  Page,
  Container,
  Title,
  Gif,
  Wrapper,
} from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <Backgraund>
        <Container>
          <Title>Take good care of your small pets</Title>
        </Container>
        <Wrapper>
          <Page />
          <Gif frameBorder="0" allowFullScreen />
        </Wrapper>
      </Backgraund>
    </>
  );
};

export default Hero;
