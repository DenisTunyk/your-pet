import { Backgraund, Page, Container, Title, Gif } from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <Backgraund>
        <Page>
          <Container>
            <Title>Take good care of your small pets</Title>
          </Container>
          <Gif frameBorder="0" allowFullScreen />
        </Page>
      </Backgraund>
    </>
  );
};

export default Hero;
