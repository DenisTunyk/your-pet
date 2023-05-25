import { Backgraund, Page, Container, Title, Gif } from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <Backgraund>
        <Page>
          <Container>
            <Title>Take good care of your small pets</Title>
          </Container>
        </Page>
        <Gif frameBorder="0" allowFullScreen />
      </Backgraund>
    </>
  );
};

export default Hero;
