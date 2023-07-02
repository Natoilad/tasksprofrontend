import styled from 'styled-components';
import 'variables/variables';

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  padding: 18px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primaryBg};
`;

export const ColumnName = styled.p`
  padding: 0px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins';
  letter-spacing: -0.28px;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const Btn = styled.button`
  background: none;
  border: none;
  padding: 0;
  
`;

export const IconEdit = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.secondaryText};
`;
