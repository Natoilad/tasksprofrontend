import styled from 'styled-components';
import 'variables/variables';
import { white100 } from 'variables/variables';

export const Wrap = styled.div`
  position: relative;
  width: 350px;
  /* height: 221px; */
  padding: 24px;
  border-radius: 8px;
  background: #151515;
`;

export const CloseBtn = styled.button`
  display: block;
  background: none;
  position: absolute;
  border: none;
  padding: 0;
  top: 14px;
  right: 14px;
`;

export const CloseIcon = styled.svg`
  width: 18px;
  height: 18px;
  /* fill: ${white100}; */
`;

export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  /* background-color: #fff; */
  fill: ${white100};
  stroke: beige;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h4`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-right: auto;
`;

export const Field = styled.input`
  width: 100%;
  height: 49px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4000000059604645;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: #fff;
  padding: 14px 0 14px 18px;

  &::placeholder {
    /* padding: 14px; */
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 49px;
  padding: 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: #bedbb0;
  color: #161616;

  text-align: center;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.28px;
`;
