import styled from 'styled-components';
import { white100 } from 'variables/variables';

export const LogOutBox = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  border: none;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${white100};
  gap: 14px;
`;

export const LogOutIcon = styled.svg`
  width: 32px;
  height: 32px;
`;
