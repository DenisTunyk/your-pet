import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  font-size: 70px;
  margin-top: 40px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  animation: blur 0.75s ease-out infinite;
  text-shadow: 0px 0px 5px #54adff, 0px 0px 7px #54adff;

  @keyframes blur {
    from {
      text-shadow: 0px 0px 10px #54adff, 0px 0px 10px #fff, 0px 0px 25px #54adff,
        0px 0px 25px #54adff, 0px 0px 25px #54adff, 0px 0px 25px #54adff,
        0px 0px 25px #54adff, 0px 0px 25px #54adff, 0px 0px 50px #54adff,
        0px 0px 50px #54adff, 0px 0px 50px #7b96b8, 0px 0px 150px #7b96b8,
        0px 10px 100px #7b96b8, 0px 10px 100px #7b96b8, 0px 10px 100px #7b96b8,
        0px 10px 100px #7b96b8, 0px -10px 100px #7b96b8, 0px -10px 100px #7b96b8;
    }
  }
`;
