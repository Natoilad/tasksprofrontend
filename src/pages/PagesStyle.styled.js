import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  // height: 100vh;
  // width: 100%;
  // max-width: 812px;
  // @media (min-width: 768px) {
  //   max-width: 1080px;

  //   @media (min-width: 1280px) {
  //     max-width: 1440px;
  //   }
  // }
`;

export const Box = styled.div`
  width: 100%;
  // height: 100%;
  // min-width: 1020px;
  background-color: ${({ theme }) => theme.colors.pageBg};
  position: relative;
`;
