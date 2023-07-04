import styled from 'styled-components';
import 'variables/variables';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export const Conteiner = styled.div`
  /* position: relative; */
  display: flex;
  gap: 34px;
`;

export const ScrollBlock = styled(OverlayScrollbarsComponent)`
  padding-left: 20px;
  padding-right: 20px;
  height: 85vh;
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const ColumnList = styled.ul`
  display: flex;
  gap: 34px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 27px 78px;
  /* margin-left: 34px; */
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins';
  letter-spacing: -0.28px;
  gap: 8px;
`;

export const IconPlus = styled.svg`
  border-radius: 8px;
  fill: ${({ theme }) => theme.colors.columIconPlusFill};
  stroke: ${({ theme }) => theme.colors.columIconPlusStroke};
  `;
