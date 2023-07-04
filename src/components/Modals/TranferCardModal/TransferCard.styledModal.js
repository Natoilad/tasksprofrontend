import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  transform: translateY(-100%);
  
  }
  to {
    opacity: 1;
  transform: translateY(0);
  }
`;
export const PopUpTransfer = styled.div`
  /* display: flex; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5000;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transferBg};
  border-radius: 8px;
  // outline: 2px solid red;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
  min-width: 135px;
  padding: 18px;
`;

export const PopUpColumnList = styled.ul`
  /* padding: 18px; */
  display: flex;
  flex-direction: column;
`;

export const PopUpListItem = styled.li`
  display: flex;
  width: 100%;
`;
