import styled from 'styled-components';
import backgrounds from '../../images/bgFolder/backgrounds.json';

const mobile = props => {
  const id = props.board.background[0];
  const result = backgrounds.find(background => background._id === id);
  if (!result) {
    return;
  }
  return result.mobile;
};

const tablet = props => {
  const id = props.board.background[0];
  const result = backgrounds.find(background => background._id === id);
  if (!result) {
    return;
  }
  return result.tablet;
};

const desktop = props => {
  const id = props.board.background[0];
  const result = backgrounds.find(background => background._id === id);
  if (!result) {
    return;
  }
  return result.desktop;
};

export const Container = styled.div`
  padding: 10px;
  max-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 92%;
  background-image: url(${mobile});

  @media (min-width: 768px) {
    background-image: url(${tablet});
  }
  @media (min-width: 1280px) {
    background-image: url(${desktop});
  }
`;
