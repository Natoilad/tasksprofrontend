import styled from 'styled-components';

export const LogOutBox = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  border: none;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.barPrimaryText};
  gap: 14px;
`;

export const LogOutIcon = styled.svg`
  width: 32px;
  height: 32px;
`;
