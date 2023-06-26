import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darkGray, white50 } from 'variables/variables';

export const BoardItem = styled(NavLink)`
  /* background-color: ${darkGray}; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: ${white50};
  margin: 0px -24px;
`;

export const BoardHero = styled.div`
  display: flex;
  gap: 8px;
  text-align: center;
`;

export const BoardIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${white50};
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
  stroke: ${white50};
`;
