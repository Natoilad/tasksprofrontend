import styled from '@emotion/styled';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
export const Conteiner = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  height: 400px;
`;

export const ScrollBlock = styled(OverlayScrollbarsComponent)`
  margin: 20px 0px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const Btn = styled.button`
  width: 335px;
  border: none;
  padding: 14px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #bedbb0;
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;
