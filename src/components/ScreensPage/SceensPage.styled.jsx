import styled from 'styled-components';
import backgrounds from '../../images/bgFolder/backgrounds.json';

const mobile = props => {
  const id = props.board.background[0];
  const result = backgrounds.find(background => background._id === id);
  return result.mobile;
};

const tablet = props => {
  const id = props.board.background[0];
  const result = backgrounds.find(background => background._id === id);
  return result.tablet;
};

const desktop = props => {
  const id = props.board.background[0];
  const result = backgrounds.find(background => background._id === id);
  return result.desktop;
};

export const Container = styled.div`
  padding: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 92vh;
  background-image: url(${mobile});

  @media (min-width: 768px) {
    background-image: url(${tablet});
  }
  @media (min-width: 1280px) {
    background-image: url(${desktop});
  }
`;
//  background-image: ${props => console.log(props)};

// const trueBackground = backgrounds.find(
//   background => background._id === props.board.background[0]
// );
// return `url(${trueBackground.desktop})`;

//  `url(${props.desktop})`;

// background: url(${props => props.desktop});
// background: ${props => `url(${props.desktop})`};
// background-image: url(${background.desktop});

//  ${({ props }) => {
//     switch (props) {
//       case 'desktop':
//         return `background: url(${props.desktop})`;
//       case 'tablet':
//         return `background: url(${props.tablet})`;
//       case 'mobile':
//         return `background: url(${props.mobile})`;

//       default:
//         return;
//     }
// }
// }

// ${({ priority }) => {
//       switch (priority) {
//         case 'none':
//           return `background: ${white30}`;
//         case 'low':
//           return `background: ${lowPriority}`;
//         case 'medium':
//           return `background: ${mediumPriority}`;
//         case 'high':
//           return `background: ${highPriority}`;
//         default:
//           return;
//       }
//     }}

//  background-image: url:(${props => {
//    switch (props) {
//      case props === 'desktop':
//        return props.desktop;

//      case 'tablet':
//        return props.tablet;

//      case 'mobile':
//        return props.mobile;

//      default:
//        return props.desktop;
//    }
//  }});
// @media (min-width: 768px) {
//   margin-top: 26px;
//   margin-bottom: 26px;
//   padding-left: 32px;
//   padding-right: 32px;
// }

// @media (min-width: 1280px) {
//   margin-top: 10px;
//   margin-bottom: 10px;
//   padding-left: 24px;
//   padding-right: 24px;
// }
