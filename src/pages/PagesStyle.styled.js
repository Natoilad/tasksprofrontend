import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  /* height: 100vh; */
`;

export const Box = styled.div`
  width: 100%;
  min-width: 1020px;
  background-color: ${({ theme }) => theme.colors.pageBg};
  position: relative;
`;
