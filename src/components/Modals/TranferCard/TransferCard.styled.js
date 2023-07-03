import styled from 'styled-components';

export const PopUpTransfer = styled.div`
${prop => {
  if (!prop.isOpen) {
    return `display: none;`;
  }
  return `display: flex;`;
}}
position: absolute;
top: -100px;
left: -30px;
z-index: 5000;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.cardBg}
border-radius: 8px;
outline: 2px solid red;
box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
`;

export const PopUpColumnList = styled.ul`
  padding: 18px;
  display: flex;
  flex-direction: column;
`;

export const PopUpListItem = styled.li`
  display: flex;
  width: 100%;
`;

export const PopUpItemName = styled.p`
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;
`;

export const PopUpItemBtn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
`;

export const IconSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.secondaryText};
`;
