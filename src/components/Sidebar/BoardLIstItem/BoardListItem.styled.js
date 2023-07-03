import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darkGray } from 'variables/variables';

export const BoardItem = styled(NavLink)`
  /* background-color: ${darkGray}; */
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  /* padding: 20px 24px; */
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.barSecondaryText};
  margin: 0px -24px;
  gap: 8px;
`;

// export const BoardHero = styled.div`
//   display: flex;
//   gap: 8px;
//   text-align: center;
//   align-content: center;
//   justify-content: center;
// `;

export const BoardIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.colors.barSecondaryText};
`;

export const BoardBtnBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const BoardBtn = styled.button`
  border: none;
  padding: 0;
  background-color: inherit;
`;

export const BtnIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.barSecondaryText};
`;
