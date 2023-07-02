import styled from '@emotion/styled';
import 'variables/variables';
import { darkSecond, white100 } from 'variables/variables';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
export const Conteiner = styled.div`
  /* position: relative; */
  display: flex;
`;

export const ScrollBlock = styled(OverlayScrollbarsComponent)`
  padding-left: 20px;
  padding-right: 20px;

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
  margin-left: 34px;
  border: none;
  border-radius: 8px;
  background: ${darkSecond};
  white-space: nowrap;
  color: ${white100};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins';
  letter-spacing: -0.28px;
`;
