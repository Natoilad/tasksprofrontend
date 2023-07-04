import styled from 'styled-components';
import 'variables/variables';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export const Conteiner = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  max-height: 87vh;
  padding-bottom: 15px;
`;

export const ScrollBlock = styled(OverlayScrollbarsComponent)`
  margin: 20px 0px;
  margin-right: -15px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0px;
  margin: 0px;
  max-height: window.innerHeight;
`;

export const Btn = styled.button`
  width: 335px;
  border: none;
  margin-top: auto;
  padding: 14px 0px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.btnText};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-bottom: 20px;
  /* &:focus {
    background: ${({ theme }) => theme.colors.btnFocus}
      }; */
  &:hover {
    background: ${({ theme }) => theme.colors.btnFocus}
  };
`;

export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  /* background-color: #fff; */
  fill: ${({ theme }) => theme.colors.iconPlusFill};
  stroke: ${({ theme }) => theme.colors.iconPlusStroke};
`;
